import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdi-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() overlay: { title: string, option: [] };
  constructor() { }

  ngOnInit() {
  }

}

