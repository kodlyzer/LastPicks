import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.sass']
})
export class DemoTableComponent implements OnInit {

  tablecontent = {
    header: [
      'FirstName',
      'LastName',
      'Phone',
      'Place'
    ],
    body: [
      [
        'Naga',
        'Darshan',
        '9008335503',
        'Bangalore',
      ],
      [
        'shruta',
        'Anu',
        '7892824465',
        'Bangalore'
      ],
      [
        'subash',
        'Anu',
        '7892824465',
        'Bangalore'
      ],
      [
        'Anuja',
        'Anu',
        '7892824465',
        'Bangalore'
      ]
    ],
    theme: 'kx-theme--teal',
    type: 'teal'
  }
  constructor() { }

  ngOnInit() {
  }

}
