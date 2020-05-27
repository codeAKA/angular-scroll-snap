import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  public sections;
  public bodyHeight;
  public wheel$: Observable<Event>;
  public marginY;
  testNr = 0;

  constructor(
    @Inject(DOCUMENT) private document: any
  ) {
    this.wheel$ = fromEvent(window, 'wheel');
    this.marginY = window.pageYOffset;
   }

  getSectionsFromDOM(sectionsName) {
    this.sections = this.document.querySelectorAll(sectionsName);
    this.bodyHeight = this.document.body.scrollTop;
    return this.sections;
  }

  scrollToSection(selectedSectionIndex, scrollSpeed) {

    console.log(this.testNr + 1);
    console.log(selectedSectionIndex.offsetHeight);

    let scroller = setTimeout(() => {
      this.scrollToSection(selectedSectionIndex, scrollSpeed);
    }, 1)

    if (selectedSectionIndex.offsetHeight > window.pageYOffset - scrollSpeed) {
      this.marginY = this.marginY + scrollSpeed;
      if (selectedSectionIndex.offsetHeight <= window.pageYOffset) {
        clearTimeout(scroller);
      }
    } else if (selectedSectionIndex.offsetHeight < window.pageYOffset + scrollSpeed) {
      this.marginY = this.marginY - scrollSpeed;
      if (selectedSectionIndex.offsetHeight >= window.pageYOffset) {
        clearTimeout(scroller);
      }
    } 
    window.scrollTo(0, this.marginY);
  }

}
