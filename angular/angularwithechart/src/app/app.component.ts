import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-echarts-example';

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
        feature: {
            dataView: {
              show: false,
              readOnly: false,
              title: 'Datensicht'
            },
            magicType: {
              show: false,
              type: ['line', 'bar'],
              title: 'migic type'
            },
            restore: {
              show: false,
              title: 'Zurücksetzen'
            },
            saveAsImage: {
              show: false,
              title: 'Speichern'
            }
        }
    },
    legend: {
        data: ['蒸发量', '降水量', '平均温度']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            // min: 0,
            // max: 250,
            // interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            },
            scale: true
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
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
            scale: true
        },
        {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
            symbol: function (value: any, params: any) {
              console.log('这是value')
              console.log(value)
              console.log(params);
              if (value == 2 || value == 6.2) {
                  return 'circle'; //拐点类型
              } else {
                  return 'none'; //拐点不显示
              }
            }

        }
    ]
  }

}
