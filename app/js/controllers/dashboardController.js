angular.module('app')
    .controller('DashboardController', function($scope, CurrentUser, UserService, RobotFactory) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });

        $scope.robotList = RobotFactory;
        console.log($scope.robotList);
    });
