import { Component, OnInit } from '@angular/core';
import { Book } from '../../book-interface';

@Component({
  selector: 'app-book-panel',
  templateUrl: './book-panel.component.html',
  styleUrls: ['./book-panel.component.scss']
})
export class BookPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
