import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicComponent } from './dynamic.component';
import { CommonModule } from '@angular/common';

const common = [DynamicComponent]
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
