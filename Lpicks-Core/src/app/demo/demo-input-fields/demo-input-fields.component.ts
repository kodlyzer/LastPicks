import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-input-fields',
  templateUrl: './demo-input-fields.component.html',
  styleUrls: ['./demo-input-fields.component.scss']
})
export class DemoInputFieldsComponent implements OnInit {
  demoInputField1 = {
    type: 'text',
    label: 'text'

  };
  demoInputField2 = {
    type: 'number',
    label: 'number'
  };
  demoInputField3 = {
    type: 'time',
    label: 'time'
  };
  demoInputField4 = {
    type: 'date',
    label: 'date'
  };
  constructor() { }

  ngOnInit() {
  }
  get InputField() {
    return JSON.stringify(this.demoInputField1, null, 2);
  }

  set InputField(v) {
    try {
      this.demoInputField1 = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }
  }
}
