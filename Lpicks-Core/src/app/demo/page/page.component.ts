import { Component } from '@angular/core';

@Component({
  selector: 'kdi-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  title = 'livedemo';
  model = 'some text';
  constructor() { console.clear(); }
}
