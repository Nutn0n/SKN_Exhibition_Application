angular.module('starter.services', [])

.factory('Chats', function() {

  var chats = [{
    id: 0,
    name: 'คอมพิวเตอร์และหุ่นยนต์',
    excerpt: 'การแสดงความสามารถของหุ่นยนต์ และ การเขียนโปรแกรม',
    clublogo:'ion-social-apple',
    coverimg:'img/cover0.png',
    promo:'computer'
  },

  {
    id: 1,
    name: 'เชียร์และแปรอักษร',
    excerpt: 'ของที่ระลึกและกิจกรรมร่วมสนุก',
    clublogo:'ion-ios-body',
    clubid:'ก000',
    coverimg:'img/cover1.png',
    promo:'cheer'
  },

  {
    id: 2,
    name: 'ลูกเสือ',
    excerpt: 'ลูกเสือ? หลายๆคนอาจจะคิดถึงการแต่งเครื่องแบบร้อนๆ ระเบียบแถวกลางแดด ผูกเงื่อน... ลูกเสือมีอะไรมากกว่าที่คุณคิด! มาหาคำตอบด้วยกันสิฮะ',
    story:'JAMBOREE จริงๆแล้วแปลเป็นภาษาไทยคือ งานชุมนุมลูกเสือ พูดง่ายๆคือการที่ลูกเสือจำนวนมากมาอยู่ร่วมกันและทำกิจกรรมต่าๆร่วมกัน มันสนุกมากๆเลยล่ะ! ในปีที่ผ่านๆมานี้ ชุมนุมลูกเสือได้ส่งสมาชิกไปเป็นผู้แทนคณะลูกเสือไทย ไปร่วมงานชุมนุมลูกเสือยังต่างประเทศมากมายหลายครั้ง ตัวอย่างเช่น ญี่ปุ่น เกาหลี สหรัฐอเมริกา สวีเดนฟิลิปปินส์ เบลเยี่ยม และแน่นอน งานชุมนุมลูกเสือโลก ครั้งที่ 23 ณ ประเทศญี่ปุ่น  ในงานสวนนนท์ปริทรรศน์ปีนี้ เราได้จัดทำนิทรรศการเพื่อบอกเล่าเรื่องราวในสิ่งที่คุณอาจจะยังไม่รุ้เกี่ยวกับลูกเสือ ถึงความสนุกที่เราอยากชวนให้คุณลองมาสัมผัส พบกันได้ที่ลานอเนกประสงค์นะฮะ และแน่นอน เราก็ยังมีการจำลองค่ายงานชุมนุมลูกเสือโลกครั้งที่ 23 ณ ประเทศญี่ปุ่นใน theme Kitty Scout ที่บริเวณสนามฟุตบอลอีกด้วยนะ  อย่าลืมมาชมกันล่ะ ',
    activity:'กิจกรรม Rally ชิงรางวัล เริ่มต้นที่นิทรรศการของเราบริเวณลานอเนกประสงค์ ต่อด้วยค่ายจำลองที่สนามฟุตบอล...กินหมูปิ้งฟรีด้วยนะ มาเสื้อลายสวยๆมาจำหน่ายด้วย',
    clublogo:'ion-ios-flame',
    clubid:'ก075',
    coverimg:'img/cover2.png',
    promo:'kittyscout'
  },

  {
    id: 3,
    name: 'อาร์ตสวนนนท์',
    excerpt: 'วาดภาพเหมือนและลุ้นของรางวัล',
    clublogo:'ion-ios-compose',
    clubid:'ก000',
    coverimg:'img/cover3.png',
    promo:'art'
  },

   {
    id: 4,
    name: 'สภานักเรียน',
    excerpt: 'กิจกรรมการแข่งขันตอบคำถามเพื่อชิงรางวัล',
    clublogo:'ion-ios-people',
    clubid:'ก000',
    coverimg:'img/cover4.png',
    promo:'cousil'
  },

  {
   id: 5,
   name: 'การ์ตูน ทอล์ค',
   excerpt: 'กิจกรรม และเกมส์ต่างๆ',
   clublogo:'ion-ios-chatboxes',
   clubid:'ก000',
   coverimg:'img/cover4.png',
  promo:'cartoon'
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
