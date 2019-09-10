import { NgModule } from '@angular/core';
import { KdiCard, KdiCardFooter} from '../core/card/card';

import { DemoCardComponent } from './demo-card.component';
import {  KdiCardContent, KdiCardTitle } from '../core/card/card';
@NgModule({
    declarations: [
        DemoCardComponent,
        KdiCard,
        KdiCardFooter,
    
        KdiCardContent,
        KdiCardTitle
    ],
    exports:[
        DemoCardComponent,
        KdiCard,
        KdiCardFooter,
      
        KdiCardContent,
        KdiCardTitle
    ],
    imports: [],
    providers: [],
    bootstrap: [DemoCardComponent]
})
export class DemoCardModule {
}
