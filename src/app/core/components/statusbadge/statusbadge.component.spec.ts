import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusbadgeComponent } from './statusbadge.component';

describe('StatusbadgeComponent', () => {
  let component: StatusbadgeComponent;
  let fixture: ComponentFixture<StatusbadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusbadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusbadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
