
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private apiUrl = '/api/people';
  constructor(private http: HttpClient) { }

  deletePerson(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
