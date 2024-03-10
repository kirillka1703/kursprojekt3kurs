import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DialogEditWrapper1Component } from './dialog-edit-wrapper1/dialog-edit-wrapper1.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogEditWrapper2Component } from './dialog-edit-wrapper2/dialog-edit-wrapper2.component';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogEditWrapper3Component } from './dialog-edit-wrapper3/dialog-edit-wrapper3.component';
import { DialogEditWrapper4Component } from './dialog-edit-wrapper4/dialog-edit-wrapper4.component';


export interface PeopleTable {
  lastName: string;
  firstName: string;
  patronymic: string;
  disciplineName: string;
  workingTime: number;
  actions: string;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
[x: string]: any;
  displayedColumns: string[] = ['peopleName', 'firstName', 'patronymic', 'disciplineName', 'workingTime','actions'];
  dataSource = new MatTableDataSource<PeopleTable>();
  clickedRows = new Set<PeopleTable>();
  dialogVisible: boolean = false;
  dialogTitle: string = '';
  dialogButtonLabel: string = '';
  currentPerson: any = {};
  editingIndex: number | undefined;
  validationError: string = '';
  dialog1Open: boolean = false;
  dialog2Open: boolean = false;


  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadPeopleFromBackend();
  }


  openDialog1(): void {
    this.dialog1Open = true;
    const dialogRef = this.dialog.open(DialogEditWrapper1Component, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialog1Open = false;
    });
  }

  openDialog2(): void {
    this.dialog2Open = true;
    const dialogRef = this.dialog.open(DialogEditWrapper2Component, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialog2Open = false;
    });
  }

  openDialog3(): void {
    this.dialog2Open = true;
    const dialogRef = this.dialog.open(DialogEditWrapper3Component, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialog2Open = false;
    });
  }

  openDialog4(): void {
    this.dialog2Open = true;
    const dialogRef = this.dialog.open(DialogEditWrapper4Component, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialog2Open = false;
    });
  }

  closeDialog1(): void {
    this.dialog1Open = false;
  }

  closeDialog2(): void {
    this.dialog2Open = false;
  }

  closeDialog3(): void {
    this.dialog1Open = false;
  }

  closeDialog4(): void {
    this.dialog2Open = false;
  }

  addNewPeople(): void {
    const dialogAddingNewStudent = this.dialog.open(DialogEditWrapper1Component, {
      width: '400px',
      data: null
    });

    dialogAddingNewStudent.afterClosed().subscribe((result) => {
      console.log('Dialog closed:', result);
    });
  }
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  loadPeopleFromBackend(): void {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.http.get<PeopleTable[]>('/api/people', httpOptions).subscribe(
      (response: PeopleTable[]) => {
        this.dataSource.data = response;
      },
      (error) => {
        console.error('Failed to load people:', error);
      }
    );
  }

  deleteData(element: any) {
    const deleteUrl = `api/people/${element.id}`;
    this.http.delete(deleteUrl).subscribe(
      () => {
        console.log('Данные успешно удалены!');
        this.clickedRows.add(element);
        this.dataSource.data = this.dataSource.data.filter(item => item !== element);
      },
      (error) => {
        console.error('Ошибка при удалении данных:', error);
      }
    );
  }
  savePeopleToStorage(): void {
  }

  savePerson(): void {
    if (this.validatePersonData()) {
      if (this.editingIndex !== undefined) {
        this.updatePerson(this.currentPerson, this.editingIndex);
      } else {
        this.addPerson(this.currentPerson);
      }

      this.closeDialog();
    } else {
      this.validationError = 'Заполните все данные';
    }
  }


  validatePersonData(): boolean {
    return (
      this.currentPerson.lastName &&
      this.currentPerson.firstName &&
      this.currentPerson.patronymic &&
      this.currentPerson.disciplineName &&
      this.currentPerson.workingTime != null
    );
  }

  addPerson(person: any): void {
    this.dataSource.data.push({ ...person });
  }

  closeDialog(): void {
    this.currentPerson = {};
    this.editingIndex = undefined;
    this.dialogVisible = false;
    this.validationError = '';
  }

}
