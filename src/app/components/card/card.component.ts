import { Component, Input, OnInit } from '@angular/core';
import { Paint } from 'src/app/models/paint';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() unePeintureAAfficher!: Paint;

  constructor() {}

  ngOnInit(): void {}
}
