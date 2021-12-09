import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Column } from '../@shared/models';
import { BoardService } from '../@shared/services/board.service';

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss'],
})
export class AddColumnComponent implements OnInit {
  @Output() onColumnAdded: EventEmitter<Column> = new EventEmitter();
  @Input() Columns!: Column;
  col: Column[] = [];
  col2!: Object;
  id!: number;
  constructor(private boardService: BoardService) {}
  ngOnInit(): void {}

  columnForm = new FormGroup({
    titreColumn: new FormControl('', [Validators.required]),
    descriptionColumn: new FormControl('', [Validators.required]),
    positionColumn: new FormControl('', [Validators.required]),
  });
  submit() {
    const title = this.columnForm.get('titreColumn')?.value;
    const position = this.columnForm.get('positionColumn')?.value;
    //const _id = this.columnForm.get('idColumn')?.value;
    const description = this.columnForm.get('descriptionColumn')?.value;
    this.onColumnAdded.emit({
      _id: this.id,
      title: title,
      description: description,
      position: position,
    });
    //const c: Column = { title, description } as Column;
    this.boardService
      .addColumn({
        _id: this.id,
        title: title,
        description: description,
        position: position,
      })
      .subscribe(() => {});
    this.boardService.getColumns().subscribe((columns) => {
      console.log(columns);
      this.col = columns;
    });
  }

  deleteColumn(id: number) {
    this.boardService.deletePost(id).subscribe((response) => {
      console.log(response);
      console.log(id);
      this.col2 = response;
    });
    this.boardService.getColumns().subscribe((columns) => {
      console.log(columns);
      this.col = columns;
    });
  }
}
