import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getDaysInMonth } from 'date-fns';

@Component({
  imports: [RouterModule],
  selector: 'app-calendrier',
  template: `
    <div class="bg-white md:py-8 px-4 lg:max-w-7xl lg:mx-auto lg:px-8 rounded-xl">
      <p class="text-4xl font-bold text-gray-800 mb-8">March 2025</p>
      <div class="flex flex-wrap">
        @for (day of days; track day) {
        <div
          class="[&>*:nth-child(7n)]:basis-full flex items-start justify-start w-40 h-full pl-2 pr-32 pt-2.5 pb-24 border border-gray-200">
          <p class="text-sm font-medium text-gray-800">{{ day }}</p>
        </div>
        }
      </div>
    </div>
  `,
})
export class CalendrierComponent {
  avril = getDaysInMonth(new Date(2025, 2));
  days = Array.from({ length: this.avril }).map((_, i) => i + 1);

  constructor() {
    console.log(this.days);
  }
}
