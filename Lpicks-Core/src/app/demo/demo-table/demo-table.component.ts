import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.scss']
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
        '9004567878',
        'Bangalore',
      ],
      [
        'shruta',
        'SP',
        '1234567890',
        'Bangalore'
      ],
      [
        'subash',
        'Raj',
        '1234567890',
        'Bangalore'
      ],
      [
        'Anuja',
        'Anu',
        '0987654321',
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
