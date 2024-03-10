import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeopleComponent } from '../people.component';
import { DialogEditWrapper1Component } from '../dialog-edit-wrapper1/dialog-edit-wrapper1.component';

@Component({
  selector: 'app-dialog-edit-wrapper3',
  templateUrl: './dialog-edit-wrapper3.component.html',
  styleUrls: ['./dialog-edit-wrapper3.component.css']
})
export class DialogEditWrapper3Component implements OnInit {

  [x: string]: any;
  constructor(
    public dialogRef: MatDialogRef<DialogEditWrapper1Component>,
    @Inject(MAT_DIALOG_DATA) public data: PeopleComponent
  ) {}

  ngOnInit(): void {
  }

}
