import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  htmlElementRef: HTMLElement | undefined;

  @Input() color: string = "blue";

  @HostListener("mouseover", ['$event'])
  onMouseIn(event: any) {
    this.setStyle("backgroundColor", this.color);
  }

  @HostListener("mouseout", ['$event'])
  onMouseOut(event: any) {
    this.setStyle("backgroundColor", "transparent");
  }

  ngOnInit(): void {
    this.htmlElementRef = this.elementRef.nativeElement;
  }

  setStyle(style: string, value: string) {
    this.renderer.setStyle(this.htmlElementRef, style, value);
  }

}
