import { Component, OnInit, Input } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'kdi-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() overlay: { title: string, content: string, option: [] };
  constructor() { }

  ngOnInit() {
  }

}
