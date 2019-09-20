import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { TreeService } from './tree-item/tree.service';

@Component({
  selector: 'kdi-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() treeItems: TreeItem[];
  @Input() type: string;
  @Output() sendLink = new EventEmitter<string>();
  @Output() sendItem = new EventEmitter<TreeItem>();

  constructor(private treeService: TreeService) {
  }

  ngOnInit() {
    this.treeService.sendItem.subscribe((val: TreeItem) => {
      if (typeof val !== 'undefined') {
        this.sendItem.emit(val);
      }
    });

    this.treeService.sendLink.subscribe((val: string) => {
      if (typeof val !== 'undefined') {
        this.sendLink.emit(val);
      }
    });
  }
}
