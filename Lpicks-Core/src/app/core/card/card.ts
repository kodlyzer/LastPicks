import { Directive, Component } from "@angular/core";

@Component({
  selector: 'kdicard',
  exportAs: "kdi-card",
  templateUrl: './card.component.html',
  styleUrls: ['card.scss'],
  host: {
    'class': 'kdi-card'
  }
})
export class KdiCard {

}

@Directive({
  selector: 'kdi-card-footer'
  // host: {'class': 'kdi-card-footer'}
})
export class KdiCardFooter {

}

@Directive({
  selector: 'kdi-card-content',
  //    host: {'class': 'kdi-card-content'}
})
export class KdiCardContent {

}
  
@Directive({
  selector: 'kdi-card-title'
  // host: {'class': 'kdi-card-title'}
})
export class KdiCardTitle {

}



