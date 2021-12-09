import { Component, OnInit } from '@angular/core';
import { BOARD } from './@shared/mock/board.mock';
import { COLUMNS } from './@shared/mock/column.mock';
import { Column } from './@shared/models/column';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor() {}
  titleapp = 'Boardy';
  //board = BOARD;
  //columns = COLUMNS;
  col: Column[] = [];
  columns: Column[] = [];
  //columns: Column[] =COLUMNS
  ngOnInit(): void {}

  addColumn(column: Column) {
    this.col.push({
      _id: column._id,
      title: column.title,
      description: column.description,
      position: column.position,
    });
  }
}
