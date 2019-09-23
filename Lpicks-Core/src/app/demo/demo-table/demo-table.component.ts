import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var PR;

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.scss']
})
export class DemoTableComponent implements OnInit, AfterViewInit{


  table: TableContent = {
    header: {
      firstname: 'FirstName',
      lastname: 'LastName',
      phonenumber: 'Phone',
      place: 'Place',
      pincode: 'Pincode'
    },
    body: [
      {
        firstname: 'subash',
        lastname: 'raj',
        pincode: '560045'
      },
      {
        firstname: 'Naga',
        lastname: 'Darshan',
        phonenumber: '1234567890',
        place: 'Bangalore'
      },
      {
        firstname: 'anuja',
        lastname: 'anu',
        phonenumber: '1234567890',
        place: 'Bangalore'
      },
      {
        firstname: 'shruta',
        lastname: 'saralaya',
        phonenumber: '1234567890',
        place: 'Bangalore'
      },
      {
        firstname: 'shubam',
        lastname: 'patro',
        phonenumber: '12347890',
        place: 'Bangalore'
      },
      {
        firstname: 'sonali',
        lastname: 'rawat',
        phonenumber: '12347890',
        place: 'Bangalore'
      },
    ],
    theme: 'kx-theme--teal',
    type: 'teal'
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    PR.prettyPrint();
  }

  get Table() {
    return JSON.stringify(this.table, null, 2);
  }

  set Table(v) {
    try {
      this.table = JSON.parse(v);
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
