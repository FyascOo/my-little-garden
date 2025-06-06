import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  template: ` <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <span class="material-icons"> menu </span>
      </button>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">MyLittleGarden</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <span class="material-icons"> more_horiz </span>
      </button>
    </div>
  </div>`,
})
export class HeaderComponent {}
