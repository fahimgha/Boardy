import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../@shared/models';
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  constructor() {}
  @Input() Column!: Column;

  @Input() title!: string;
  @Input() description!: string;

  ngOnInit(): void {}
}
