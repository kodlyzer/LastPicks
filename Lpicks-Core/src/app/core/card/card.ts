import { Directive, Component } from "@angular/core";

@Component({
  selector: 'kdicard',
  exportAs: "kdi-card",
  templateUrl: './card.component.html',
  styleUrls: ['card.scss'],
})
export class KdiCard {
}

@Directive({
  selector: 'kdi-card-footer'
})
export class KdiCardFooter {
}

@Directive({
  selector: 'kdi-card-content'
})
export class KdiCardContent {
}

@Directive({
  selector: 'kdi-card-title'
})
export class KdiCardTitle {
}