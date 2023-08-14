import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyPaintingComponent } from './page-my-painting.component';

describe('PageMyPaintingComponent', () => {
  let component: PageMyPaintingComponent;
  let fixture: ComponentFixture<PageMyPaintingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMyPaintingComponent]
    });
    fixture = TestBed.createComponent(PageMyPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
