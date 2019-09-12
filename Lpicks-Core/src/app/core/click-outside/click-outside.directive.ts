import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[kdiClickOutside]'
})
export class ClickOutsideDirective {
  constructor(private elementRef: ElementRef) {
  }

  @Output() kdiClickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.kdiClickOutside.emit();
    }
  }
}
