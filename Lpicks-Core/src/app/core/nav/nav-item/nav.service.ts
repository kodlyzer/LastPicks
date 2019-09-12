import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  @Output() sendLink = new EventEmitter<string>();
  @Output() sendItem = new EventEmitter<NavItem>();
  constructor() {
  }

  sentItem(item: NavItem) {
    this.sendItem.emit(item);
  }

  sentLink(link: string) {
    this.sendLink.emit(link);
  }

}
