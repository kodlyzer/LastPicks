import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { DropdownModule } from '../dropdown/dropdown.module';
import { DropdownComponent } from '../dropdown/dropdown.component';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        DropdownModule
    ],
    exports: [
        HeaderComponent
    ]

})
export class HeaderModule { }
