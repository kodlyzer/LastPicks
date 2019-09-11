import { NgModule } from '@angular/core';
import { KdiCard, KdiCardFooter } from '../core/card/card';
import { DemoCardComponent } from './demo-card.component';
import { KdiCardContent, KdiCardTitle } from '../core/card/card';
const MODULE=[ DemoCardComponent, KdiCard,KdiCardFooter, KdiCardContent,  KdiCardTitle]
@NgModule({
    declarations: [
        ...MODULE
    ],
    exports: [
        ...MODULE
    ],
    imports: []
})
export class DemoCardModule {
}
