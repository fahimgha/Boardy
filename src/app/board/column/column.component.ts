import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Column } from '../@shared/models/column';
import { BoardService } from '../@shared/services/board.service';
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  @Input() column!: Column;
  @Output() onColumnDeleted: EventEmitter<number> = new EventEmitter();

  col: Column[] = [];
  colDelete!: Object;
  @Input() _id!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() position!: number;

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {}

  deleteById(id: number) {
    this.boardService.deletePost(id).subscribe((response) => {
      console.log(response);
      console.log(id);
      this.colDelete = response;
    });
  }

  deleteColumn(id: number) {
    this.boardService.deletePost(id).subscribe((response) => {
      this.onColumnDeleted.emit(id);
    });
  }
}
