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
  columnUpdating: number | undefined;
  @Input("columnUpdating") set setColumnUpdating(column: Column | undefined) {
    
    this.columnUpdating = column?._id;

    if(column!=undefined){
      this.columnForm.patchValue({
        titreColumn : column.title,
        descriptionColumn : column.description,
        positionColumn : column.position,
      })
    }
    console.log(column);
  }
  col: Column[] = [];
  id!: number;
  constructor(private boardService: BoardService) {}
  ngOnInit():void {

  }

  columnForm = new FormGroup({
    titreColumn: new FormControl('', [Validators.required]),
    descriptionColumn: new FormControl('', [Validators.required]),
    positionColumn: new FormControl('', [Validators.required]),
  });
  submit() {
    const title = this.columnForm.get('titreColumn')?.value;
    
    const position = this.columnForm.get('positionColumn')?.value;
    const description = this.columnForm.get('descriptionColumn')?.value;
    
    if(this.columnUpdating!=undefined){

    }
    this.onColumnAdded.emit({
      _id: this.id,
      title: title,
      description: description,
      position: position,
    });
    if(this.columnUpdating == undefined){
    this.boardService
      .addColumn({
        _id: this.id,
        title: title,
        description: description,
        position: position,
      })
      .subscribe(() => {});
    }else{
      this.boardService.updateColumn(this.columnUpdating,this.Columns)
    }
  }

}
