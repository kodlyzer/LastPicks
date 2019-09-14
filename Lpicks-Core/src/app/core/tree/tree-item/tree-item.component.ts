import { Component, Input, OnInit } from '@angular/core';
import { TreeService } from './tree.service';

@Component({
  selector: 'kdi-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss'],
})
export class TreeItemComponent implements OnInit {
  expanded = false;
  @Input() item: TreeItem;
  @Input() depth = 0;
  isButton: boolean;
  @Input() type = 'button';
  constructor(private navigationService: TreeService) {
  }

  ngOnInit() {
    this.isButton = (this.type === 'button') ? true : false;
  }

  sendItem(item: TreeItem) {
    this.navigationService.sentItem(item);
  }

  routeTo(link: string) {
    this.navigationService.sentLink(link);
  }
}
