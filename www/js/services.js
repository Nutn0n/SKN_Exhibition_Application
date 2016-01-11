angular.module('starter.services', [])

.factory('Chats', function() {

  var chats = [{
    id: 0,
    name: 'คอมพิวเตอร์และหุ่นยนต์',
    excerpt: 'การแสดงความสามารถของหุ่นยนต์ และ การเขียนโปรแกรม',
    clublogo:'ion-social-apple',
    coverimg:'img/cover0.png'
  }, {
    id: 1,
    name: 'เชียร์และแปรอักษร',
    excerpt: 'ของที่ระลึกและกิจกรรมร่วมสนุก',
    clublogo:'ion-ios-body',
    coverimg:'img/cover1.png'
  }, {
    id: 2,
    name: 'ลูกเสือ',
    excerpt: 'ของที่ระลึกจากทีมลูกเสือสวนกุหลาบนนท์',
    clublogo:'ion-ios-flame',
    coverimg:'img/cover2.png'
  }, {
    id: 3,
    name: 'อาร์ตสวนนนท์',
    excerpt: 'วาดภาพเหมือนและลุ้นของรางวัล',
    clublogo:'ion-ios-compose',
    coverimg:'img/cover3.png'
  }, {
    id: 4,
    name: 'กรรมการนักเรียน',
    excerpt: 'กิจกรรมการแข่งขันตอบคำถามเพื่อชิงรางวัล',
    clublogo:'ion-ios-information',
    coverimg:'img/cover4.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
