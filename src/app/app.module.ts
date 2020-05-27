import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppContainerModule } from './app-container/app-container.module';
import { AppContainerComponent } from './app-container/app-container.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
