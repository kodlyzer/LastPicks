import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  path: string;
  @Output() sendPath = new EventEmitter<string>();
  constructor() {
  }

  setPath(path: string) {
    this.path = path;
    this.sendPath.emit(path);
  }

}
