import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-main',
  template: ` <ng-content />`,
})
export class MainComponent {}
