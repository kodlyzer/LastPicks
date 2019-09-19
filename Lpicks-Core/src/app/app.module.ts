import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './core/dropdown/dropdown.component';
import { ListGroupModule } from './core/listgroup/listgroup.module';
import { TreeModule } from './core/tree/tree.module';
import { DemoModule } from './demo/demo.module';
import { ListgroupDemoComponent } from './demo/listgroup-demo/listgroup-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    ListgroupDemoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListGroupModule,
    DemoModule,
    TreeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DropdownComponent]
})
export class AppModule { }
