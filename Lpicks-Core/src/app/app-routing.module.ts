import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCardComponent } from './demo/demo-card-demo/demo-card.component';
import { DropdownDemoComponent } from './demo/dropdown-demo/dropdown-demo.component';
import { TreeDemoComponent } from './demo/tree-demo/tree-demo.component';
import { TabsDemoComponent } from './demo/tabs-demo/tabs-demo.component';

const routes: Routes = [
  { path: 'dropdown', component: DropdownDemoComponent },
  { path: 'tree', component: TreeDemoComponent },
  { path: 'card', component: DemoCardComponent },
  { path: 'tab', component: TabsDemoComponent },
  { path: '', redirectTo: 'dropdown', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
