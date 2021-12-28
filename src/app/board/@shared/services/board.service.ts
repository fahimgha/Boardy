import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Card, Column } from '../models';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  URLCRUD = 'https://crudcrud.com/api/1880608e6e714624965e03f1bbbde4c5';
  httpClient: any;

  constructor(private http: HttpClient) {}
  addColumn(column: Partial<Column>): Observable<Column> {
    return this.http.post<Column>(this.URLCRUD + '/column', column);
  }
  addCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.URLCRUD + '/card', card);
  }
  getCards() {
    return this.http.get<Card[]>(this.URLCRUD + '/card');
  }
  getColumns() {
    return this.http.get<Column[]>(this.URLCRUD + '/column');
  }
  deletePost(id: number) {
    return this.http.delete(this.URLCRUD + '/column/' + id);
  }
  getColumn(id: number) {
    return this.http.get(this.URLCRUD + '/column/' + id);
  }
  updateColumn(id: number, column: Partial<Column>): Observable<Column> {
    return this.http.put<Column>(this.URLCRUD + '/column/' + id, column);
  }
}
