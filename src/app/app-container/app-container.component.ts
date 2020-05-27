import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../app-services/scroll.service';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {

  private sections;
  private sectionIndex = 0;
  private speed = 15;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.sections = this.scrollService.getSectionsFromDOM('.section');

    this.scrollService.wheel$.subscribe(
      (ev: WheelEvent) => {
        if (ev.deltaY > 0 && this.sectionIndex < this.sections.length) {
          this.sectionIndex++;
        }
        if (ev.deltaY < 0 && this.sectionIndex > 0) {
          this.sectionIndex--;
        }
        this.scrollService.scrollToSection(this.sections[this.sectionIndex], this.speed);
      }
    )
  }

}
