import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../@shared/models/column';
import { BoardService } from '../@shared/services/board.service';
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  constructor(private boardService: BoardService) {}

  @Input() Column!: Column;

  col: Column[] = [];
  colDelete!: Object;
  @Input() _id!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() position!: number;
  ngOnInit(): void {}

  deleteById(id: number) {
    this.boardService.deletePost(id).subscribe((response) => {
      console.log(response);
      console.log(id);
      this.colDelete = response;
    });
  }
}
