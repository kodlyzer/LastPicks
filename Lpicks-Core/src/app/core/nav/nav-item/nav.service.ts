import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  path: string;
  link: string;
  @Output() sendPath = new EventEmitter<string>();
  @Output() sendLink = new EventEmitter<string>();
  constructor() {
  }

  setPath(path: string) {
    this.path = path;
    this.sendPath.emit(path);
  }
  setLink(link: string) {
    this.link = link;
    this.sendLink.emit(link);
  }

}
