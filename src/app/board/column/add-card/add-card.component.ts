import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Card } from '../../@shared/models';
import { BoardService } from '../../@shared/services/board.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  @Input() Cards!: Card;
  @Output() onCardAdded: EventEmitter<Card> = new EventEmitter();
  card: Card[] = [];
  id!: number;
  constructor(private boardService: BoardService) {}
  ngOnInit(): void {}

  cardForm = new FormGroup({
    titreCard: new FormControl('', [Validators.required]),
    //columnId: new FormControl('', [Validators.required]),
  });

  // createCard() {
  //   const titreCard = this.cardForm.get('titleCard')?.value;

  //   //const columnId = this.cardForm.get('idColumn')?.value;

  //   const partialCard: Partial<Card> = {
  //     title: titreCard,
  //   };
  //     this.boardService.addColumn(partialCard).subscribe((CardAdded) => {
  //       this.onCardAdded.emit(CardAdded);
  //     });
  // }
}
