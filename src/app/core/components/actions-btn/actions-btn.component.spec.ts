import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsBtnComponent } from './actions-btn.component';

describe('ActionsBtnComponent', () => {
  let component: ActionsBtnComponent;
  let fixture: ComponentFixture<ActionsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
