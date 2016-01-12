angular.module('starter.services', [])

.factory('Chats', function() {

  var chats = [{
    id: 0,
    name: 'คอมพิวเตอร์และหุ่นยนต์',
    excerpt: 'การแสดงความสามารถของหุ่นยนต์ และ การเขียนโปรแกรม',
    clublogo:'ion-social-apple',
    coverimg:'img/cover0.png'
  },

  {
    id: 1,
    name: 'เชียร์และแปรอักษร',
    excerpt: 'ของที่ระลึกและกิจกรรมร่วมสนุก',
    clublogo:'ion-ios-body',
    clubid:'ก000',
    coverimg:'img/cover1.png'
  },

  {
    id: 2,
    name: 'ลูกเสือ',
    excerpt: 'ของที่ระลึกจากทีมลูกเสือสวนกุหลาบนนท์',
    clublogo:'ion-ios-flame',
    clubid:'ก000',
    coverimg:'img/cover2.png'
  },

  {
    id: 3,
    name: 'อาร์ตสวนนนท์',
    excerpt: 'วาดภาพเหมือนและลุ้นของรางวัล',
    clublogo:'ion-ios-compose',
    clubid:'ก000',
    coverimg:'img/cover3.png'
  },

   {
    id: 4,
    name: 'สภานักเรียน',
    excerpt: 'กิจกรรมการแข่งขันตอบคำถามเพื่อชิงรางวัล',
    clublogo:'ion-ios-people',
    clubid:'ก000',
    coverimg:'img/cover4.png'
  },

  {
   id: 5,
   name: 'การ์ตูน ทอล์ค',
   excerpt: 'กิจกรรม และเกมส์ต่างๆ',
   clublogo:'ion-ios-chatboxes',
   clubid:'ก000',
   coverimg:'img/cover4.png'
 }

];

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
