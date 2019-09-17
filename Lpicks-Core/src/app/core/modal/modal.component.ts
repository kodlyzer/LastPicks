import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'kdi-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  open = false;
  @Input() overlay: modal;
  constructor() { }

  ngOnInit() {
  }
  openModel() {
    this.open = true;
  }
  closeModel() {
    this.open = false;
  }
}
