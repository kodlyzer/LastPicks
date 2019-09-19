import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgroupDemoComponent } from './listgroup-demo.component';

describe('ListgroupDemoComponent', () => {
  let component: ListgroupDemoComponent;
  let fixture: ComponentFixture<ListgroupDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListgroupDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListgroupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
