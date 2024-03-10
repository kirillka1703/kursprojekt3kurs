import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { PeopleComponent } from '../../people/people.component';


@Component({
  selector: 'app-dialog-edit-wrapper1',
  templateUrl: './dialog-edit-wrapper1.component.html',
  styleUrls: ['./dialog-edit-wrapper1.component.css'],

})
export class DialogEditWrapper1Component implements OnInit {
  [x: string]: any;
  constructor(
    public dialogRef: MatDialogRef<DialogEditWrapper1Component>,
    @Inject(MAT_DIALOG_DATA) public data: PeopleComponent
  ) {}

  ngOnInit(): void {}


}
