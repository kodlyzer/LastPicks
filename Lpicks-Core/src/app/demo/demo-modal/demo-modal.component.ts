import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
declare var PR;

@Component({
  selector: 'kdi-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss']
})

export class DemoModalComponent implements OnInit, AfterViewInit {

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

  ngAfterViewInit() {
    PR.prettyPrint();
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

  CopyFromTextArea(jsonContent: HTMLTextAreaElement) {
    console.log('Clicked Copy Icon');
    jsonContent.select();
    document.execCommand('copy');
  }
  CopyFromPre(pre: HTMLPreElement) {
    const selBox = document.createElement('textarea');
    selBox.value = pre.textContent;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}

