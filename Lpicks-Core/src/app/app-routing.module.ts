import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoCardComponent } from './demo/demo-card-demo/demo-card.component';
import { PageComponent } from './demo/page/page.component';

const routes: Routes = [
  { path: 'card', component: DemoCardComponent },
  { path: 'page', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
