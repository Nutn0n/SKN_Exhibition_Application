angular.module('starter.services', [])

.factory('clubs', function() {

  var clubs = [
    {
    id: 1,

    location: "",

    // contact May Wisut - 0845540926
    name: 'SKN Wave',
    poster: null,
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

    location: "",

    // contact Patis Jantron - 0820891714
    name: 'ลูกเสือ',
    excerpt: 'ลูกเสือ? หลายๆคนอาจจะคิดถึงการแต่งเครื่องแบบร้อนๆ ระเบียบแถวกลางแดด ผูกเงื่อน... ลูกเสือมีอะไรมากกว่าที่คุณคิด! มาหาคำตอบด้วยกันสิฮะ',
    poster:'img/scout.jpg',
    story:'JAMBOREE จริงๆแล้วแปลเป็นภาษาไทยคือ งานชุมนุมลูกเสือ พูดง่ายๆคือการที่ลูกเสือจำนวนมากมาอยู่ร่วมกันและทำกิจกรรมต่าๆร่วมกัน มันสนุกมากๆเลยล่ะ! ในปีที่ผ่านๆมานี้ ชุมนุมลูกเสือได้ส่งสมาชิกไปเป็นผู้แทนคณะลูกเสือไทย ไปร่วมงานชุมนุมลูกเสือยังต่างประเทศมากมายหลายครั้ง ตัวอย่างเช่น ญี่ปุ่น เกาหลี สหรัฐอเมริกา สวีเดนฟิลิปปินส์ เบลเยี่ยม และแน่นอน งานชุมนุมลูกเสือโลก ครั้งที่ 23 ณ ประเทศญี่ปุ่น  ในงานสวนนนท์ปริทรรศน์ปีนี้ เราได้จัดทำนิทรรศการเพื่อบอกเล่าเรื่องราวในสิ่งที่คุณอาจจะยังไม่รุ้เกี่ยวกับลูกเสือ ถึงความสนุกที่เราอยากชวนให้คุณลองมาสัมผัส พบกันได้ที่ลานอเนกประสงค์นะฮะ และแน่นอน เราก็ยังมีการจำลองค่ายงานชุมนุมลูกเสือโลกครั้งที่ 23 ณ ประเทศญี่ปุ่นใน theme Kitty Scout ที่บริเวณสนามฟุตบอลอีกด้วยนะ  อย่าลืมมาชมกันล่ะ ',
    activity:'กิจกรรม Rally ชิงรางวัล เริ่มต้นที่นิทรรศการของเราบริเวณลานอเนกประสงค์ ต่อด้วยค่ายจำลองที่สนามฟุตบอล...กินหมูปิ้งฟรีด้วยนะ มาเสื้อลายสวยๆมาจำหน่ายด้วย',
    clublogo:'ion-ios-flame',
    clubid:'ก075',
    coverimg:'img/scout.png',
    promo:'KITTYSCOUT'
  },

  {
    id: 3,

    location: "",

    // contact Ittipond Chaiya - 0085-259-8944
    name: 'Suannon Freedom',
    poster: null,
    excerpt: 'ทุกๆเรื่องที่คุณไม่เคยรู้มาก่อนเกี่ยวกับสวนกุหลาบเราได้รวบรวมไว้ที่นี่แล้ว พบกับกิจกรรมมากมายที่คุณต้องไม่พลาด แล้วมาพับกัน Suannon Freedom',
    story:' พวกเราสร้างความรู้ความเข้าใจในความเป็นสวนกุหลาบ - เป็นผู้นำ รักเพื่อน นับถือพี่ เคารพครู กตัญญูพ่อแม่ ดูแลน้อง ',
    activity:'กิจกรรมแลกรับของรางวัลจากเรา เกมส์ล้วงไข่เย็น และ ศึกสวนกุหลาบ',
    clublogo:'ion-ios-infinite',
    clubid:'ก040',
    coverimg:'img/freedom.png',
    promo:'SUANNONFREEDOM'
  },

  {
    id: 4,

    location: "",

    //  นภัสสร เผ่าพันธุ์ (พลอย) - 086-784-1836 - fb.me/Ploynapatsorn
    name: 'ภาษาญี่ปุ่น',
    poster: null,
    excerpt: 'ก้าวแรกกับการเรียนภาษาญี่ปุ่น ',
    story: 'ชุมนุมภาษาญี่ปุ่นจัดตั้งขึ้น สำหรับคนที่มีความสนใจใน ภาษาและวัฒนธรรมของญี่ปุ่น มีการสอนภาษาญี่ปุ่นเบื้องต้น และเรียนรู้วัฒนธรรมของชาวญี่ปุ่นไปด้วย มีการสอนการทำทาโกะยากิ อาหารขึ้นชื่อของญี่ปุ่น การพับกระดาษโอริงามิ การลองใส่ยูกาตะ โดยมีการเชิญวิทยากรชาวญี่ปุ่นมาสอนด้วย',
    activity:'ปีนี้มาในคอนเซ็ปต์ เรียวคัง โรงแรมสไตล์ญี่ปุ่นดั้งเดิม ที่จะนำเสนอวัฒนธรรมของชาวญี่ปุ่น มีการตอบปัญหาความรู้ทั่วไปประเทศญี่ปุ่น ชิงของรางวัลมากมาย รวมทั้งมีการขายทาโกะยากิ และมีการให้ได้ลองสวมชุดยูกาตะ ซึ่งมีทั้งชุดของผู้หญิงและผู้ชายด้วย',
    clublogo:'ion-ios-flower',
    clubid:'ก072',
    coverimg:'img/japanese.png',
    promo:'ESENAPA'
  },

  {
    id: 5,

    location: "",

    //  Pamtaem Shawol
    name: 'NextStep',
    poster: null,
    excerpt: 'อย่าลืมมาดูพวกเรา Next Step ชุมนุม cover dance ชุมนุมเดียวของโรงเรียน ',
    story: 'พวกเราคือชุมนุมเต้น Cover Dance เพลงของศิลปินเกาหลีชื่อดังหลายวงอย่างที่หลายๆคนรู้จักกันดี',
    activity:'มีการแสดง Talent Show ทั้งหมดถึง 3 ชุดการแสดงบนเวทีหลัก',
    clublogo:'ion-android-walk',
    clubid:'ก028',
    coverimg:'img/nextstep.png',
    promo:'ASIANSTEP'
  },

  {
    id: 6,

    location: "",

    //  Chananya Charoenpiam - 095-054-8884
    name: 'English Club',
    poster: null,
    excerpt: 'Here is English Airlines Captain. Everything is ready for you -- prizes,  snacks, knowledge and a great great services. Hope to see you there, wont you ?',
    story: 'English Club เราคือชุมนุมที่คาดหวังที่จะสร้างทัศนคติในเชิงบวกรวมถึงความมั่นใจในการติดต่อสื่อสารด้วยภาษาอังกฤษอย่างถูกต้องและเหมาะสม',
    activity:'เกมจับคู่คำศัพท์ โดยกติกาจะให้จำคำศัพท์ทั้งสิ้น 20 คำ ในเวลาที่จำกัด พยายามจับคู่คำศัพท์ให้ถูกต้องมากที่สุด เพื่อหอบและกอบโกยของรางวัลที่ดีที่สุดกลับไป!  ในการเข้าร่วมกิจกรรมผู้โดยสารจะต้องมี "Ticket หรือ ตั๋ว" ซึ่งหาซื้อได้จากพนักงานของเรา หรือมีจำหน่ายที่หน้าบูธกิจกรรม',
    clublogo:'ion-social-angular-outline',
    clubid:'ก015',
    coverimg:'img/english.png',
    promo:'PASSENGERCODE'
  },

  {
    id: 7,

    location: "",

    //  Apatsara Khamsa-ard
    name: 'Cartoon Talk',
    poster: null,
    excerpt: 'โม้โคตรๆเรื่องการ์ตูน',
    story: 'ชุมนุมของพวกเรา ดูการ์ตูน เล่นเกม อ่านการ์ตูน ฟังเพลง ร้องเพลง',
    activity:'กิจกรรมเกมบิงโก !! ลุ้นรับของรางวัลจากชุมนุม',
    clublogo:'ion-chatbox-working',
    clubid:'ก008',
    coverimg:'img/cartoon.png',
    promo:'CTN555'
  },

  {
    id: 8,

    location: "",

    //  Jirapornchai tanapat - 081-104-3554
    name: 'SKN Golf Club',
    poster: null,
    excerpt: 'ถึงแม้คุณจะไม่เคยเล่นกอล์ฟ แต่ชุมนุมเราสามารถทำให้คุณชอบมันได้ และสามารถดูกีฬาเป็นเพิ่มขึ้นอีก 1 ชนิด',
    story: 'ชุมนุมของพวกเรา สอนให้คนทั่วไปเข้าใจ และสามารถ สนึกไปกับกีฬากอล์ฟได้',
    activity:'ชุมนุมเราของเหลือเยอะครับ อยากแจก!! เพียงคุณลงแค่1 ลูก เรารับประกันว่าจะไม่มีการกลับบ้านมือเปล่าแน่นอน ',
    clublogo:'ion-record',
    clubid:'ก036',
    coverimg:'img/golf.png',
    promo:'SKNGOLFCLUB'
  },

  {
    id: 9,

    location: "",

    //  พณรัฐ ชาทอง - 0918795933
    name: 'รักษ์โรงเรียน',
    poster: null,
    excerpt: 'ดูแลรักษาสิ่งต่างในโรงเรียน',
    story: 'ชุมนุมของพวกเรา ทาสีเส้นจอดรถ ทำกล่องทิ้งถ้าอนามัน ฯลฯ ',
    activity:'ภายในซุ้ม มีการแสดงภาพการทำกิจกรรมของคนในชุมนุม ',
    clublogo:'ion-settings',
    clubid:'ก073',
    coverimg:'img/schoolrp.png',
    promo:'ESKN'


  },

  {
    id: 10,

    location: "",

    //  Prai Pannapat - 0843260185
    name: 'Drawing Freedom',
    poster: null,
    excerpt: 'มาเจอกับพวกเราได้ที่ซุ้มDrawing Freedom งานดีน้ำอร่อยเก๋ไก๋ไม่เหมือนใคร',
    story:'ชุมนุมของเราจะให้สมาชิคในชุมนุมวาดรูปอะไรก็ได้ในกระดาษหนึ่งแผ่นโดยกำหนดหัวข้อให้เล็กแล้วบรรยายออกมาเป็นรูปภาพ',
    activity:'ภายในซุ้มจะมีการจัดโชว์ผลงานที่คนภายในชุมนุมได้ทำ และมีการขายน้ำที่ให้เพื่อนๆที่มาซื้อได้เขียนเเก้วแล้วยังมีบริการส่งให้ผู้อื่นได้อีกด้วย',
    clublogo:'ion-edit',
    clubid:'ก013',
    coverimg:'img/draw.png',
    promo:'DOMFREEINGDRAW'


  },

  {
    id: 11,

    location: "",

    //  ปิยะณัฐ  วงศ์เดชงาม 0873637412
    name: 'FDPHOTO',
    poster: null,
    excerpt: 'Story of Photo',
    story:'แชร์เรื่องราวความสุขในแต่ละมุมมองของคนในชุมนุม ถ่ายทอดออกมาเป็นภาพถ่าย',
    activity:'ขายน้ำหลากสี และ บริการถ่ายภาพโพลาลอยด์',
    clublogo:'ion-ios-camera',
    clubid:'ก019',
    coverimg:'img/fdphoto.png',
    promo:'PIKACHUUU'


  },

  {
    id: 12,

    location: "",

    //  Totsuka Tatara - 0898978429
    name: 'Lunatic_Circle VIII',
    poster: null,
    excerpt: 'คุณกำลังมองหา สินค้าแฮนด์เมดสวยๆใช่หมือไร่? พวกเรามีของที่คุณกำลังตามหาอยู่ มาได้ที่นี่ ที่ Lunatic_Circle VIII',
    story:'ชุมนุม Lunatic_Circle VIII ตั้งขึ้นมาเพื่อจะได้ให้สมาชิกและน้องๆในชุมนุมได้ฝึกฝนพื้นฐานด้านการวาดรูปและแลกเปลี่ยนข้อมูลกับเพื่อนๆภายในชุมนุมเรื่องเดียวกันเพื่อหาเพื่อนที่ชอบเรื่องเดียวกันและได้วาดรูปทำกิจกรรมภายในชุมนุมร่วมกัน',
    activity:'ขายสินค้าแฮนด์เมดเกี่ยวกับการ์ตูนยอดนิยม และขายของที่ระลึกของนักเรียนสวนกุหลาบ ชุมนุม Lunatic_Circle VIII',
    clublogo:'ion-android-hand',
    clubid:'ก026',
    coverimg:'img/lunatic.png',
    promo:'ODOROITAKA?'


  },

  {
    id: 13,

    location: "",

    //   มิ้นท์ ณัฐฐินันท์ - 084-595-7824
    name: 'ศุภนิตย์ MATH',
    poster: null,
    excerpt: 'เพิ่มรอยหยักกับศุภนิตย์ MATH',
    story:'จัดสอน PAT1 และติวการสอบ O-NET ให้นักเรียนได้เตรียมตัวและเข้าใจในเรื่องที่จะใช้สอบมากยิ่งขึ้น',
    activity:'แสดงผลงานด้านคณิตศาตร์ของสมาชิกในชุมนุม',
    clublogo:'ion-android-add',
    clubid:'ก078',
    coverimg:'img/math.png',
    promo:'SPNMATH'


  },

  {
    id: 14,

    location: "",

    //   ณัฐนนท์ ราตรี - 0880159349
    name: 'VFX SKN',
    poster: 'img/vfx_poster.jpg',
    excerpt: 'ภูมิใจเสนอภาพยนต์สั้น 7 วันฉันและเธอ',
    story:'คุณจะทำอย่างไร ถ้าคุณรักใครได้เพียง 7 วัน? ฝ้าย เด็กสาวธรรมดาๆคนหนึ่งที่ชีวิตของเธอกำลังจะไม่เหมือนเดิมอีกต่อไป เมื่อเธอได้ยินคำบอกเล่าจากเพื่อนสนิทเกี่ยวกับ เกมส์ ชายหนุ่มสุดป๊อปที่ใครๆต่างก็อยากเป็นแฟนด้วยทั้งๆที่รู้ว่าเมื่อครบหนึ่งอาทิตย์ก็ต้องเลิกลากันไป แต่แล้วเมื่อได้ยินจากหลายๆคนมาว่าถ้าจะคบกับเขาแล้วจะไม่เสียใจเลย เธอจึงสงสัยและคิดที่จะลองคบกับเขาดูสักครั้ง',
    activity:'ฉายภาพยนตร์สั้น ณ ห้องมัลติมีเดีย ใต้หอประชุมสิรินธราลัย จะมีการเปิดจำหน่ายบัตรชมภาพยนตร์สั้นหน้างาน',
    clublogo:'ion-ios-film',
    clubid:'ก057',
    coverimg:'img/vfx.png',
    promo:'VFXSKN'


  },

  {
    id: 15,

    location: "",

    //   นางสาวปานชนก แก้วจินดา  - 0854856411
    name: 'Choco Novel Publishing',
    excerpt: 'ชุมนุมเล็กๆที่รวมตัวผู้รักการอ่าน เขียน หรือแม้กระทั่งสร้างสรรค์ผลงานในรูปแบบอาร์ดเวิร์ค โดยจะถูกบอกเล่าผ่านตัวอักษรบนหน้ากระดาษ',
    story:'Choco Novel ของเราได้ทำการตีพิมพ์ผลงานเรื่องสั้นจากสมาชิกมาหลายผลงาน รวมทั้งยังมีงานอาร์ตต่างๆที่คอยประกอบเรื่องราวเพื่อเสริมสร้างจินตนาการให้ชัดเจนมากขึ้น นอกจากนี้ยังมีการแนะนำ เสนอแนะ และแลกเปลี่ยนเทคนิคในการเขียนร่วมกันอีกด้วย',
    activity:'ในซุ้มของเรามีการนำเสนอผลงานเรื่องสั้นในหัวข้อ ค่านิยม 12 ประการ จากสมาชิกในชุมนุม รวมไปถึงนำเสนอเทคนิคการแต่งเรื่องสั้นหรือนิยายจากสมาชิกด้วยกันเอง นอกจากนี้ยังมีพวงกุญแจน่ารักที่เป็นผลงานจากฝ่ายอาร์ตในชุมนุม สาวกคอการ์ตูนห้ามพลาดโดยเด็ดขาด!',
    clublogo:'ion-ios-paper',
    clubid:'ก010',
    coverimg:'img/novel.png',
    promo:'MAEWNAMSHOCK'

  },

  {
    id: 16,

    location: "",

    //   Aom Park - 094-431-7449
    name: 'เพชรสังคม',
    excerpt: 'ชมรมอุดมปัญญาอย่าลืมเข้ามาในซุ้มของชุมนุมเรานะคะ รับรองว่าจะได้ทั้งความรู้และความสนุกสนานกลับบ้านไปแน่นอนค่ะ',
    story:'ชุมนุมของเราทำหน้าที่ฝึกอบรมคนในชุมนุมทางด้านต่างๆเพื่อการแข่งขันและการพัฒนาตนเองให้มีความรู้ความสามารถในด้านสังคม พระพุทธศาสนา ประวัติศาสตร์ ต่อไปในอนาคต',
    activity:'ซุ้มตอบคำถามเกี่ยวกับปรัสนีของบุคคลทางประวัติศาสตร์กติกา ตอบคำถามแรกให้ถูกว่าเป็นใคร ถ้าตอบไม่ถูกให้ไปตอบข้อที่ 2 ต่อ ถ้ายังตอบไม่ถูกอีกก็จะต้องไปตอบข้อที่ 3 ต่อ *รางวัลจะลดหลั่นลงไปตามจำนวนข้อ ถ้าตอบข้อแรกถูกจะมีสิทธิ์ลุ้นรางวัลใหญ่ ถ้าตอบไม่ได้เลยจะได้ของรางวัลปลอบใจเล็กๆน้อยๆไปแทน ไม่กลับบ้านมือเปล่าแน่นอนค่ะ จำนวนคูปอง 1000 ใบ ',
    clublogo:'ion-ios-keypad',
    clubid:'ก050',
    coverimg:'img/social.png',
    promo:'DIAMONDSOCITY'

  },

  {
    id: 17,

    location: "",

    //   Chadawit Mai-um - 0982590799
    name: 'Creative Decorate',
    excerpt: 'เป็นชุมนุมที่มีวัตถุประสงค์ให้สมาชิกมีความคิดสร้างสรรค์ รู้จักการใช้เวลาว่างให้เป็นประโยชน์และมีความสุขในการทำกิจกรรมะ',
    story:'ชุมนุมCreative Decorate ให้สมาชิกจัดทำผลงานทำดีให้น้อง โดยการทำนิทานอัดเสียง และให้สมาชิกรู้จักใช้เวลาว่างให้เป็นประโยชน์ เช่น การประดิษฐ์สิ่งของจากวัสดุเหลือใช้',
    activity:'จับฉลากของขวัญ เงื่อนไขดังนี้  จำนวนคูปองที่ใช้ 1คูปอง:1ครั้ง (ราคา10บาท)  โดย มีของรางวัลมากมาย อาทิ เช่น ตุ๊กตา พวงกุญแจ ขนม เป็นต้น ',
    clublogo:'ion-lightbulb',
    clubid:'ก011',
    coverimg:'img/creative.png',
    promo:'SKNCREATIVE2016'

  },

  {
    id: 18,

    location: "",

    //   Bible Thekop -
    name: 'TEDDYBEAR STUDIO',
    excerpt: 'อย่าลืมมากองจำลอง TEDDYBEAR STUDIO  เยอะๆด้วยน้าาาา',
    story:'ชุมนุมเราเป็นชุมนุมที่เกี่ยวกับการถ่ายทำหนังสั้น โดยจะสอนเทคการถ่ายทำภาพยนตร์สั้นให้เพื่อนและน้องๆที่อยู่ในชุมนุม',
    activity:'ซุ้มชุมนุมเรามีการจัดกิจกรรมกองจำลองให้คนที่สนใจด้านการถ่ายทำภาพยนตร์มาลอง ทั้งนี่ยังมีการถ่ายทอดสดภาพรวมของงาน เล่นเกม และขายของกินอีกด้วย',
    clublogo:'ion-android-film',
    clubid:'-',
    coverimg:'img/gropro.png',
    promo:'TEDDYISABEAR'

  },

  {
    id: 19,

    location: "",

    //   Vasu Samran - 0624151953
    name: 'คณะกรรมการสภานักเรียน',
    excerpt: 'ชุมนุมของคณะกรรมารนักเรียนปีการศึกษา2558 รับสมาชิกมาร่วมเรียนรู้การทำงานและ ร่วมอภิปรายแสดงความเห็นในการกิจกรรมต่างๆทั้งในโรงเรียนและนอกโรงเรียน',
    story:'ช่วยเหลือในการจัดกิจกรรมต่างๆในโรงเรียนเสมอมา ทั้งวันครู วันแม่ วันพ่อ ทำบุญ กิจกรรมสำคัญต่างๆในโรงเรียน',
    activity:'ซุ้มกิจกรรมมีจัดนิทรรศการผลงานตลอดหนึ่งปีที่ผ่านมา  ขายเสื้อสวนนนท์ 4 แบบ4 แนว ',
    clublogo:'ion-ios-people',
    clubid:'ก054',
    poster: 'img/shirt.jpg',
    coverimg:'img/school.png',
    promo:'SKNSC34'

  },

  {
    id: 20,

    location: "",

    //  จิรัชญา บัวอุไร (0895352775)  -- ปานรวี เปียร์นนท์ (0905722606)
    name: 'Energy Mind',
    excerpt: 'พลังงานไม่ใช่ของเราคนเดียว ต้นไม้เป็นส่วนหนึ่งของพลังงาน',
    story:'มุ่งศึกษาเรื่องพลังงานทดแทนและการประหยัดพลังงาน รณรงค์ให้คนเราใส่ใจเรื่องเกี่ยวกับพลังงานมากขึ้น',
    activity:'ขายป๊อปคอร์น บอร์ดความรู้ ',
    clublogo:'ion-ios-lightbulb',
    clubid:'ก014',
    coverimg:'img/tree.png',
    promo:'BOTNAYENERGY'

  },

  {
    id: 21,

    location: "",

    //  Deedelion Prangwadee - 083-0096728
    name: 'สวนพฤกษศาสตร์',
    excerpt: 'ต้นไม้ไม่ใช่ของเราคนเดียว พลังงานก็เป็นส่วนหนึ่งของต้นไม้',
    story:'สนับสนุนให้ทุกคนรู้ถึงความสำคัญของต้นไม้ สิ่งมีชีวิตที่ใกล้ตัวเราและให้ประโยชน์กับเรามากทีสุด ',
    activity:'วิธีทำลูกประคบสมุนไพรที่พร้อมจะช่วยให้คุณผ่อนคลาย สบายตัว , ขายต้นไม้ต้นเล็กๆและยังมีข้อน่ารู้ของต้นไม้สำหรับคนน่ารักเช่นคุณอีกด้วย ♥ ',
    clublogo:'ion-ios-rose',
    clubid:'ก081',
    coverimg:'img/gardent.png',
    promo:'SECRETGARDENBOTANY'

  },

  {
    id: 22,

    location: "",
    
    //  meen pinnaree - 085-154-7263
    name: 'K-talk',
    excerpt: 'ชอบเกาหลีใครว่าผิด',
    story:'ทำอาหารเกาหลี อร่อยมากกก😋 ',
    activity:'ตอบปัญหาเกี่ยวกับประเทศเกาหลี ซื้อบัตร ราคา 250 ',
    clublogo:'ion-earth',
    clubid:'ก022',
    coverimg:'img/korea.png',
    promo:'BADBADGIRL'

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
