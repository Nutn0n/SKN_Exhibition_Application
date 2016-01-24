angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {


  // twitter status update
  $scope.tweet = function(name) {
    window.location="https://twitter.com/intent/tweet?text=ฉันได้เยี่ยมชมชุมนุม "+name+ " ในงานสวนนท์ปริทรรศน์ ปีการศึกษา 2558 โหลด Application เที่ยวชมงานได้ที่ skn.ac.th/exhibition";
  }

  // hide chat
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
