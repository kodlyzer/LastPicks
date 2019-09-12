import { Component, Input } from '@angular/core';

@Component({
  selector: 'kdi-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  title = 'livedemo';
  model = 'Enter code';
  constructor() { console.clear(); }
  // Submit()
  // {
  //   //console.log(this.model);
  // }
}
