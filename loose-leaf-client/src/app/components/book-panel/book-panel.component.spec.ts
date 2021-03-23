import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';

import { BookPanelComponent } from './book-panel.component';

describe('BookPanelComponent', () => {
  let component: BookPanelComponent;
  let fixture: ComponentFixture<BookPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPanelComponent, TruncatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
