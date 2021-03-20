import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../book-interface';

@Component({
  selector: 'app-book-panel',
  templateUrl: './book-panel.component.html',
  styleUrls: ['./book-panel.component.scss']
})
export class BookPanelComponent implements OnInit {
  @Input() book: any;
  constructor() { }

  ngOnInit(): void {
  }

  getLogo() {

  }
}
