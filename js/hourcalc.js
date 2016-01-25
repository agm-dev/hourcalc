var app = angular.module("hourcalc", []);

app.controller("calculate_hours", function($scope){
        $scope.total_hours = function(){
                var ci_hour = parseFloat($scope.data.selected_check_in_hours.value);
                var ci_minute = parseFloat($scope.data.selected_check_in_minutes.value / 60);
                var ci = parseFloat(ci_hour + ci_minute);
                var co_hour = parseFloat($scope.data.selected_check_out_hours.value);
                var co_minute = parseFloat($scope.data.selected_check_out_minutes.value / 60);
                var co = parseFloat(co_hour + co_minute);
                var rest_hour = parseFloat($scope.data.selected_rest_hours.value);
                var rest_minute = parseFloat($scope.data.selected_rest_minutes.value / 60);
                var rt = parseFloat(rest_hour + rest_minute);
                var result;
                if (ci > co) {
                        result = parseFloat(co + 24 - ci);
                } else {
                        result = parseFloat(co - ci);
                }
                result = result - rt;
                if (result < 0){
                        result = parseFloat(0);
                }
                $scope.data.total_hours = Math.floor(result);
                $scope.data.total_minutes = Math.round((result - $scope.data.total_hours) * 60);
        };
        $scope.data = {
                hours: [],
                minutes: [],
                selected_check_in_hours: {value: 0, text: "00"},
                selected_check_in_minutes: {value: 0, text: "00"},
                selected_check_out_hours: {value: 0, text: "0"},
                selected_check_out_minutes: {value: 0, text: "0"},
                selected_rest_hours: {value: 0, text: "00"},
                selected_rest_minutes: {value: 0, text: "00"},
                total_hours: 0,
                total_minutes: 0
        };

        // To fill the hours and minutes arrays.
        for (var i = 0; i < 60; i++) {
                if (i < 24) {
                        if (i < 10) {
                                $scope.data.hours.push({value: i, text: "0"+i});
                        } else {
                                $scope.data.hours.push({value: i, text: i.toString()});
                        }
                }
                if (i < 10) {
                        $scope.data.minutes.push({value: i, text: "0"+i});
                } else {
                        $scope.data.minutes.push({value: i, text: i.toString()});
                }
        }
});
