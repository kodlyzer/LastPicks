import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavigationService } from './nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'kdi-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  expanded = false;
  @Input() item: NavItem;
  @Input() depth = 0;
  isButton: boolean;
  @Input() type = 'button';
  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.isButton = (this.type === 'button') ? true : false;
  }

  sendItem(item: NavItem) {
    this.navigationService.sentItem(item);
  }

  routeTo(link: string) {
    this.navigationService.sentLink(link);
  }
}
