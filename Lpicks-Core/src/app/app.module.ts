import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './core/tabs/tabs.component';
import { TabsDemoComponent } from './component/tabs-demo/tabs-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabsDemoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
