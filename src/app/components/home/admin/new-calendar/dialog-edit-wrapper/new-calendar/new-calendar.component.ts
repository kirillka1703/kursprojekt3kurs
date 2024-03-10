import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DialogEditWrapperComponent } from '../dialog-edit-wrapper.component';

export interface EventTable {
  peopleName: string;
  date: string;
  disciplineName: string;
  description: string;
}

@Component({
  selector: 'app-new-calendar',
  templateUrl: './new-calendar.component.html',
  styleUrls: ['./new-calendar.component.css'],
})
export class NewCalendarComponent implements OnInit {
  [x: string]: any;
  displayedColumns: string[] = ['date', 'peopleName', 'disciplineName', 'description','actions'];
  dataSource = new MatTableDataSource<EventTable>([]);
  clickedRows = new Set<EventTable>();
  selectedSportsDiscipline: any = null;
  selectedRespPerson: any = null;
  currentMonth: Date;
  selectedMonth: Date;
  weekDays: string[];
  calendar: Date[][];
  selectedDate: string = '';
  eventDescription: string;
  events: EventTable[];
  isSidebarOpen = false;
  sidebarOpen: any;
  isCellActive = {};

  constructor(private dialog: MatDialog, private http: HttpClient) {}


  loadEventsFromBackend(): void {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.http.get<EventTable[]>('/api/new-calendar', httpOptions).subscribe(
      (response: EventTable[]) => {
        this.dataSource.data = response;
      },
      (error) => {
        console.error('Failed to load events:', error);
      }
    );
  }
  deleteData(element: any) {
    const deleteUrl = `/api/new-calendar/${element.id}`;
    this.http.delete(deleteUrl)
      .subscribe(
        () => {
          console.log('Данные успешно удалены!');
          location.reload();
        },
        (error) => {
          console.error('Ошибка при удалении данных:', error);
          location.reload();
        }
      );
  }
  showEventDialog(cell: number) {
    this.isCellActive[cell] = !this.isCellActive[cell];
    localStorage.setItem('cellData', JSON.stringify(this.isCellActive));
  }

  ngOnInit(): void {
    this.currentMonth = new Date();
    this.selectedMonth = new Date();
    this.weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    this.generateCalendar();
    this.eventDescription = '';
    this.loadEventsFromBackend();

    if (localStorage.getItem('cellData')) {
      this.isCellActive = JSON.parse(localStorage.getItem('cellData'));
    } else {
      this.isCellActive = Array.from({ length: 32 }).fill(false);
    }
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  addNewEvent(): void {
    const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent, {
      width: '600px',
      height: '600px',
      data: {
      }
    });
  }


  generateCalendar(): void {
  }


  selectDate(date: Date): void {
    if (date !== null) {
      const correctedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
      this.selectedDate = correctedDate.toISOString().slice(0, 10);
    } else {
      this.selectedDate = '';
    }
  }

  clearEvent(): void {
    if (this.selectedDate) {
      delete this.events[this.selectedDate];
      localStorage.setItem('events', JSON.stringify(this.events));
    }
  }

  deleteEvent(index: number): void {
    delete this.events[this.selectedDate][index];
  }
}
