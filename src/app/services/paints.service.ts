import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paint } from '../models/paint';

@Injectable({
  providedIn: 'root',
})
export class PaintsService {

  private apiurl = 'http://localhost:3000/paints';
  constructor(private http: HttpClient) {}

  getPaints(): Observable <Paint[]> {
    return this.http.get<Paint[]>(`${this.apiurl}`);
  }

}
