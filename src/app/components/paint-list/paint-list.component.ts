import { Component, Input, OnInit } from '@angular/core';
import { Paint } from 'src/app/models/paint';

@Component({
  selector: 'app-paint-list',
  templateUrl: './paint-list.component.html',
  styleUrls: ['./paint-list.component.css'],
})
export class PaintListComponent implements OnInit {
  @Input() paintsRecupDeLaHome!: Paint[];

  constructor() {}

  ngOnInit(): void {}
}
