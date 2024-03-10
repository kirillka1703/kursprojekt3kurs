import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

export interface DisciplineTable {
  name: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.css']
})
export class DisciplineComponent implements OnInit {

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  displayedColumns: string[] = ['name', 'category', 'description'];
  dataSource = new MatTableDataSource<DisciplineTable>();
isSidebarOpen: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadDisciplinesFromBackend();
  }

  loadDisciplinesFromBackend(): void {
    this.http.get<DisciplineTable[]>('/api/disciplines').subscribe(
      (response: DisciplineTable[]) => {
        this.dataSource.data = response;
      },
      (error) => {
        console.error('Failed to load disciplines:', error);
      }
    );
  }
}
