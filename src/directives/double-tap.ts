import {Directive, ElementRef, OnDestroy, OnInit} from "@angular/core";
import {Gesture} from "ionic-angular";
@Directive({
  selector: '[doubleTap]'
})
export class DoubleTapDirective implements OnInit, OnDestroy {
  el: HTMLElement;
  pressGesture: Gesture;
  counter = 0;
  lastTappedTime = 0;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    this.pressGesture = new Gesture(this.el);
    this.pressGesture.listen();
    this.pressGesture.on('tap', () => {
      const now = new Date();
      if ((now.getSeconds() - this.lastTappedTime) < 150) {
        this.counter++;
        this.lastTappedTime = 0
      } else {
        this.counter = 0
      }
      if (this.counter === 2) {
        console.log('double tap')
      }
      this.lastTappedTime = now.getSeconds()
    })
  }

  ngOnDestroy() {
  }
}
