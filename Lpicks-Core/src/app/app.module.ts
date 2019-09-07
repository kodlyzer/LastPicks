import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownModule } from './core/dropdown/dropdown.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DropdownDemoComponent } from './demo/dropdown-demo/dropdown-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    DropdownDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
