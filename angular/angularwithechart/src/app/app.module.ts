import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as echarts from 'echarts'
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({echarts})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
