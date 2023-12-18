import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-echarts-example';  
  ngOnInit() {
    let arr = ['11:59:00', '12:00:00', '12:01:00', '12:02:00', '13:28:00', '13:29:00', '13:30:00']
    let startIndex =arr.findIndex(item => item === '12:01:00')
    let endIndex =arr.findIndex(item => item === '13:30:00')
    console.log(startIndex, endIndex)
    
    console.log(arr.splice(startIndex, endIndex - startIndex))
    console.log(arr)
  }
  change() {
    console.log(this.chartOption.series[0].itemStyle.opacity)
    if (this.chartOption.series[0].itemStyle.opacity === 0) {
      this.chartOption.series[0].itemStyle.opacity = 1
    } else
    if (this.chartOption.series[0].itemStyle.opacity === 1) {
      this.chartOption.series[0].itemStyle.opacity = 0

    }
    console.log()
    console.log(this.echartsIntance)
    this.echartsIntance.setOption(this.chartOption);
  }
  echartsIntance: any
  onChartInit(ec: any) {
    this.echartsIntance = ec;
  }
  chartOption: any = {
    
    title: {
      text: 'Stacked Line'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      // boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        // stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        // stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        // stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        // stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        // stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }

}
