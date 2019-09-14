import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './core/dropdown/dropdown.component';
import { NavModule } from './core/nav/nav.module';
import { DemoModule } from './demo/demo.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoModule,
    NavModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DropdownComponent]
})
export class AppModule { }
