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
    this.chartOption.series[0].itemStyle.opacity = 0
    console.log()
    console.log(this.echartsIntance)
    this.echartsIntance.setOption(this.chartOption);
  }
  echartsIntance: any
  onChartInit(ec: any) {
    this.echartsIntance = ec;
  }
  chartOption: any = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          crossStyle: {
              color: '#999'
          }
      }
    },
    toolbox: {
    },
    legend: {
        data: ['蒸发量', '降水量', '平均温度', '222']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            }
        },
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            },
            gridIndex:1

        }
    ],
    grid:[
      {
        left: '10%',
        right: '8%',
        height: '50%'
      },
      {
        left: '10%',
        right: '8%',
        top: '63%',
        height: '30%'
      }

    ],
    // {
    //   left: '10%',
    //   right: '8%',
    //   height: '50%'
    // },
    // {
    //   left: '10%',
    //   right: '8%',
    //   top: '63%',
    //   height: '16%'
    // }
    yAxis: [
        {
            type: 'value',
            name: '水量',
            axisLabel: {
                formatter: '{value} ml'
            },
            scale: true
        },
        {
        
            type: 'value',
            name: '温度',
            axisLabel: {
                formatter: '{value} °Css'
            }
        },
        {
          gridIndex: 1,
            type: 'value',
            name: '222',
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        // {
        //     name: '蒸发量',
        //     type: 'bar',
        //     data: [50, 61, 58, 58, 58, 58.7, 58.6, 58.2, 58.6, 58.0, 58.4, 58.3],
        // },
        {
            name: '降水量',
            type: 'bar',
            data: [28.6, 28.9, 28.0, 28.4, 28.7, 28.7, 28.6, 28.2, 28.7, 28.8, 28.0, 28.3],
            scale: true,
            labelLine: {
              show: false
            },
            itemStyle: {
              opacity: 1
            }
        },
        {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
            symbol: function (value: any, params: any) {
              // console.log('这是value')
              // console.log(value)
              // console.log(params);
              if (value == 2 || value == 6.2) {
                  return 'circle'; //拐点类型
              } else {
                  return 'none'; //拐点不显示
              }
            }

        },
        // {
        //     name: '222',
        //     type: 'line',
        //     yAxisIndex: 1,
        //     data: [20, 22, 33, 45, 63, 102, 203, 234, 100, 165, 120, 62],
        //     symbol: function (value: any, params: any) {
        //       console.log('这是value')
        //       console.log(value)
        //       console.log(params);
        //       if (value == 2 || value == 6.2) {
        //           return 'circle'; //拐点类型
        //       } else {
        //           return 'none'; //拐点不显示
        //       }
        //     }

        // }
    ]
  }

}
