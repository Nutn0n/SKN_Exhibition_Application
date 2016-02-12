angular.module('starter.controllers', ['ngStorage'])


.controller('DashCtrl', function($scope) {})

//  ------------------------------------ //



.controller('clubsCtrl', function($scope, clubs) {


  // twitter status update
  $scope.tweet = function(name) {
    window.location.href="https://twitter.com/intent/tweet?text=ฉันได้เยี่ยมชมชุมนุม "+name+ " ในงานสวนนท์ปริทรรศน์ ปีการศึกษา 2558 โหลด Application เที่ยวชมงานได้ที่ skn.ac.th/exhibition";
  }


  // hide club
  $scope.clubs = clubs.all();
  $scope.remove = function(club) {
    clubs.remove(club);
  };

})

//  ------------------------------------ //


.controller('clubDetailCtrl', function($scope, $stateParams, clubs, $localStorage) {

    $scope.club = clubs.get($stateParams.clubId);

    // init club visited inside local storage
    $scope.$storage = $localStorage.$default({
      ClubThatYouHaveVisited: 0
    });



      // check function
      $scope.promocheck = function(codeenter, promo, name){
          if( codeenter.toUpperCase() == promo || codeenter == promo ){
             swal('ยินดีด้วย', 'คุณได้ลงชื่อเข้าชมชุมนุม '+name+' เรียบร้อยแล้ว', 'success');
            return 1;
            console.log('True');
            }
            else{
              sweetAlert("เสียใจด้วย", "คุณกรอกรหัสผิด กรุณาตรวจสอบใหม่อีกครั้ง", "error");
              return 0;
              console.log('False');
            }
      }


})

//  ------------------------------------ //

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

ontroller('IgCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
