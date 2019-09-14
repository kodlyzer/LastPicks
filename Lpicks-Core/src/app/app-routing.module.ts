import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCardComponent } from './demo/demo-card-demo/demo-card.component';
import { DropdownDemoComponent } from './demo/dropdown-demo/dropdown-demo.component';
import { NavDemoComponent } from './demo/nav-demo/nav-demo.component';

const routes: Routes = [
  { path: 'dropdown', component: DropdownDemoComponent },
  { path: 'navbar', component: NavDemoComponent },
  { path: 'card', component: DemoCardComponent },
  { path: '', redirectTo: 'dropdown', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
