import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputFieldsComponent } from './demo-input-fields.component';

describe('DemoInputFieldsComponent', () => {
  let component: DemoInputFieldsComponent;
  let fixture: ComponentFixture<DemoInputFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoInputFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
