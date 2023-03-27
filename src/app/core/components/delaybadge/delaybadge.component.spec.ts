import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelaybadgeComponent } from './delaybadge.component';

describe('DelaybadgeComponent', () => {
  let component: DelaybadgeComponent;
  let fixture: ComponentFixture<DelaybadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelaybadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelaybadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
