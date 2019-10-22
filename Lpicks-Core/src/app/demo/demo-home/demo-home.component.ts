import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.scss']
})
export class DemoHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  onClicked() {
    this.router.navigate(["dropdown"]);
  }
}
