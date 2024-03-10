import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface StatisticTable {
  peopleName: string;
  quantity: number;
  mainevent: string;
  allevent: string;
}

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  displayedColumns: string[] = ['peopleName', 'quantity', 'mainevent', 'allevent'];
  dataSource: MatTableDataSource<StatisticTable> = new MatTableDataSource<StatisticTable>();
  clickedRows = new Set<StatisticTable>();
  isSidebarOpen = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadStatisticFromBackend();
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  loadStatisticFromBackend(): void {
    this.http.get<StatisticTable[]>('/api/statistic').subscribe(
      (response: StatisticTable[]) => {
        this.dataSource.data = response;
      },
      (error) => {
        console.error('Failed to load statistics:', error);
      }
    );
  }
}
