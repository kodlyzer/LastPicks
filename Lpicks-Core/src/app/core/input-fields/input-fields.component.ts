import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdi-input-field',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.scss']
})
export class InputFieldsComponent implements OnInit {
  @Input('inputField') inputField: { type: string, label: string };
  constructor() { }

  ngOnInit() {
  }

}
