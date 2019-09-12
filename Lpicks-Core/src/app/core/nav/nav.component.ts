import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { NavService } from './nav-item/nav.service';

@Component({
  selector: 'kdi-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  @Input() navitems: NavItem[];
  @Output() sendPath = new EventEmitter<string>();
  @Output() sendLink = new EventEmitter<string>();

  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.navService.sendPath.subscribe((val: string) => {
      this.sendPath.emit(val);
    });

    this.navService.sendLink.subscribe((val: string) => {
      this.sendLink.emit(val);
    });
  }
}
