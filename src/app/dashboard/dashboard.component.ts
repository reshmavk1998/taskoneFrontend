import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  courses = [
    { h1:'Angular',title: 'Learn Angular',image1: 'https://cdn.windowsreport.com/wp-content/uploads/2020/06/angular-logo-2.png' , image: 'https://cyteksite.files.wordpress.com/2017/01/angular-background-fhd.png?w=1024' },
    { h1:'Swift',title: 'Build an IOS Application',image1:'https://cdn.iconscout.com/icon/free/png-512/swift-2038869-1720082.png', image: 'https://appleosophy.com/wp-content/uploads/2019/06/20152F122F032F2a2Fswiftlogohe.d2c70.jpg2F950x534__filters3Aquality289029.jpg' },
    { h1:'WordPress',title: 'Build a WordPress website',image1:'https://mk0wparena2dlb3il88l.kinstacdn.com/wp-content/uploads/2016/08/wordpress-iphone.png', image: 'https://wallpapercave.com/wp/wp6905719.jpg' },
    { h1:'React',title: 'Become a react native',image1:'https://www.computerhope.com/jargon/r/react-native.jpg', image: 'https://wallpapercave.com/wp/wp6953049.jpg' }

  ];

  chart1={}
chartOptions={}
Highcharts= Highcharts
constructor() { }

ngOnInit(): void {
this.chart1={

    title: {
        text: 'Experience IQ'
    },

    xAxis: {
        tickInterval: 1,
        type: 'logarithmic',
        accessibility: {
            rangeDescription: 'Range: 1 to 10'
        },
        
    },

    yAxis: {
        type: 'logarithmic',
        minorTickInterval: 0.1,
        accessibility: {
            rangeDescription: 'Range: 0.1 to 1000'
        }
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: 'x = {point.x}, y = {point.y}'
    },

    series: [{
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
        pointStart: 1
    }]
}
,
this.chartOptions={

  chart: {
      polar: true,
      type: 'line'
  },

  accessibility: {
      description: 'A spiderweb chart compares the allocated budget against actual spending within an organization. The spider chart has six spokes. Each spoke represents one of the 6 departments within the organization: sales, marketing, development, customer support, information technology and administration. The chart is interactive, and each data point is displayed upon hovering. The chart clearly shows that 4 of the 6 departments have overspent their budget with Marketing responsible for the greatest overspend of $20,000. The allocated budget and actual spending data points for each department are as follows: Sales. Budget equals $43,000; spending equals $50,000. Marketing. Budget equals $19,000; spending equals $39,000. Development. Budget equals $60,000; spending equals $42,000. Customer support. Budget equals $35,000; spending equals $31,000. Information technology. Budget equals $17,000; spending equals $26,000. Administration. Budget equals $10,000; spending equals $14,000.'
  },

  title: {
      text: 'Angular',
      x: -80
  },

  pane: {
      size: '80%'
  },

  xAxis: {
      categories: ['Angular', 'Javascript', 'HTML', 'Finto',
          'Vue.js', 'Sketch'],
      tickmarkPlacement: 'on',
      lineWidth: 0
  },

  yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0
  },

  tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
  },

  legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
  },

  series: [{
      name: 'Allocated IQ',
      data: [43000, 19000, 60000, 35000, 17000, 10000],
      pointPlacement: 'on'
  }, {
      name: 'Actual IQ',
      data: [50000, 39000, 42000, 31000, 26000, 14000],
      pointPlacement: 'on'
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
              },
              pane: {
                  size: '80%'
              }
          }
      }]
  }

}
}

}


