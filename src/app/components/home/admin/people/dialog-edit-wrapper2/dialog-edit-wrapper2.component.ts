import { Component, Inject, OnInit } from '@angular/core';
import { DialogEditWrapper1Component } from '../dialog-edit-wrapper1/dialog-edit-wrapper1.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeopleComponent } from '../people.component';

@Component({
  selector: 'app-dialog-edit-wrapper2',
  templateUrl: './dialog-edit-wrapper2.component.html',
  styleUrls: ['./dialog-edit-wrapper2.component.css']
})

  export class DialogEditWrapper2Component implements OnInit {
    [x: string]: any;
    constructor(
      public dialogRef: MatDialogRef<DialogEditWrapper1Component>,
      @Inject(MAT_DIALOG_DATA) public data: PeopleComponent
    ) {}


  ngOnInit(): void {
  }

}
