import { NgModule } from '@angular/core';
import { KdiCard, KdiCardFooter, KdiCardContent, KdiCardTitle } from './card';
const MODULE=[ KdiCard,KdiCardFooter, KdiCardContent,  KdiCardTitle];
@NgModule({
    declarations: [
        ...MODULE
    ],
    exports: [
        ...MODULE
    ],
    imports: []
})
export class CardModule {
}