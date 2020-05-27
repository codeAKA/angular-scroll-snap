import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style=":host{margin:0; padding:0;} text-align:center margin:0; padding:0;" class="content">
      <app-app-container></app-app-container>
    </div>    
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-scroll-snap';
}
