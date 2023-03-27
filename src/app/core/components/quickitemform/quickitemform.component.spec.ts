import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickitemformComponent } from './quickitemform.component';

describe('QuickitemformComponent', () => {
  let component: QuickitemformComponent;
  let fixture: ComponentFixture<QuickitemformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickitemformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickitemformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
