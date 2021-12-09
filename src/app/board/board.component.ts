import { Component, OnInit } from '@angular/core';
import { BOARD } from './@shared/mock/board.mock';
import { COLUMNS } from './@shared/mock/column.mock';
import { Column } from './@shared/models/column';
import { BoardService } from './@shared/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  titleapp = 'Boardy';
  columns: Column[] = [];

  constructor(private boardService: BoardService) {}
  ngOnInit(): void {
    this.boardService.getColumns().subscribe((columns) => {
      console.log(columns);
      this.columns = columns;
    });
  }

  addColumn(column: Column) {
    this.columns.push({
      _id: column._id,
      title: column.title,
      description: column.description,
      position: column.position,
    });
  }

  deleteColumn(id: number) {
    this.columns = this.columns.filter((c) => c._id != id);
  }
}
