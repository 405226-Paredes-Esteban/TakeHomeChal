import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundModalComponent } from './not-found-modal.component';

describe('NotFoundModalComponent', () => {
  let component: NotFoundModalComponent;
  let fixture: ComponentFixture<NotFoundModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
