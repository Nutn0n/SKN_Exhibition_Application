angular.module('starter.services', [])

.factory('clubs', function() {

  var clubs = [
    {
    id: 1,

    // contact May Wisut - 0845540926
    name: 'SKN Wave',
    excerpt: 'connect speed broadcast',
    story:'ประกาศข่าวสารต่างๆจากคุณครูและนักเรียน ทำสูจิบัตรวันงานกิจกรรมต่างๆประกาศเสียงตามสายจดหมายข่าววารสารเผยแพร่ข่าวสารให้แกคนในโรงเรียน ',
    activity:' ร่วมสนุกกับบอร์ด "สิ่งที่อยากบอกกับโรงเรียน" ให้มาถ่ายรูป  แนะนำโรงเรียนกับกับบุคลภายนอก เมื่อร่วมกิจกรรมได้รับฟรี! ที่คั่นหนังสือที่ระลึกจากชุมนุมของเรา  นอกจากนี้เรายังมีซุ้มขาย อิตาเลี่ยนโซดา สีพาสเทลมากมาย ',
    clublogo:'ion-android-wifi',
    clubid:'-',
    coverimg:'img/wave.png',
    promo:'PRSKNE'
  },

  {
    id: 2,

    // contact Patis Jantron - 0820891714
    name: 'ลูกเสือ',
    excerpt: 'ลูกเสือ? หลายๆคนอาจจะคิดถึงการแต่งเครื่องแบบร้อนๆ ระเบียบแถวกลางแดด ผูกเงื่อน... ลูกเสือมีอะไรมากกว่าที่คุณคิด! มาหาคำตอบด้วยกันสิฮะ',
    story:'JAMBOREE จริงๆแล้วแปลเป็นภาษาไทยคือ งานชุมนุมลูกเสือ พูดง่ายๆคือการที่ลูกเสือจำนวนมากมาอยู่ร่วมกันและทำกิจกรรมต่าๆร่วมกัน มันสนุกมากๆเลยล่ะ! ในปีที่ผ่านๆมานี้ ชุมนุมลูกเสือได้ส่งสมาชิกไปเป็นผู้แทนคณะลูกเสือไทย ไปร่วมงานชุมนุมลูกเสือยังต่างประเทศมากมายหลายครั้ง ตัวอย่างเช่น ญี่ปุ่น เกาหลี สหรัฐอเมริกา สวีเดนฟิลิปปินส์ เบลเยี่ยม และแน่นอน งานชุมนุมลูกเสือโลก ครั้งที่ 23 ณ ประเทศญี่ปุ่น  ในงานสวนนนท์ปริทรรศน์ปีนี้ เราได้จัดทำนิทรรศการเพื่อบอกเล่าเรื่องราวในสิ่งที่คุณอาจจะยังไม่รุ้เกี่ยวกับลูกเสือ ถึงความสนุกที่เราอยากชวนให้คุณลองมาสัมผัส พบกันได้ที่ลานอเนกประสงค์นะฮะ และแน่นอน เราก็ยังมีการจำลองค่ายงานชุมนุมลูกเสือโลกครั้งที่ 23 ณ ประเทศญี่ปุ่นใน theme Kitty Scout ที่บริเวณสนามฟุตบอลอีกด้วยนะ  อย่าลืมมาชมกันล่ะ ',
    activity:'กิจกรรม Rally ชิงรางวัล เริ่มต้นที่นิทรรศการของเราบริเวณลานอเนกประสงค์ ต่อด้วยค่ายจำลองที่สนามฟุตบอล...กินหมูปิ้งฟรีด้วยนะ มาเสื้อลายสวยๆมาจำหน่ายด้วย',
    clublogo:'ion-ios-flame',
    clubid:'ก075',
    coverimg:'img/scout.png',
    promo:'kittyscout'
  },

  {
    id: 3,

    // contact Ittipond Chaiya - 0085-259-8944
    name: 'Suannon Freedom',
    excerpt: 'ทุกๆเรื่องที่คุณไม่เคยรู้มาก่อนเกี่ยวกับสวนกุหลาบเราได้รวบรวมไว้ที่นี่แล้ว พบกับกิจกรรมมากมายที่คุณต้องไม่พลาด แล้วมาพับกัน Suannon Freedom',
    story:' พวกเราสร้างความรู้ความเข้าใจในความเป็นสวนกุหลาบ - เป็นผู้นำ รักเพื่อน นับถือพี่ เคารพครู กตัญญูพ่อแม่ ดูแลน้อง ',
    activity:'กิจกรรมแลกรับของรางวัลจากเรา เกมส์ล้วงไข่เย็น และ ศึกสวนกุหลาบ',
    clublogo:'ion-ios-infinite',
    clubid:'ก040',
    coverimg:'img/freedom.png',
    promo:'suannonfreedom'
  },

  {
    id: 4,

    //  นภัสสร เผ่าพันธุ์ (พลอย) - 086-784-1836 - fb.me/Ploynapatsorn
    name: 'ภาษาญี่ปุ่น',
    excerpt: 'ก้าวแรกกับการเรียนภาษาญี่ปุ่น ',
    story: 'ชุมนุมภาษาญี่ปุ่นจัดตั้งขึ้น สำหรับคนที่มีความสนใจใน ภาษาและวัฒนธรรมของญี่ปุ่น มีการสอนภาษาญี่ปุ่นเบื้องต้น และเรียนรู้วัฒนธรรมของชาวญี่ปุ่นไปด้วย มีการสอนการทำทาโกะยากิ อาหารขึ้นชื่อของญี่ปุ่น การพับกระดาษโอริงามิ การลองใส่ยูกาตะ โดยมีการเชิญวิทยากรชาวญี่ปุ่นมาสอนด้วย',
    activity:'ปีนี้มาในคอนเซ็ปต์ เรียวคัง โรงแรมสไตล์ญี่ปุ่นดั้งเดิม ที่จะนำเสนอวัฒนธรรมของชาวญี่ปุ่น มีการตอบปัญหาความรู้ทั่วไปประเทศญี่ปุ่น ชิงของรางวัลมากมาย รวมทั้งมีการขายทาโกะยากิ และมีการให้ได้ลองสวมชุดยูกาตะ ซึ่งมีทั้งชุดของผู้หญิงและผู้ชายด้วย',
    clublogo:'ion-ios-flower',
    clubid:'ก072',
    coverimg:'img/japanese.png',
    promo:'esenapa'
  },

  {
    id: 5,

    //  Pamtaem Shawol
    name: 'NextStep',
    excerpt: 'อย่าลืมมาดูพวกเรา Next Step ชุมนุม cover dance ชุมนุมเดียวของโรงเรียน ',
    story: 'พวกเราคือชุมนุมเต้น Cover Dance เพลงของศิลปินเกาหลีชื่อดังหลายวงอย่างที่หลายๆคนรู้จักกันดี',
    activity:'มีการแสดง Talent Show ทั้งหมดถึง 3 ชุดการแสดงบนเวทีหลัก',
    clublogo:'ion-android-walk',
    clubid:'ก028',
    coverimg:'img/nextstep.png',
    promo:'ASIANSTEPNS'
  },

  {
    id: 6,

    //  Chananya Charoenpiam - 095-054-8884
    name: 'English Club',
    excerpt: 'Here is English Airlines Captain. Everything is ready for you -- prizes,  snacks, knowledge and a great great services. Hope to see you there, wont you ?',
    story: 'English Club เราคือชุมนุมที่คาดหวังที่จะสร้างทัศนคติในเชิงบวกรวมถึงความมั่นใจในการติดต่อสื่อสารด้วยภาษาอังกฤษอย่างถูกต้องและเหมาะสม',
    activity:'เกมจับคู่คำศัพท์ โดยกติกาจะให้จำคำศัพท์ทั้งสิ้น 20 คำ ในเวลาที่จำกัด พยายามจับคู่คำศัพท์ให้ถูกต้องมากที่สุด เพื่อหอบและกอบโกยของรางวัลที่ดีที่สุดกลับไป!  ในการเข้าร่วมกิจกรรมผู้โดยสารจะต้องมี "Ticket หรือ ตั๋ว" ซึ่งหาซื้อได้จากพนักงานของเรา หรือมีจำหน่ายที่หน้าบูธกิจกรรม',
    clublogo:'ion-social-angular-outline',
    clubid:'ก015',
    coverimg:'img/english.png',
    promo:'PASSENGERCODE'
  }


];

  return {
    all: function() {
      return clubs;
    },
    remove: function(club) {
      clubs.splice(clubs.indexOf(club), 1);
    },
    get: function(clubId) {
      for (var i = 0; i < clubs.length; i++) {
        if (clubs[i].id === parseInt(clubId)) {
          return clubs[i];
        }
      }
      return null;
    }
  };
});
