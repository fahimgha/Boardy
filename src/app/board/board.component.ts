import { Component, OnInit } from '@angular/core';
import { BOARD } from './@shared/mock/board.mock';
import { COLUMNS } from './@shared/mock/column.mock';
import { ColumnForm } from './add-column/add-column.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor() {}
  titleapp = 'Boardy App';
  board = BOARD;
  columns = COLUMNS;
  //columns: Column[] =COLUMNS
  ngOnInit(): void {}

  addColumn(column: ColumnForm) {
    this.columns.push({
      _id: 6,
      position: 7,
      title: column.title,
      description: column.description,
    });
  }
}
