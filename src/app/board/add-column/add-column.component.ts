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
  @Input() Columns!: Column;
  @Output() onColumnAdded: EventEmitter<Column> = new EventEmitter();
  @Output() onColumnUpdate: EventEmitter<Column> = new EventEmitter();
  @Input('columnUpdating') set setColumnUpdating(column: Column | undefined) {
    this.columnIdUpdating = column?._id;
    if (column != undefined) {
      this.columnForm.patchValue({
        titreColumn: column.title,
        descriptionColumn: column.description,
        positionColumn: column.position,
      });
    }
    console.log(column);
  }
  columnIdUpdating: number | undefined;

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
    const description = this.columnForm.get('descriptionColumn')?.value;

    const partialColumn: Partial<Column> = {
      title: title,
      description: description,
      position: position,
    };

    if (!this.columnIdUpdating) {
      this.boardService.addColumn(partialColumn).subscribe((columnAdded) => {
        this.onColumnAdded.emit(columnAdded);
      });
    } else {
      this.boardService
        .updateColumn(this.columnIdUpdating, partialColumn)
        .subscribe(() => {
          //const columnUpdate = {columnIdUpdating, partialColumn.title;
          this.onColumnUpdate.emit({
            ...(partialColumn as Column),
            _id: this.columnIdUpdating as number,
          });
        });
    }
  }
}
