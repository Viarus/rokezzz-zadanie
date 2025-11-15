import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

export type AnimationTypes = 'left-right' | 'right-left';

@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScroll implements AfterViewInit, OnDestroy, OnInit {
  private observer?: IntersectionObserver;
  @Input({ required: true }) appRevealOnScroll!: AnimationTypes;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, this.appRevealOnScroll);
  }

  ngAfterViewInit() {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, `${this.appRevealOnScroll}--visible`);
            if (this.observer) {
              this.observer.unobserve(this.el.nativeElement);
            }
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
