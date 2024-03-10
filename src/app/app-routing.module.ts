import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticComponent } from './components/home/admin/statistic/statistic.component';
import { DisciplineComponent } from './components/home/admin/discipline/discipline.component';
import { PeopleComponent } from './components/home/admin/people/people.component';
import { NewCalendarComponent } from './components/home/admin/new-calendar/dialog-edit-wrapper/new-calendar/new-calendar.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'discipline', component: DisciplineComponent },
  { path: 'new-calendar', component: NewCalendarComponent },
  { path: 'statistic', component: StatisticComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
