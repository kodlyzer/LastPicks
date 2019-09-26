import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdi-icon',
  templateUrl: './icon.component.html',

  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input('icon') icon: string;


  constructor() { }

  ngOnInit() {

  }

}
