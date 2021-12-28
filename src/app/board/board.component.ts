import { Component, OnInit } from '@angular/core';
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
  //columnsUpdating: Column[] = [];
  columnUpdating?: Column;

  constructor(private boardService: BoardService) {}
  ngOnInit(): void {
    this.boardService.getColumns().subscribe((columns) => {
      //console.log(columns);
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

  updateColumn(column: Column) {
    this.columnUpdating = column;
  }

  deleteColumn(id: number) {
    this.columns = this.columns.filter((c) => c._id != id);
  }

  updateTest(column: Column) {
    // const index = this.columns.findIndex((c) => c._id == column._id);
    // console.log('column to update > ', column);
    // if (index != -1) {
    //   console.log(this.columns[index]);
    //   this.columns[index] = column;
    // }

    this.columns = this.columns.map((c) => {
      if (c._id == column._id) {
        c = column;
      }
      return c;
    });
  }
}
