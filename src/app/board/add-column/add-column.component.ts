import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { COLUMNS } from '../@shared/mock';
import { Column } from '../@shared/models';
import { BoardService } from '../@shared/services/board.service';

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss'],
})
export class AddColumnComponent implements OnInit {
  @Output() onColumnAdded: EventEmitter<ColumnForm> = new EventEmitter();
  @Input() Columns!: Column;
  col: Column[] = [];
  constructor(private boardService: BoardService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  columnForm = new FormGroup({
    titreColumn: new FormControl('', [Validators.required]),
    descriptionColumn: new FormControl('', [Validators.required]),
    positionColumn: new FormControl('', [Validators.required]),
    textColumn: new FormControl('', [Validators.required]),
  });
  submit() {
    //console.log(this.columnIDControl);
    const title = this.columnForm.get('titreColumn')?.value;
    const description = this.columnForm.get('descriptionColumn')?.value;
    this.onColumnAdded.emit({ title: title, description: description });
  }
  secSubmit() {
    const title = this.columnForm.get('titreColumn')?.value;
    const description = this.columnForm.get('descriptionColumn')?.value;
    this.onColumnAdded.emit({ title: title, description: description });
    const c: Column = { title, description } as Column;
    this.boardService
      .addColumn({
        title: title,
        description: description,
      })
      .subscribe(() => {});

    this.boardService.getColumns().subscribe((columns) => {
      console.log(columns);
      this.col = columns;
    });
  }
}
export interface ColumnForm {
  title: string;
  description: string;
}
