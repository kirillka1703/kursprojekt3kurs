import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewCalendarComponent } from './new-calendar/new-calendar.component';

@Component({
  selector: 'app-dialog-edit-wrapper',
  templateUrl: './dialog-edit-wrapper.component.html',
  styleUrls: ['./dialog-edit-wrapper.component.css']
})
export class DialogEditWrapperComponent implements OnInit {
  [x: string]: any;
  currentMonth: Date;
  selectedMonth: Date;
  weekDays: string[];
  calendar: Date[][];
  selectedDate: string = '';
  eventDescription: string;
  events: { [date: string]: string[] };
  respPersons: string[] = [];
  sportsDisciplines: string[] = [];
  materials: string[] = [];
  selectedMaterial: string;
  dates: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogEditWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewCalendarComponent,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.fetchSportsDisciplines();
    this.fetchRespPersons();
    this.fetchDates();
  }

  fetchSportsDisciplines(): void {
    this.http.get<any>('/api/disciplines').subscribe((response) => {
      this.sportsDisciplines = response.map((discipline: any) => discipline.name);
    });
  }

  fetchDates(): void {
    this.http.get<any[]>('/api/dates').subscribe((response) => {
      this.dates = response.map((date: any) => date.date);
      console.log('Dates:', this.dates);
    });
  }

  fetchRespPersons(): void {
    this.http.get<any[]>('/api/people').subscribe((response: any[]) => {
      this.respPersons = response.map(
        (person) => `${person.peopleName} ${person.firstName} ${person.patronymic}`
      );
    });
  }

  addEvent(): void {
    const event = {
      description: this.eventDescription,
      peopleName: this.selectedRespPerson,
      disciplineName: this.selectedSportsDiscipline,
      date: this.selectedMaterial
    };

    this.http.post<any>('/api/new-calendar/events', event).subscribe((response: any) => {
      console.log('Event added:', response);
      location.reload();
    });
  }

  clearEvent(): void {
  }
}
