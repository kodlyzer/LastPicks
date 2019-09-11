import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'kdi-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  expanded = false;
  @Input() item: NavItem;
  @Input() depth: number;
  constructor(private navService: NavService) {
  }

  ngOnInit() {
    if (typeof this.depth === 'undefined') {
      this.depth = 0;
    }
  }
  getPath(path: string) {
    this.navService.setPath(path);
  }
}
