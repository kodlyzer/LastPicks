import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'kdi-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // @ViewChild('myModal') myModal;
  open = false;
  @Input() overlay: modal;
  constructor() { }

  ngOnInit() {
  }
  openModel() {
    this.open = true;

  }
  closeModel() {
    console.log('Close');
    this.open = false;
    // this.myModal.nativeElement.className = 'modal-hide';

  }
}
