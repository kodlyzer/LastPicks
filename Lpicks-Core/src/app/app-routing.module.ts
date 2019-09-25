import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCardComponent } from './demo/demo-card-demo/demo-card.component';
import { DropdownDemoComponent } from './demo/dropdown-demo/dropdown-demo.component';
import { TreeDemoComponent } from './demo/tree-demo/tree-demo.component';
import { TabsDemoComponent } from './demo/tabs-demo/tabs-demo.component';
import { DemoTableComponent } from './demo/demo-table/demo-table.component';
import { DemoHeaderComponent } from './demo/demo-header/demo-header.component';
import { DemoModalComponent } from './demo/demo-modal/demo-modal.component';
import { ListgroupDemoComponent } from './demo/listgroup-demo/listgroup-demo.component';
import { DemoIconComponent } from './demo/demo-icon/demo-icon.component';

const routes: Routes = [
  { path: 'dropdown', component: DropdownDemoComponent },
  { path: 'tree', component: TreeDemoComponent },
  { path: 'card', component: DemoCardComponent },
  { path: 'tab', component: TabsDemoComponent },
  { path: 'table', component: DemoTableComponent },
  { path: 'header', component: DemoHeaderComponent },
  { path: 'modal', component: DemoModalComponent },
  { path: 'listgroup', component: ListgroupDemoComponent },
  { path: '', redirectTo: 'dropdown', pathMatch: 'full' },
  { path: 'icon', component: DemoIconComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
