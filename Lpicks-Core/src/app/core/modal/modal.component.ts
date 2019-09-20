import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';

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

  @HostListener('window:keyup',['$event'])
  keyEvent(event: KeyboardEvent){

    // tslint:disable-next-line: deprecation
    if(event.keyCode === 13){
      this.openModel();
    }

    // tslint:disable-next-line: deprecation
    if(event.keyCode === 27){
      this.closeModel();
    }
  }

  openModel() {
    this.open = true;
  }
  closeModel() {
    this.open = false;
  }

  outside(){
    this.open = false;
  }
}
