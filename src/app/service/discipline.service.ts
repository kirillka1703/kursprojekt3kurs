import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {
  constructor(private http: HttpClient) {}

  getAllDisciplines(): Observable<any[]> {
    return this.http.get<any[]>('/api/disciplines');
  }
}
