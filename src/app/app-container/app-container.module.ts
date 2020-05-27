import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppContainerComponent } from './app-container.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { SectionFourComponent } from './section-four/section-four.component';
import { WheelDirective } from '../app-services/wheel.directive';
import { WheelScrollDirective } from '../app-services/whell-scroll.directive';

@NgModule({
    declarations: [
        AppContainerComponent,
        SectionOneComponent,
        SectionTwoComponent,
        SectionThreeComponent,
        SectionFourComponent,
        WheelDirective,
        WheelScrollDirective,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [],
    exports: [
        AppContainerComponent,
        SectionOneComponent,
        SectionTwoComponent,
        SectionThreeComponent,
        SectionFourComponent
    ]
})
export class AppContainerModule { }
