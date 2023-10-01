// dynamic.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dost-component',
  template: `
    这是app-dost-component组件
  `,
})
export class AppDostComponent {
  @Input() data!: string;
  @Output() someEvent = new EventEmitter<string>();

  triggerEvent() {
    this.someEvent.emit('Event emitted from dynamic component');
  }
}
