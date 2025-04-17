import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './core/layout/header.component';
import { MainComponent } from './core/layout/main.component';
import { FooterComponent } from './core/layout/footer.component';

@Component({
  imports: [RouterModule, HeaderComponent, MainComponent, FooterComponent],
  selector: 'app-root',
  template: ` <app-header />
    <app-main>
      <router-outlet></router-outlet>
    </app-main>
    <app-footer />`,
})
export class AppComponent {}
