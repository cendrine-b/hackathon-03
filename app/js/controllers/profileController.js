angular.module('app')
  .controller('ProfileController', function($scope, $state, CurrentUser, RobotFactory) {
    $scope.user = CurrentUser.user();

    $scope.robotList = RobotFactory;
    console.log($scope.robotList);

    $scope.goChat = function() {
      $('#open-chat').appendTo("body").modal('show');
    };

    $scope.goBuy = function() {
      $('#open-buy').appendTo("body").modal('show');
    };


    // MODAL CHAT //

    // var name = "Lya";
    //
    // $scope.chatting = function () {
    //   var Ryo = 'Ryo'; //a variable that the computer can use as it's name
    //   var chat = document.getElementById('chat').value; // used to get the text of user's input
    //   // var chatuse = chat.toUpperCase(); //helps me easily identify what the user wrote even if they write with in lower or upper case.
    //   $scope.query = '';
    //
    //   //this area will show all the possible responses to questions the user asks
    //   if ($scope.query == 'Bonjour' || $scope.query == 'Salut') {
    //     $scope.query = '';
    //     document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
    //     setTimeout(function() {
    //       document.getElementById('chatarea').innerHTML += '<span class="red">' + Ryo + '</span>: Bonjour' + name + ', Comment vas-tu ? <br />';
    //     }, 2000);
    //   }



      // else if (chatuse.includes('BIEN') || chatuse.includes('BIEN')) {
      //   document.getElementById('chat').value = '';
      //   document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
      //   setTimeout(function() {
      //     document.getElementById('chatarea').innerHTML += '<span class="red">' + Ryo + '</span>: Super ! Et... que souhaites tu ? <br />';
      //   }, 2000);
      // } else if (chatuse.includes('VOIR') || chatuse.includes('RENCONTRER')) {
      //   document.getElementById('chat').value = '';
      //   document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
      //   setTimeout(function() {
      //     document.getElementById('chatarea').innerHTML += '<span class="red">' + Ryo + '</span>: Vraiment, cool...ce serait génial ! <br />';
      //   }, 2000);
      // } else if (chatuse.includes('RECHERCHE') || chatuse.includes('CYBORG')) {
      //   document.getElementById('chat').value = '';
      //   document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
      //   setTimeout(function() {
      //     document.getElementById('chatarea').innerHTML += '<span class="red">' + Ryo + '</span>: Je suis aussi fort que MARTIN ! <br />';
      //   }, 2000);
      // }
    // };


  });
