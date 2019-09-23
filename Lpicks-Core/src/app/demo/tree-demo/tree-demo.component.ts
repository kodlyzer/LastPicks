import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var PR;

@Component({
  selector: 'kdi-tree-demo',
  templateUrl: './tree-demo.component.html',
  styleUrls: ['./tree-demo.component.scss']
})
export class TreeDemoComponent implements OnInit, AfterViewInit {
  item: TreeItem;
  link: string;
  treeItems: TreeItem[] = [
    {
      displayName: 'Kongsberg',
      route: 'kongsberg',
      icon: 'box',
      children: [
        {
          displayName: 'Oil and Gas',
          route: 'kongsberg/oil_and_gas',
          icon: 'box',
          children: [
            {
              displayName: 'Oil',
              route: 'kongsberg/oil_and_gas/oil',
              icon: 'box',
            },
            {
              displayName: 'Gas',
              route: 'kongsberg/oil_and_gas/gas',
              icon: 'box',
            }
          ]
        }
      ]
    },
    {
      displayName: 'Maritime',
      route: 'maritime',
      icon: 'box',
      children: [
        {
          displayName: 'Simulation',
          route: 'maritime/simulation',
          icon: 'box',
          children: [
            {
              displayName: 'k-spice',
              route: 'maritime/simulation/k_spice',
              icon: 'box'
            }
          ]
        },
        {
          displayName: 'Digital Twin',
          route: 'maritime/digital_twin',
          icon: 'box'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    PR.prettyPrint();
  }

  handler(item: TreeItem) {
    this.item = item;
  }

  handlerLink(link: string) {
    this.link = link;
  }
  get TreeItems() {
    return JSON.stringify(this.treeItems, null, 2);
  }

  set TreeItems(v) {
    try {
      this.treeItems = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }
  }

  CopyFromTextArea(jsonContent: HTMLTextAreaElement) {
    console.log('Clicked Copy Icon');
    jsonContent.select();
    document.execCommand('copy');
  }
  CopyFromPre(pre: HTMLPreElement) {
    const selBox = document.createElement('textarea');
    selBox.value = pre.textContent;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
