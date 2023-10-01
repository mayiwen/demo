// dynamic-component-container.component.ts
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AppDynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-dynamic-component-container',
  templateUrl: './dynamic-component-container.component.html',
})
export class DynamicComponentContainerComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadDynamicComponent() {
    // 创建组件工厂
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AppDynamicComponent);

    // 在容器中创建组件
    this.container.clear();
    const componentRef = this.container.createComponent(componentFactory);

    // 可以设置组件的属性和订阅事件
    const dynamicComponentInstance = componentRef.instance as AppDynamicComponent;
    dynamicComponentInstance.data = 'Hello from dynamic component!';
    dynamicComponentInstance.someEvent.subscribe((eventData: any) => {
      console.log('Dynamic component event:', eventData);
    });
  }
}
