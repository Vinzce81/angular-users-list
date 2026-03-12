import {Directive, ElementRef, HostListener, inject} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighLightDirective {
  private elementRef = inject(ElementRef<HTMLElement>);

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }
}
