import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Column } from '../models';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  URLCRUD = 'https://crudcrud.com/api/f605bc2b076540c789bd825277656ddf/column';
  httpClient: any;

  constructor(private http: HttpClient) {}
  addColumn(column: Column): Observable<Column> {
    return this.http.post<Column>(this.URLCRUD, column);
  }
  getColumns() {
    return this.http.get<Column[]>(this.URLCRUD);
  }
  deletePost(id: number) {
    return this.http.delete(this.URLCRUD + '/' + id);
  }
  updateColumn(column: Column): Observable<Column> {
    return this.http.put<Column>(this.URLCRUD + '/' + column._id, column);
  }
}
