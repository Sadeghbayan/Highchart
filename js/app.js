var app = angular.module('app',["highcharts-ng"]);
app.controller('MainCtrl', function ($scope, $element, $http) {





    $http.get("js/data.json").then(function(response){
        $scope.data = response.data.records;
        var name = [];
        for(var i=0; i < $scope.data.length; i++){
            name.push($scope.data[i].Name);
        }

        var value = [];
        for(var i=0; i < $scope.data.length; i++){
            value.push($scope.data[i].Value);
            console.log(value);
        }

        var axisTitle = [];
        for(var i=0; i < $scope.data.length; i++){
            axisTitle.push($scope.data[i].Country);
            console.log(axisTitle);
        }

       

        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'line'
                }
            },
            series: [{
                data: value,
                name:'Temp'
            }],
            xAxis: {
                categories: axisTitle
            },
            yAxis: {
                title:'مقدار'
            },
            title: {
                text: 'Hello'
            },
            loading: false
        }


    });





});
