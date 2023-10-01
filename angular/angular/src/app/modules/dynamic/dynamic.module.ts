import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicComponent } from './dynamic.component';
import { CommonModule } from '@angular/common';
import { AppDynamicComponent } from './components/dynamic/dynamic.component';
import { DynamicComponentContainerComponent } from './components/dynamic-component-container/dynamic-component-container.component';
import { AppDostComponent } from './components/dost/dost.component';

const common = [DynamicComponent, AppDynamicComponent, DynamicComponentContainerComponent, AppDostComponent]
@NgModule({
  declarations: [...common
  ],
  exports: [...common],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [DynamicComponent]
})
export class DynamicModule { }
