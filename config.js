const fs = require('fs');

//===========================//

const {
  smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction');

//===========================//

global.d = new Date();
global.calender = d.toLocaleDateString('id');

//===========================//

// General Settings 
global.apikey = 'ptla_6pKq2Q5hGxajeMBrRdazQLkG1NSpXwIIi1FYZNmkUkQ'; // Replace with your panel API key
global.capikey = 'ptlc_USy1wdkOexq5IIfootLXskwsgoZvDu1oQvgybJ0qlWC'; // Replace with your Capikey panel
global.domain = 'https://zetsubo-stardust.zxvision.biz.id';
global.eggsnya = '15'; // Replace with your Eggs panel
global.location = '1'; // Replace with your location panel

//===========================//

global.prefa = ['', '!', '.', ',', '⚡','🗿'];
global.owner = ['2349164661375'];
global.ownMain = '2349164661375';
global.NamaOwner = '𝑴𝑨𝑿𝑾𝑬𝑳𝑳-𝑴𝑫'; // Do not change 
global.sessionName = 'session';
global.connect = true; // Set to false if using QR Code
global.namabot = '𝑴𝑨𝑿𝑾𝑬𝑳𝑳-𝑴𝑫'; // Do not change
global.author = '𝑴𝑨𝑿𝑾𝑬𝑳𝑳-𝑴𝑫'; // Do not change
global.packname = '𝑴𝑨𝑿𝑾𝑬𝑳𝑳⚡'; // Change if needed
global.url = 'https://whatsapp.com/channel/0029VajCZpsBvvsfeR9Vtj3d'; // Do not change

//===========================//

global.listr = ` │⬡ 1GB Cpu: 50% - 3.000/bln
 │⬡ 2GB Cpu: 70% - 5.000/bln
 │⬡ 3GB Cpu: 90% - 7.000/bln
 │⬡ 4GB Cpu: 110% - 9.000/bln
 │⬡ 5GB Cpu: 130% - 11.000/bln
 │⬡ 6GB Cpu: 150% - 13.000/bln
 │⬡ 7GB Cpu: 170% - 15.000/bln
 │⬡ 8GB Cpu: 200% - 17.000/bln`;

//===========================//

global.country = '234';
global.system = {
  gmail: 'winneraileme6@gmail.com',
};

//===========================//

global.decor = {
  menut: '❏═┅═━–〈',
  menub: '┊•',
  menub2: '┊',
  menuf: '┗––––––––––✦',
  hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',
  menut: '––––––『',
  menuh: '』––––––',
  menub: '┊☃︎ ',
  menuf: '┗━═┅═━––––––๑\n',
  menua: '',
  menus: '☃︎',
  htki: '––––––『',
  htka: '』––––––',
  haki: '┅━━━═┅═❏',
  haka: '❏═┅═━━━┅',
  lopr: 'Ⓟ',
  lolm: 'Ⓛ',
  htjava: '❃'
};

//===========================//

// Response
global.mess = {
  ingroup: 'This feature can only be used in groups.',
  admin: 'This feature is specifically for group admins🖕.',
  owner: 'You are not the owner🫵😒😒.',
  premium: 'You are not a premium user.',
  seller: 'This feature can only be used by resellers and the owner.',
  usingsetpp: 'Setpp can only be used by the owner, do you think I\'m like your dad? 😒🫵',
  wait: '*processing♻️ Calm....♻️*',
  success: '*𝙀𝙑𝙄𝙇 𝙍𝙀𝘾𝙀𝙄𝙑𝙀𝘿 * 😈👺.....',
  bugrespon: '👺👺 *TARGET SENT TO HELL.....* 🦠🕷️👾'
};

//===========================//

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p';
let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file);
  console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
  delete require.cache[file];
  require(file);
});
