import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Column } from '../models';
import { ColumnForm } from '../../add-column/add-column.component';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  URLCRUD = 'https://crudcrud.com/api/5ecf4a6bc4674b05970649a4d28ba37f/column';
  httpClient: any;
  constructor(private http: HttpClient) {}

  addColumn(column: ColumnForm): Observable<Column> {
    return this.http.post<Column>(this.URLCRUD, column);
  }
  getColumns() {
    return this.http.get<Column[]>(this.URLCRUD);
  }
  deletePost(id: number) {
    return this.http.delete(this.URLCRUD + '/' + id);
  }
}
