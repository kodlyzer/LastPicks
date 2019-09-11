import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDemoComponent } from './nav-demo.component';

describe('NavDemoComponent', () => {
  let component: NavDemoComponent;
  let fixture: ComponentFixture<NavDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
