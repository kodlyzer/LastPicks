import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  @Output() sendLink = new EventEmitter<string>();
  @Output() sendItem = new EventEmitter<TreeItem>();
  constructor() {
  }

  sentItem(item: TreeItem) {
    this.sendItem.emit(item);
  }

  sentLink(link: string) {
    this.sendLink.emit(link);
  }

}
