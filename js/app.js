var app = angular.module('app', []);
app.controller('MainCtrl', function ($scope, $element, $http) {


    


});


$(function () {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'مقایسه خوردن میوه'
        },
        xAxis: {
            categories: ['Annanas', 'Graip Fruit', 'Rosebarry']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Soheil',
            data: [1, 80, 4]
        }, {
            name: 'Soroush',
            data: [5, 7, 300]
        }]
    });

    $('#container-fluid').highcharts({

        chart:{
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title:{
            text:'Pie Chart Testing'
        },
        tooltip:{
          pointFormat:'{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'navy'
                    }
                }
            }
        },
        xAxis:{
            //title:{
            //    text:'Testing xAxis title'
            //},
            categories:['Drupal','Angular','Bootstrap']
        },
        yAxis:{
            text:'I do"nt know what to say'
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: 56.33
            }, {
                name: 'Chrome',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Firefox',
                y: 10.38
            }, {
                name: 'Safari',
                y: 4.77
            }, {
                name: 'Opera',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]



    });

});