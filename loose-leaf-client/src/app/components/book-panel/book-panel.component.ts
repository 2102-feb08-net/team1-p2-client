import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-book-panel',
  templateUrl: './book-panel.component.html',
  styleUrls: ['./book-panel.component.scss']
})
export class BookPanelComponent implements OnInit {
  @Input() book: Book | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  getLogo() {

  }
}
