import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListgroupComponent } from './core/listgroup/listgroup.component';
import { ListgroupDemoComponent } from './demo/listgroup-demo/listgroup-demo.component';
import { ListGroupModule } from './core/listgroup/listgroup.module';

@NgModule({
  declarations: [
    AppComponent,
    ListgroupDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
