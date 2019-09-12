import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { NavigationService } from './nav-item/nav.service';

@Component({
  selector: 'kdi-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() navitems: NavItem[];
  @Input() type: string;
  @Output() sendLink = new EventEmitter<string>();
  @Output() sendItem = new EventEmitter<NavItem>();

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.navigationService.sendItem.subscribe((val: NavItem) => {
      if (typeof val !== 'undefined') {
        this.sendItem.emit(val);
      }
    });

    this.navigationService.sendLink.subscribe((val: string) => {
      if (typeof val !== 'undefined') {
        this.sendLink.emit(val);
      }
    });
  }
}
