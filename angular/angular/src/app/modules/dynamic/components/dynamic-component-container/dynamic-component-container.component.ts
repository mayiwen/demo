// dynamic-component-container.component.ts
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AppDynamicComponent } from '../dynamic/dynamic.component';
import { AppDostComponent } from '../dost/dost.component';

@Component({
  selector: 'app-dynamic-component-container',
  templateUrl: './dynamic-component-container.component.html',
})
export class DynamicComponentContainerComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  flag: boolean = true
  constructor() {
    console.log('app-dynamic-component-container')
 
  }
  ngAfterViewInit() {
    console.log('这个执行了')
    this.loadDynamicComponent()
  }

  loadDynamicComponent() {
    this.changetest()
  }

  changetest() {
    this.flag = !this.flag
    if (this.flag) {
      this.container.clear()
      console.log('创建一个')
      const componentRef = this.container.createComponent<any>(AppDynamicComponent); 
    } else {
      this.container.clear()
      console.log('创建一个')
      const componentRef = this.container.createComponent<any>(AppDostComponent); 
    }
  }
  ngDestroy() {
    this.container && this.container.clear()
  }
}
