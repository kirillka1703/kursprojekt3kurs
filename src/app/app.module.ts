
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionStorageService } from 'angular-web-storage';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { DisciplineComponent } from './components/home/admin/discipline/discipline.component';
import { StatisticComponent } from './components/home/admin/statistic/statistic.component';
import { DialogEditWrapperComponent } from './components/home/admin/new-calendar/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { MatButtonModule } from '@angular/material/button';
import { PeopleComponent } from './components/home/admin/people/people.component';
import { DialogEditWrapper1Component } from './components/home/admin/people/dialog-edit-wrapper1/dialog-edit-wrapper1.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NewCalendarComponent } from './components/home/admin/new-calendar/dialog-edit-wrapper/new-calendar/new-calendar.component';
import {MatCardModule} from '@angular/material/card';
import { DialogEditWrapper2Component } from './components/home/admin/people/dialog-edit-wrapper2/dialog-edit-wrapper2.component';
import { DialogEditWrapper3Component } from './components/home/admin/people/dialog-edit-wrapper3/dialog-edit-wrapper3.component';
import { DialogEditWrapper4Component } from './components/home/admin/people/dialog-edit-wrapper4/dialog-edit-wrapper4.component';
import { MatDialogModule } from '@angular/material/dialog';


registerLocaleData(localeRu);
@NgModule({
  declarations: [
    AppComponent,
    DisciplineComponent,
    StatisticComponent,
    DialogEditWrapperComponent,
    PeopleComponent,
    DialogEditWrapper1Component,
    NewCalendarComponent,
    DialogEditWrapper2Component,
    DialogEditWrapper3Component,
    DialogEditWrapper4Component


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModalModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatCardModule

  ],

  providers: [
    SessionStorageService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
