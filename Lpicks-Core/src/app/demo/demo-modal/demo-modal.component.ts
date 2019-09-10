import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdi-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss']
})
export class DemoModalComponent implements OnInit {

  overlay = {
    title: 'Modal Title',
    content: `I'm user interface design for computer applications, a modal window is a 
    graphical control element  subordinate to an application's main window. It creates a
     mode that disables the main window, but
    keeps it visible with the modal window  a    as a child window in front of it`,
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
    ]
  };
  constructor() { }

  ngOnInit() {

  }

}
