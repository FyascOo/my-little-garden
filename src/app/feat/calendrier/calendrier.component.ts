import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getDaysInMonth } from 'date-fns';
import { DatePipe } from '@angular/common';

@Component({
  imports: [RouterModule, DatePipe],
  selector: 'app-calendrier',
  template: `
    <div class="bg-white md:py-8 px-4 lg:max-w-7xl lg:mx-auto lg:px-8 rounded-xl">
      <div class="flex gap-2 w-full justify-center">
        <button class="btn btn-circle" (click)="previousMonth()">
          <span class="material-icons">chevron_left</span>
        </button>
        <p class="text-4xl font-bold text-gray-800 mb-8">{{ date() | date : 'MMMM yyyy' }}</p>
        <button class="btn btn-circle" (click)="nextMonth()"><span class="material-icons">chevron_right</span></button>
      </div>
      <div class="flex flex-wrap">
        @for (day of days(); track day) {
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
  monthIndex = signal(2);
  date = computed(() => new Date(2025, this.monthIndex()));
  daysinMonth = computed(() => getDaysInMonth(this.date()));
  days = computed(() => Array.from({ length: this.daysinMonth() }).map((_, i) => i + 1));

  previousMonth() {
    this.monthIndex.update(monthIndex => monthIndex - 1);
  }

  nextMonth() {
    this.monthIndex.update(monthIndex => monthIndex + 1);
  }
}
