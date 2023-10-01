// dynamic.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  template: `
    <div>
      <p>{{ data }}</p>
      <button (click)="triggerEvent()">Trigger Event</button>
    </div>
  `,
})
export class AppDynamicComponent {
  @Input() data!: string;
  @Output() someEvent = new EventEmitter<string>();

  triggerEvent() {
    this.someEvent.emit('Event emitted from dynamic component');
  }
}
