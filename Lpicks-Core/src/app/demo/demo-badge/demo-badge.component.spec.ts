import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBadgeComponent } from './demo-badge.component';

describe('DemoBadgeComponent', () => {
  let component: DemoBadgeComponent;
  let fixture: ComponentFixture<DemoBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
