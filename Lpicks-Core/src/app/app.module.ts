import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './core/dropdown/dropdown.component';
import { TreeModule } from './core/tree/tree.module';
import { DemoModule } from './demo/demo.module';
import { HeaderModule } from './core/header/header.module';
import { BadgeModule } from './core/badge/badge.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoModule,
    TreeModule,
    FormsModule,
    HeaderModule,
    BadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DropdownComponent]
})
export class AppModule { }
