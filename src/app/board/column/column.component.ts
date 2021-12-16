import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../@shared/models';
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
  @Output() onColumnEdit: EventEmitter<Column> = new EventEmitter();
  col: Column[] = [];
  colDelete!: Object;
  cards: Card[] = [];
  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.boardService.getCards().subscribe((cards) => {
      //console.log(columns);
      this.cards = cards;
    });
  }
  addCard(card: Card) {
    this.cards.push({
      _id: card._id,
      title: card.title,
      columnId: card.columnId,
    });
  }
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
  updateColumn(column: Column){
    this.onColumnEdit.emit(column);
    console.log(column);
  }
}
