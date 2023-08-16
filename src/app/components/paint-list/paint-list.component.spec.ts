import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintListComponent } from './paint-list.component';

describe('PaintListComponent', () => {
  let component: PaintListComponent;
  let fixture: ComponentFixture<PaintListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaintListComponent]
    });
    fixture = TestBed.createComponent(PaintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
