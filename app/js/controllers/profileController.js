angular.module('app')
  .controller('ProfileController', function($scope, CurrentUser, RobotFactory) {
    $scope.user = CurrentUser.user();

    $scope.robotList = RobotFactory;
    console.log($scope.robotList);

    $scope.goChat = function() {
      $('#open-chat').appendTo("body").modal('show');
    };

    $scope.goBuy = function() {
      $('#open-buy').appendTo("body").modal('show');
    };


    // MODAL CHAT
    $scope.chats = [];
    $scope.query = "";

    $scope.addChat = function () {
      var value = $scope.query;
      $scope.chats.push(value);
      $scope.query = '';
    };

    console.log($scope.chats);

  });
