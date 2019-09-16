import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'kdi-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss']
})

export class DemoModalComponent implements OnInit {

  overlay = {
    icon: 'success',
    title: 'Modal Title',
    option: [
      {
        link: '#',
        name: 'Got It'
      },
      {
        link: 'https://en.wikipedia.org/wiki/Modal_window',
        name: 'Did not Get It'
      },
      {
        link: '#',
        name: 'cancel'
      }
    ],
    size: 'small'
  };





  constructor() { }

  ngOnInit() {

  }
  get Modal() {
    return JSON.stringify(this.overlay, null, 2);
  }

  set Modal(v) {
    try {
      this.overlay = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }
  }



}

