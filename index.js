const {
WAConnection: _WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, WA_DEFAULT_EPHEMERAL,WA_MESSAGE_STUB_TYPE, ReconnectMode,ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime,
} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const hx = require('hxz-api')
const googleImage = require('g-i-s')
const googleIt = require('google-it')
const translate = require("@vitalets/google-translate-api");
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const kripton = require('crypto')
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const jimp = require('jimp')
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/myfunctions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
//************************************************************\\  
//SIMPLE
const { help } = require('./commado/help')
const mess = JSON.parse(fs.readFileSync('./commado/mess.json'));
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const { fakeimg, f,fake,x, xteamApi } = setting

//DATABASE
_scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
 const antivo = JSON.parse(fs.readFileSync("./database/antiviewonce.json"));
 const setiker = JSON.parse(fs.readFileSync("./storage/stik.json"));
const videonye = JSON.parse(fs.readFileSync("./storage/video.json"));
const audionye = JSON.parse(fs.readFileSync("./storage/audio.json"));
const imagenye = JSON.parse(fs.readFileSync("./storage/image.json"));
 
 
//************************************************************\\ 
//FUNCTION!
selfnya = true
multi = true
nopref = false
prefa = '-'
bacaanmenu ='©Seazyc' //BUAT FOOTER MENU, GANTI KALO MAU
imgmenu = fs.readFileSync(`./media/fake.jpeg`)
linkmenu = '-'
ownerNumber = ["5216145568333:5216145568333@s.whatsapp.net","0@s.whatsapp.net"]

//************************************************************\\  
// STICKER CMD!
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};
const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};
const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};


module.exports = conn = async (conn,mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.blocked
global.prefix
m = simple.smsg(conn, mek)
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')      
const type = Object.keys(mek.message)[0]        
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
//PREFIX MULTI AND NO PREFIX!
        if (multi){
        var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
        } else {
        if (nopref){
        prefix = ''
        } else {
        prefix = prefa
}}
//KUNCI AE YA:v
const _0x4f5e69=_0x5139;(function(_0x2fd9d8,_0x4a0714){const _0x19e00b=_0x5139,_0x2b57a2=_0x2fd9d8();while(!![]){try{const _0x47b3f8=-parseInt(_0x19e00b(0x177))/0x1*(-parseInt(_0x19e00b(0x17e))/0x2)+parseInt(_0x19e00b(0x186))/0x3+parseInt(_0x19e00b(0x179))/0x4*(parseInt(_0x19e00b(0x187))/0x5)+parseInt(_0x19e00b(0x189))/0x6*(-parseInt(_0x19e00b(0x178))/0x7)+-parseInt(_0x19e00b(0x18a))/0x8+parseInt(_0x19e00b(0x17b))/0x9+parseInt(_0x19e00b(0x181))/0xa*(-parseInt(_0x19e00b(0x172))/0xb);if(_0x47b3f8===_0x4a0714)break;else _0x2b57a2['push'](_0x2b57a2['shift']());}catch(_0x1c51b6){_0x2b57a2['push'](_0x2b57a2['shift']());}}}(_0x434f,0x320b7));const mylistbutton=type=='listResponseMessage'&&mek[_0x4f5e69(0x17d)][_0x4f5e69(0x18c)][_0x4f5e69(0x18b)]!=null?mek[_0x4f5e69(0x17d)]['listResponseMessage'][_0x4f5e69(0x18b)][_0x4f5e69(0x176)]||'':'';btnlist=mylistbutton===(conn[_0x4f5e69(0x188)]&&conn[_0x4f5e69(0x188)][_0x4f5e69(0x17a)]);if(btnlist)var idlistmsg=type===_0x4f5e69(0x18c)?mek[_0x4f5e69(0x17d)]['listResponseMessage'][_0x4f5e69(0x184)]['selectedRowId']:'';const mybtn=type==_0x4f5e69(0x18d)&&mek[_0x4f5e69(0x17d)][_0x4f5e69(0x18d)][_0x4f5e69(0x18b)]!=null?mek['message'][_0x4f5e69(0x18d)][_0x4f5e69(0x18b)][_0x4f5e69(0x176)]||'':'';btnku=mybtn===(conn[_0x4f5e69(0x188)]&&conn['user']['jid']);if(btnku)var btnid=type===_0x4f5e69(0x18d)?mek[_0x4f5e69(0x17d)]['buttonsResponseMessage']['selectedButtonId']:'';const sticreply=type===_0x4f5e69(0x180)?mek[_0x4f5e69(0x17d)][_0x4f5e69(0x180)][_0x4f5e69(0x18b)][_0x4f5e69(0x185)]:'',stcnya2=sticreply?sticreply[_0x4f5e69(0x17c)](_0x4f5e69(0x183)):![],Pngirim2=type==_0x4f5e69(0x180)&&mek[_0x4f5e69(0x17d)][_0x4f5e69(0x180)][_0x4f5e69(0x18b)]!=null?mek[_0x4f5e69(0x17d)][_0x4f5e69(0x180)][_0x4f5e69(0x18b)]['participant']||'':'';function _0x5139(_0x1cd8b7,_0x370775){const _0x434fdf=_0x434f();return _0x5139=function(_0x513967,_0x2f2f3a){_0x513967=_0x513967-0x172;let _0x22f65f=_0x434fdf[_0x513967];return _0x22f65f;},_0x5139(_0x1cd8b7,_0x370775);}fromAeng2=Pngirim2===(conn[_0x4f5e69(0x188)]&&conn['user'][_0x4f5e69(0x17a)]);function _0x434f(){const _0x2dd1dc=['2662dNgqZR','extendedTextMessage','videoMessage','caption','participant','306494JxDzRH','172795exWRYK','1828entaPF','jid','2193120pXcPVl','includes','message','2puqCwZ','conversation','imageMessage','9580UzwvKZ','text','STICKERNYA','singleSelectReply','stanzaId','494124swqCuX','125nCgBPe','user','36CrjUNv','1131024bRVZEW','contextInfo','listResponseMessage','buttonsResponseMessage'];_0x434f=function(){return _0x2dd1dc;};return _0x434f();}const grupreply=type===_0x4f5e69(0x173)?mek[_0x4f5e69(0x17d)][_0x4f5e69(0x173)][_0x4f5e69(0x18b)][_0x4f5e69(0x185)]:'',GRP2=grupreply?grupreply[_0x4f5e69(0x17c)]('GRUP'):![],Pngirim3=type==_0x4f5e69(0x173)&&mek[_0x4f5e69(0x17d)][_0x4f5e69(0x173)][_0x4f5e69(0x18b)]!=null?mek[_0x4f5e69(0x17d)][_0x4f5e69(0x173)][_0x4f5e69(0x18b)][_0x4f5e69(0x176)]||'':'';fromAeng3=Pngirim3===(conn[_0x4f5e69(0x188)]&&conn[_0x4f5e69(0x188)][_0x4f5e69(0x17a)]);if(fromAeng2){if(stcnya2)var hayuslah=sticreply['split'](_0x4f5e69(0x183))[0x0];}if(fromAeng3){if(GRP2)var gruplah=sticreply['split']('GRUP')[0x0];}filternya=type===_0x4f5e69(0x17f)&&mek[_0x4f5e69(0x17d)][_0x4f5e69(0x17f)]?mek[_0x4f5e69(0x17d)][_0x4f5e69(0x17f)]:type==_0x4f5e69(0x180)&&mek['message'][_0x4f5e69(0x180)][_0x4f5e69(0x175)]?mek['message']['imageMessage'][_0x4f5e69(0x175)]:type==_0x4f5e69(0x174)&&mek[_0x4f5e69(0x17d)][_0x4f5e69(0x174)]['caption']?mek[_0x4f5e69(0x17d)][_0x4f5e69(0x174)]['caption']:type=='extendedTextMessage'&&mek[_0x4f5e69(0x17d)][_0x4f5e69(0x173)]['text']?mek['message'][_0x4f5e69(0x173)][_0x4f5e69(0x182)]:'';var replycmd=prefix+gruplah+'\x20'+filternya;replycmd[_0x4f5e69(0x17c)](undefined)&&(replycmd='');

body  = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : "" || idlistmsg || btnid || replycmd
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const commando = body.slice(1).trim().split(/ +/).shift().toLowerCase() || hayuslah
bbc = (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId :""
const co = bbc.toLowerCase()
bodos = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const evalnya = bodos.slice(0).trim().split(/ +/).shift().toLowerCase()
const idbtn = type === "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedDisplayText : ""	
const REPLYbtn = type === "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.contextInfo.stanzaId : ""	
const argz = bodos.trim().split(/ +/).slice(1)
const args = body.trim().split(/ +/).slice(1)
const arg = budy.slice(command.length + 2, budy.length)
const q = args.join(' ')
const isCmd = body.startsWith(prefix)
const botNumber = conn.user.jid
const botNumberss = conn.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
const totalchat = await conn.chats.all()
const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : "";
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const conts = mek.key.fromMe ? conn.user.jid : conn.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? conn.user.name : conts.notify || conts.vname || conts.name || '-'

const isAntiviewonce = isGroup ? antivo.includes(from) : false;

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedPesan = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedMessage = type === 'extendedTextMessage'
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isViewOnce = (type === 'viewOnceMessage')
const ByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.stanzaId || "" : ""
const Pngirim = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
const fromBot = ByReply ? ByReply.startsWith('3EB0') && ByReply.length === 12 : false
const stcnya = ByReply ? ByReply.includes('STICKER') : false

// FUNCTION EVAL 
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
//FUNCTION BATERAI!
conn.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
})
global.prefix
global.batrei = global.batrei ? global.batrei : []
conn.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})     
//ANTI VIEW ONCE MESSAGE!
const _0x189937=_0x4860;(function(_0xaea49,_0x4bad97){const _0x212b8d=_0x4860,_0x1004f0=_0xaea49();while(!![]){try{const _0x247b55=parseInt(_0x212b8d(0x13d))/0x1+-parseInt(_0x212b8d(0x130))/0x2+parseInt(_0x212b8d(0x139))/0x3+parseInt(_0x212b8d(0x13e))/0x4*(parseInt(_0x212b8d(0x12d))/0x5)+-parseInt(_0x212b8d(0x131))/0x6+-parseInt(_0x212b8d(0x134))/0x7+-parseInt(_0x212b8d(0x13f))/0x8*(-parseInt(_0x212b8d(0x135))/0x9);if(_0x247b55===_0x4bad97)break;else _0x1004f0['push'](_0x1004f0['shift']());}catch(_0x3ee6c9){_0x1004f0['push'](_0x1004f0['shift']());}}}(_0x4c32,0x53adc));if(!mek['key'][_0x189937(0x13c)]){if(isGroup&&isViewOnce&&isAntiviewonce){let typenya=mek['message'][_0x189937(0x12f)]['message']['videoMessage']?mek[_0x189937(0x138)][_0x189937(0x12f)]['message'][_0x189937(0x13b)]:mek['message'][_0x189937(0x12f)]['message'][_0x189937(0x137)];typenya[_0x189937(0x141)]=![],typenya[_0x189937(0x136)]=_0x189937(0x133)+sender[_0x189937(0x12e)]('@s.whatsapp.net','')+'\x20\x0a𝑪𝒂𝒑𝒕𝒊𝒐𝒏:\x20\x20'+(typenya[_0x189937(0x136)]===''?_0x189937(0x140):typenya[_0x189937(0x136)]);let peq=mek[_0x189937(0x138)][_0x189937(0x12f)][_0x189937(0x138)]['imageMessage']?{'key':{'fromMe':![],'participant':sender,'id':mek['key']['id']},'message':{'viewOnceMessage':{'message':{'imageMessage':{'viewOnce':!![]}}}}}:{'key':{'fromMe':![],'participant':sender,'id':mek['key']['id']},'message':{'viewOnceMessage':{'message':{'imageMessage':{'viewOnce':!![]}}}}},pe=await conn[_0x189937(0x132)](from,mek[_0x189937(0x138)][_0x189937(0x12f)][_0x189937(0x138)],{'quoted':peq,'contextInfo':{'mentionedJid':[sender]}});await conn[_0x189937(0x13a)](pe);}}function _0x4860(_0x5a5e8e,_0x267a58){const _0x4c3227=_0x4c32();return _0x4860=function(_0x486054,_0x209c01){_0x486054=_0x486054-0x12d;let _0x4e8741=_0x4c3227[_0x486054];return _0x4e8741;},_0x4860(_0x5a5e8e,_0x267a58);}function _0x4c32(){const _0x2b6214=['605309MQKwzJ','12FKcIMc','88EaQWrl','Ga\x20Dikasi\x20Caption','viewOnce','92990eqdLEp','replace','viewOnceMessage','1019072oDWOvT','4039326KJPZyQ','prepareMessageFromContent','𝑨𝒏𝒕𝒊\x20𝒗𝒊𝒆𝒘𝑶𝒏𝒄𝒆\x20𝑴𝒆𝒔𝒔𝒂𝒈𝒆\x0a\x0a𝑷𝒆𝒏𝒈𝒊𝒓𝒊𝒎\x20:\x20@','3380622Cfnxey','961236rBqMiM','caption','imageMessage','message','517512yOjWgt','relayWAMessage','videoMessage','fromMe'];_0x4c32=function(){return _0x2b6214;};return _0x4c32();}
//BUAT WAKTUNYA!
        var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jams = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
               switch(hari) {
                case 0: hari = 'Minggu'; break;
                case 1: hari = 'Senin'; break;
                case 2: hari = 'Selasa'; break;
                case 3: hari = 'Rabu'; break;
                case 4: hari = 'Kamis'; break;
                case 5: hari = 'Jum`at'; break;
                case 6: hari = 'Sabtu'; break;
                }
                switch(bulan1) {
                case 0: bulan1 = 'Januari'; break;
                case 1: bulan1 = 'Februari'; break;
                case 2: bulan1 = 'Maret'; break;
                case 3: bulan1 = 'April'; break; 
                case 4: bulan1 = 'Mei'; break;
                case 5: bulan1 = 'Juni'; break;
                case 6: bulan1 = 'Juli'; break;
                case 7: bulan1 = 'Agustus'; break;
                case 8: bulan1 = 'September'; break;
                case 9: bulan1 = 'Oktober'; break;
                case 10: bulan1 = 'November'; break;
                case 11: bulan1 = 'Desember'; break;
                }
                switch(jams){
                case 0: pada = "Malem"; break;
                case 1: pada = "Malem"; break;
                case 2: pada = "Malem"; break;
                case 3: pada = "Pagi"; break;
                case 4: pada = "Pagi"; break;
                case 5: pada = "Pagi"; break;
                case 6: pada = "Pagi"; break;
                case 7: pada = "Pagi"; break;
                case 8: pada = "Pagi"; break;
                case 9: pada = "Pagi"; break;
                case 10: pada = "Pagi"; break;
                case 11: pada = "Siang"; break;
                case 12: pada = "Siang"; break;
                case 13: pada = "Siang"; break;
                case 14: pada = "Siang"; break;
                case 15: pada = "Sore"; break;
                case 16: pada = "Sore"; break;
                case 17: pada = "Sore"; break;
                case 18: pada = "Malem"; break;
                case 19: pada = "Malem"; break;
                case 20: pada = "Malem"; break;
                case 21: pada = "Malem"; break;
                case 22: pada = "Malem"; break;
                case 23: pada = "Malem"; break;
            }
            var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
            var tampilJam = '' + 'Jams : ' + jams + ':' + menit + ':' + detik + ' Wib';
            tampilTanggal = hari + " "+ tanggal + " " + bulan1 + " " + tahun;
            tampilWaktu =  jams + ":" + menit + ":" + detik;
          
//********************[FUNCTION RUNTIME]********************\\
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

return `[𝗥𝗨𝗡𝗧𝗜𝗠𝗘]\n• ${pad(hours)} Jam \n• ${pad(minutes)} Menit \n• ${pad(seconds)} Detik`
}
//**********************[FUNCTION JAM]**********************\\
    function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
//************************************************************\\  
const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const reply = (teks) => {
        conn.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
        conn.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
        (id == null || id == undefined || id == false) ? conn.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : conn.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}
const randomSZ = () => {
return kripton.randomBytes(4).toString('hex').toUpperCase()
		}
// xx
(function(_0x5117ec,_0x26e519){const _0x42f956=_0x293f,_0x33b3db=_0x5117ec();while(!![]){try{const _0x257020=parseInt(_0x42f956(0x126))/0x1*(parseInt(_0x42f956(0x127))/0x2)+parseInt(_0x42f956(0x129))/0x3+-parseInt(_0x42f956(0x12a))/0x4*(-parseInt(_0x42f956(0x12f))/0x5)+-parseInt(_0x42f956(0x122))/0x6*(-parseInt(_0x42f956(0x12e))/0x7)+parseInt(_0x42f956(0x130))/0x8*(parseInt(_0x42f956(0x124))/0x9)+parseInt(_0x42f956(0x125))/0xa+-parseInt(_0x42f956(0x128))/0xb*(parseInt(_0x42f956(0x123))/0xc);if(_0x257020===_0x26e519)break;else _0x33b3db['push'](_0x33b3db['shift']());}catch(_0x8a5d7a){_0x33b3db['push'](_0x33b3db['shift']());}}}(_0x46b8,0x96c7e));function _0x46b8(){const _0x43407e=['sendMessageFromContent','1238238UYpnZy','972hlAmEb','5369733XKbiyt','586170WSHVdo','538QsGEvX','586bGCjPm','301367FIUpcw','1944963Dvsfym','16820vIbFHW','8181929','./media/fake.jpeg','𝙨𝙚𝙖𝙯𝙮𝙘\x20??𝙚𝙡𝙛','21LLVJlF','190kuVaVh','16GysJWJ'];_0x46b8=function(){return _0x43407e;};return _0x46b8();}function _0x293f(_0x49d31b,_0x3bd9bd){const _0x46b879=_0x46b8();return _0x293f=function(_0x293f58,_0x4f6bf0){_0x293f58=_0x293f58-0x122;let _0x297d7a=_0x46b879[_0x293f58];return _0x297d7a;},_0x293f(_0x49d31b,_0x3bd9bd);}const xx=_0x22606e=>{const _0x4a159c=_0x293f;conn[_0x4a159c(0x131)](from,{'listMessage':{'title':_0x4a159c(0x12d),'description':_0x22606e,'buttonText':''+time,'listType':0x2,'productListInfo':{'businessOwnerJid':'50766866666@s.whatsapp.net','headerImage':{'jpegThumbnail':fs['readFileSync'](_0x4a159c(0x12c))},'productSections':[{'title':'peler','products':[{'productId':'4867928553220540'},{'productId':_0x4a159c(0x12b)}]}]}}});};

const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
conn.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
conn.sendMessage(from, hasil, type, options).catch(e => {
conn.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
conn.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   
conn.sendMessageFromContent = async(jid,message,options) => {
var option = {
contextInfo: {},
...options
}
var prepare = await conn.prepareMessageFromContent(jid,message,option)
await conn.relayWAMessage(prepare)
return prepare
}
const _0x27ad8f=_0x4e80;(function(_0x3f6508,_0x3ee177){const _0x51757f=_0x4e80,_0x205b3b=_0x3f6508();while(!![]){try{const _0x43a49c=-parseInt(_0x51757f(0x139))/0x1*(parseInt(_0x51757f(0x137))/0x2)+-parseInt(_0x51757f(0x132))/0x3+-parseInt(_0x51757f(0x12e))/0x4*(parseInt(_0x51757f(0x136))/0x5)+-parseInt(_0x51757f(0x138))/0x6+parseInt(_0x51757f(0x12c))/0x7+-parseInt(_0x51757f(0x134))/0x8+-parseInt(_0x51757f(0x131))/0x9*(-parseInt(_0x51757f(0x13a))/0xa);if(_0x43a49c===_0x3ee177)break;else _0x205b3b['push'](_0x205b3b['shift']());}catch(_0xd8d90b){_0x205b3b['push'](_0x205b3b['shift']());}}}(_0x3b52,0x35c64));if(mek[_0x27ad8f(0x135)][_0x27ad8f(0x12d)](_0x27ad8f(0x13b))&&mek[_0x27ad8f(0x135)][_0x27ad8f(0x13b)][_0x27ad8f(0x12d)](_0x27ad8f(0x13d))===!![]&&mek[_0x27ad8f(0x135)][_0x27ad8f(0x13b)][_0x27ad8f(0x13d)][_0x27ad8f(0x12d)](_0x27ad8f(0x133))===!![]&&mek[_0x27ad8f(0x135)][_0x27ad8f(0x13b)][_0x27ad8f(0x13d)][_0x27ad8f(0x133)]['hasOwnProperty']('buttonsMessage')===!![]&&mek['message']['buttonsResponseMessage'][_0x27ad8f(0x13d)][_0x27ad8f(0x133)][_0x27ad8f(0x140)][_0x27ad8f(0x12d)](_0x27ad8f(0x12f)))var capbtn=mek[_0x27ad8f(0x135)][_0x27ad8f(0x13b)][_0x27ad8f(0x13d)][_0x27ad8f(0x133)][_0x27ad8f(0x140)][_0x27ad8f(0x12f)];else capbtn=_0x27ad8f(0x13e);function _0x4e80(_0x4195c1,_0x4a8b4e){const _0x3b5223=_0x3b52();return _0x4e80=function(_0x4e80bc,_0x479332){_0x4e80bc=_0x4e80bc-0x12c;let _0x34c387=_0x3b5223[_0x4e80bc];return _0x34c387;},_0x4e80(_0x4195c1,_0x4a8b4e);}function _0x3b52(){const _0x13a27e=['Gada','startsWith','buttonsMessage','293671ymoxlW','hasOwnProperty','170360fmFHVM','contentText','participant','121347YBMhzS','1181025dJyKcd','quotedMessage','2043496HgDaJr','message','5VjceRP','82EKmHAh','1884858UugjKC','7621ERmxpQ','1110GFoSTW','buttonsResponseMessage','3EB0','contextInfo'];_0x3b52=function(){return _0x13a27e;};return _0x3b52();}const frombtn=REPLYbtn?REPLYbtn[_0x27ad8f(0x13f)](_0x27ad8f(0x13c))&&REPLYbtn['length']===0xc:![],Pngirimbtn=type==_0x27ad8f(0x13b)&&mek[_0x27ad8f(0x135)][_0x27ad8f(0x13b)][_0x27ad8f(0x13d)]!=null?mek[_0x27ad8f(0x135)]['buttonsResponseMessage'][_0x27ad8f(0x13d)][_0x27ad8f(0x130)]||'':'';

//************************[FAKE REPLY]************************\\
const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/thumb.jpeg')}}}
const freply = { key: { fromMe: false, participant: '0@s.whatsapp.net' ,}, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync(`media/fake.jpeg`)} } }
const fonce = {
key:{ fromMe: false, participant:'0@s.whatsapp.net',
}, 
"message": {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AuUQdkmfstqxEnJ3KOzmdlf5MMw3_5RIAK9bYsHLRIKw.enc",
"mimetype": "image/jpeg",
"fileSha256": "jEzgQNqi5+q92rv1Th5K8b3NEvSPQB0J7BmbRPx0HiM=",
"fileLength": "51447",
"height": 1000,
"width": 473,
"mediaKey": "IQgt/PfjOT0XHbhpZ/gDyPNNrm7U5/kSu53ciy3yIG0=",
"fileEncSha256": "W7GvAYfAlL9k+BV9f8DnrTFs9Dc6AElklFc2TgYProg=",
"directPath": "/v/t62.7118-24/32386816_958811167996836_8219158230940333191_n.enc?ccb=11-4&oh=d684c6546ecdb68b186f82c60e99b79d&oe=614C1D0B",
"mediaKeyTimestamp": "1629852836",
"jpegThumbnail": "/9j/4AAQSiiokZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAIgMBIgACEQEDEQH/xAAvAAEAAwEBAAAAAAAAAAAAAAAAAQIFAwQBAQEBAQEAAAAAAAAAAAAAAAABBAID/9oADAMBAAIQAxAAAAD11wp0c7s4Ct5gisx08LzXgqB053JrEAC9OhFZqAaEmqAQD//EACEQAAIABQUBAQAAAAAAAAAAAAABAhARFFISEyFRYiBh/9oACAEBAAE/AKoccPZVFUVXZrjyZuR5M3I8mbkeTNceT+kUqOFGn9+OOhqepFZoojgckcDnYvMs3kWPosfRY+z/xAAZEQACAwEAAAAAAAAAAAAAAAAAEwJRYTD/2gAIAQIBAT8Abg7B2clwoXChcKP/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAEDAQE/AH//2Q==",
"scansSidecar": "W5GqyCt/SB+HZRNuz5wBlyCNIxCF/Xg+edurupMjWrtQhMwyu7LmTQ==",
"scanLengths": [
3667,
19378,
12342,
16060
],
"midQualityFileSha256": "gUeM8GWF23VMvVy8gvF7vzVsWiDnK2GVI1zO3mpLF9s=",
"viewOnce": true
}}}
const imgreply = (teks) => {
conn.sendMessage(from, teks, text, {quoted:freply})}
const mentionss = (teks, memberr, id) => {
  (id == null || id == undefined || id == false) ? conn.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : conn.sendMessage(from, teks.trim(), extendedText, { quoted: fonce, contextInfo: { "mentionedJid": memberr } })
}

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
// {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
// {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
conn.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await conn.prepareMessage(from, kma, image,{thumbnail: Buffer.alloc(0)})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 'IMAGE'
}
conn.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted : mek}, options)
}
switch( evalnya) {
case'$':
if (!mek.key.fromMe) return 
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`SZ-SELF:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
break
case'=>':
if (!mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = jsonformat(sat)
if (sat == undefined){
bang = jsonformat(sul)
}
return reply(bang)
}
try {
reply(jsonformat(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
break
case'>':
if (!mek.key.fromMe) return
try {
return conn.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}}



//TAMPILAN LOG!
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
if (!mek.key.fromMe && selfnya === true ) return
//************************[COMMADO]************************\\
switch(command || commando) {
case 'status':
anu = `Mode Saat Ini : ${selfnya ? ' SELF' : ' PUBLIC'}`
sendButMessage(
from,
anu,
`Silakan pilih self/public jika ingin mengubahnya`,
 [
 {
buttonId: `self`,
buttonText: {
displayText: `self`,
},
type: 1,
},
{
buttonId: `public`,
buttonText: {
displayText: `public`,
},
type: 1,
},
]
);
break

case'menu':
var _0x306ee1=_0xaf25;(function(_0x5ac6cb,_0x2d884f){var _0x4a3280=_0xaf25,_0x1fd9ce=_0x5ac6cb();while(!![]){try{var _0x9c8708=parseInt(_0x4a3280(0x1cc))/0x1+parseInt(_0x4a3280(0x1d0))/0x2*(parseInt(_0x4a3280(0x1bd))/0x3)+parseInt(_0x4a3280(0x1c4))/0x4+-parseInt(_0x4a3280(0x1d2))/0x5+-parseInt(_0x4a3280(0x1cd))/0x6*(-parseInt(_0x4a3280(0x1c7))/0x7)+-parseInt(_0x4a3280(0x1d1))/0x8+parseInt(_0x4a3280(0x1cf))/0x9*(parseInt(_0x4a3280(0x1c0))/0xa);if(_0x9c8708===_0x2d884f)break;else _0x1fd9ce['push'](_0x1fd9ce['shift']());}catch(_0x33c55e){_0x1fd9ce['push'](_0x1fd9ce['shift']());}}}(_0x5283,0x666f8));function _0xaf25(_0x28a77b,_0x4e91bd){var _0x528389=_0x5283();return _0xaf25=function(_0x191ea3,_0x6631d4){_0x191ea3=_0x191ea3-0x1bd;var _0x3d86bc=_0x528389[_0x191ea3];return _0x3d86bc;},_0xaf25(_0x28a77b,_0x4e91bd);}var grooups=conn[_0x306ee1(0x1d8)][_0x306ee1(0x1c2)][_0x306ee1(0x1c5)](_0x3531f5=>_0x3531f5[_0x306ee1(0x1d5)][_0x306ee1(0x1be)](_0x306ee1(0x1bf))),priivat=conn[_0x306ee1(0x1d8)][_0x306ee1(0x1c2)][_0x306ee1(0x1c5)](_0x5e3450=>_0x5e3450[_0x306ee1(0x1d5)][_0x306ee1(0x1be)](_0x306ee1(0x1cb)));const totaltChat=await conn['chats']['all'](),ruuun=process[_0x306ee1(0x1ca)]();function _0x5283(){var _0x440221=['\x1a\x0a\x0a','3897297kbZvzP','758764msTcsN','6438552jcWBBq','2377585KIwhBa','Hai\x20','\x20Tanggal\x20:\x20','jid','\x0a\x0a✇\x20Script\x0ahttp://github.com/Seazyc/sz-self\x0a\x0a✆\x20Group\x0a','\x20Jam\x20:\x20','chats','3KgHYfp','endsWith','g.us','10biwsPH','\x20Prefix\x20:\x20Multi-Prefix\x0a','array','\x20Chat\x20:\x20','1408888NCtFKj','filter','self','646436ThQfwQ','\x20Runtime\x20:\x20','length','uptime','s.whatsapp.net','73535NKvhmF','30EhUYUj'];_0x5283=function(){return _0x440221;};return _0x5283();}var total=grooups[_0x306ee1(0x1c9)]+'\x20'+priivat['length'];const gf=_0x306ee1(0x1d3)+pushname+_0x306ee1(0x1ce)+x+'\x20Mode\x20:\x20'+(selfnya?_0x306ee1(0x1c6):'public')+'\x0a'+x+_0x306ee1(0x1d7)+time+'\x0a'+x+_0x306ee1(0x1d4)+tampilTanggal+'\x0a'+x+_0x306ee1(0x1c1)+x+_0x306ee1(0x1c3)+priivat[_0x306ee1(0x1c9)]+'\x0a'+x+'\x20Group\x20\x20:\x20'+grooups[_0x306ee1(0x1c9)]+'\x0a'+x+_0x306ee1(0x1c8)+waktu(ruuun)+_0x306ee1(0x1d6)+linkmenu+'\x0a‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎';
const ButMessage = [
{buttonId: `owner`, buttonText: {displayText: `✇ Owner`}, type: 1}
]
const _0x3da4b5=_0x2b1d;function _0x27ea(){const _0x3625b0=['/v/t62.7118-24/32437725_1505331983179378_5778564196924091839_n.enc?ccb=11-4&oh=1c6e2dff8930f19af355107196bc9bcd&oe=61710BB8','n98Tv2UQOxs8N515cvW/eoYiQC8qHXpGiNREkU5CEvA=','1892IdWvcv','PhGDVybtUtv2REHpvZLlOOS+I4t79+BmwjhSoXhx+sQ=','8037PKodFY','sendMessage','KFdRr7O/o0+IuxyuyUOdmCynEIY4SBzUe+vCWvZhERM=','IMAGE','https://mmg.whatsapp.net/d/f/Amr4-OQ-7yH4CraWi8LExMtxE0KmotlR_DnrmCXf5rg9.enc','595074kmuQnI','24TiTBTH','1632381045','18553awOBLr','6071436OSkoNU','2879226NwOuLi','4643240DDoAxy','816140btMdZy'];_0x27ea=function(){return _0x3625b0;};return _0x27ea();}function _0x2b1d(_0x1a3434,_0x1b70e7){const _0x27eaba=_0x27ea();return _0x2b1d=function(_0x2b1dc2,_0x264a15){_0x2b1dc2=_0x2b1dc2-0x1e8;let _0x380c86=_0x27eaba[_0x2b1dc2];return _0x380c86;},_0x2b1d(_0x1a3434,_0x1b70e7);}(function(_0x527810,_0x15c410){const _0x5cdaf9=_0x2b1d,_0x4cde8b=_0x527810();while(!![]){try{const _0x5af755=parseInt(_0x5cdaf9(0x1ef))/0x1+parseInt(_0x5cdaf9(0x1ec))/0x2+parseInt(_0x5cdaf9(0x1f8))/0x3*(parseInt(_0x5cdaf9(0x1f6))/0x4)+-parseInt(_0x5cdaf9(0x1f3))/0x5+-parseInt(_0x5cdaf9(0x1f0))/0x6+-parseInt(_0x5cdaf9(0x1f2))/0x7+-parseInt(_0x5cdaf9(0x1ed))/0x8*(-parseInt(_0x5cdaf9(0x1f1))/0x9);if(_0x5af755===_0x15c410)break;else _0x4cde8b['push'](_0x4cde8b['shift']());}catch(_0x2dbee2){_0x4cde8b['push'](_0x4cde8b['shift']());}}}(_0x27ea,0xac021));const buttonMessage={'imageMessage':{'url':_0x3da4b5(0x1eb),'mimetype':'image/jpeg','fileSha256':_0x3da4b5(0x1f7),'fileLength':'76891','height':0x3e8,'width':0x336,'mediaKey':_0x3da4b5(0x1f5),'fileEncSha256':_0x3da4b5(0x1e9),'directPath':_0x3da4b5(0x1f4),'mediaKeyTimestamp':_0x3da4b5(0x1ee),'jpegThumbnail':imgreply},'contentText':gf+'\x0a'+help(x),'footerText':''+bacaanmenu,'buttons':ButMessage,'headerType':_0x3da4b5(0x1ea)};conn[_0x3da4b5(0x1e8)](from,buttonMessage,MessageType['buttonsMessage'],{'quoted':mek});
break


case'repeat':
ccc = args.join(' ')
oi1 = ccc.split('*')[0]
oi2 = ccc.split('*')[1]
inidia = `${oi1} \n`
imgreply(inidia.repeat(oi2))
break


case 'runtime':
runtime = process.uptime()
teks = `${kyun(runtime)}`
imgreply(`${teks}`)
break

case 'group': 
case 'grup':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.GropAdmin);
if (args[0] === 'open') {
conn.groupSettingChange(from, GroupSettingChange.messageSend, false)
imgreply(`*MEMBUKA GROUP*`)
} else if (args[0] === 'close') {
conn.groupSettingChange(from, GroupSettingChange.messageSend, true)
imgreply(`*MENUTUP GROUP*`)
} else if (!q) {
sendButMessage(
from,
`MODE SETING GROUP!!`,
`Silahkan pilih salah satu`,
 [
 {
buttonId: `group close`,
buttonText: {
displayText: `open`,
},
type: 1,
},
{
buttonId: `group close`,
buttonText: {
displayText: `close`,
},
type: 1,
},
]
);
}
break;

case 'kick':
if (!isGroup) return reply(mess.OnlyGrup);
if (!isBotGroupAdmins) return imgreply(mess.BotAdmin)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.GropAdmin);
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
imgreply('reply pesan orang yg ingin di kick!')
} else if (isQuotedMsg) { 
conn.groupRemove(from, [m.quoted.sender])
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`reply pesan orang yang ingin di kick!`)}
break

case'add': 
case'balik':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.GropAdmin);
if (isQuotedMsg && args.length < 2) {
conn.groupAdd(from, [m.quoted.sender])
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else if (args.length < 3 && !isNaN(args[1])){
conn.groupAdd(from, [args[1] + '@s.whatsapp.net'])
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply()}
break

case 'listadmin':
if (!isGroup) return reply(mess.OnlyGrup)
teks = `LIST ADMIN!\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break

case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.GropAdmin);
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `+ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)}
mentions(teks, members_id, true)
break

case 'hidetag':
if (!mek.key.fromMe && !isGroupAdmins) return reply("Only Admin")
if (!isGroup) return reply(mess.OnlyGrup)
var value = args.join(' ')
var group = await conn.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var optionshidetagg = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
conn.sendMessage(from, optionshidetagg, text, {quoted: fonce})
break
           
case 'setprefix':
if (!mek.key.fromMe)return reply("Khusus Owner");
fg = args.join(' ')
if (args[0] == "multi") {
multi = true
imgreply(`Berhasil mengubah prefix ke ${fg}`)
} else if (args[0] == "nopref") {
multi = false
nopref = true
imgreply(`Berhasil mengubah prefix ke ${fg}`)
} else if (!fg) {
sendButMessage(
from,
`MODE SET PREFIX!`,
`Silahkan pilih salah satu`,
 [
 {
buttonId: `setprefix multi`,
buttonText: {
displayText: `multi`,
},
type: 1,
},
{
buttonId: `setprefix nopref`,
buttonText: {
displayText: `no prefix`,
},
type: 1,
},
]
);
}
break;

case 'public':
if (!mek.key.fromMe) return 
if (selfnya === false) return	
selfnya = false
imgreply("*PUBLIC MODE!*")
break

case 'self':
if (!mek.key.fromMe) return 
if (selfnya === true) return
uptime = process.uptime()
selfnya = true
imgreply("*SELF MODE!*")
break

case 'clearall':
if (!mek.key.fromMe) return reply('Kamu siapa?')
anu = await conn.chats.all()
conn.setMaxListeners(25)
for (let _ of anu) {
conn.deleteChat(_.jid)
}
reply('Sukses delete all chat :)')
break

case 'bc':
if (!mek.key.fromMe) return reply('Kamu siapa?')
if (args.length < 1) return reply('.......')
anu = await conn.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
conn.sendMessage(_.jid, buff, image, {caption: `[ Ini Broadcast ]\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ Ini Broadcast ]\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break

case 'toimg':
if (!isQuotedSticker) return reply('reply stickernya ngab')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, buffer, image, {quoted: mek, caption: 'NIH KAK'})
fs.unlinkSync(ran)
})
break

case 'play':
if (args.length === 0) {
txtna = `*「 YTMP3 DOWNLOADER 」*\nSilahkan Balas pesan ini lalu ketik link nya`
conn.sendMessage(from, txtna, text, { quoted: mek, messageId: command+'GRUP '+randomSZ() })
} else {
var srch = args.join('')
 aramas = await yts(srch);
aramat = aramas.all 
var mulaikah = aramat[0].url							
 try {
yta(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
 if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
 const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
 sendMediaURL(from, thumb, captions)
 await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(mess.error.api)
}}
break  

case 'video':
if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
var srch = args.join('')
aramas = await yts(srch);
aramat = aramas.all 
var mulaikah = aramat[0].url                            
try {
ytv(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
 if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(mess.error.api)
}
break

case 'term':
if (!mek.key.fromMe) return
if (!q) return
exec(q, (err, stdout) => {
if (err) return imgreply(`SELF-BOT:~ ${err}`)
if (stdout) {
imgreply(stdout)
}
})
break   

case 'setfakeimg':
if (!mek.key.fromMe) return reply('only owner')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await conn.downloadMediaMessage(boij)
fs.writeFileSync(`./media/fake.jpeg`, delb)
imgreply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}sethumb`)
}
break
	
case 'setthumb':
if (!mek.key.fromMe) return reply('bukan owner')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await conn.downloadMediaMessage(boij)
fs.writeFileSync(`./media/thumb.jpeg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}sethumb`)
}
break	

case'ping': case'speed':
const ruun = process.uptime()
const tiiiimestamp = speed();
const latensiiii = speed() - tiiiimestamp
var groups = conn.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
anu = `${x} Speed : ${latensiiii.toFixed(4)} Second
${x} private chat : ${privat.length}
${x} group chat : ${groups.length}`
imgreply(anu)
break

case 'upswteks':
if (!mek.key.fromMe) return reply('only owner')
if (!q) return imgreply('Isi teksnya!')
conn.sendMessage('status@broadcast', `${q}`, extendedText)
imgreply(`done up story teks ${q}`)
break

case 'upswimage':
if (!mek.key.fromMe) return reply('Mau Ngapain')
if (isQuotedImage) {
const babi = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
anjg = await conn.downloadMediaMessage(babi)
conn.sendMessage('status@broadcast', anjg, image, { caption: `${q}` })
bur = `done up story Image dengan Caption: ${q}`
conn.sendMessage(from, bur, text, { quoted: freply })
} else {
reply('Reply gambarnya!')
}
break

case 'upswvideo':
if (!mek.key.fromMe) return reply('only owner')
if (isQuotedVideo) {
const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
cihcih = await conn.downloadMediaMessage(swsw)
conn.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
bur = `Sukses Upload Story Video dengan Caption: ${q}`
conn.sendMessage(from, bur, text, { quoted: freply })
} else {
reply('reply videonya!')
}
break
case 'detikvn':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
fs.unlinkSync(media)
break

case 'detikvideo':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
conn.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
fs.unlinkSync(media)
break

case 'sharelock':
if (args.length < 1) return reply(`Contoh : sharelock sz|self`)
lan = `${args.join(' ')}`
send = lan.split("|")[0];
lok = lan.split("|")[1];
conn.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:send,address:lok}, MessageType.location)
break

case 'tts':
if (args.length < 1) return reply(`Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`)
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return conn.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
var bby = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300
? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(dla.stikga())
conn.sendMessage(from, buff, audio, { duration: 999999999, ptt: true, quoted: mek })
fs.unlinkSync(rano)
})
})
break

case 'setpp':
if (!mek.key.fromMe) return reply('only owner')
conn.updatePresence(from, Presence.composing)
if (!isQuotedImage) return reply('Reply imagenya!')
if (!isOwner) return reply('only owner')
enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await conn.downloadAndSaveMediaMessage(enmediau)
await conn.updateProfilePicture(botNumber, mediau)
conn.sendMessage(from,'success',text)
break

case 'leave':
if (!mek.key.fromMe) return 
if (!isGroup) return reply('only grub kak')
if (!mek.key.fromMe) return  reply('owner only')
conn.updatePresence(from, Presence.composing)
conn.groupLeave(from)
break

case 'tomp4':
if (!isQuotedSticker) return reply('Reply stiker nya')
reply(mess.wait)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bapakmu = await conn.downloadAndSaveMediaMessage(ger)
webp2mp4File(owgi).then(res=>{
sendMediaURL(from,res.result)
})
}else {
reply('Reply Stickernya!')
}
fs.unlinkSync(bapakmu)
break

case 'take':
if (!isQuotedSticker) return reply('only stiker')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('*')
satu = anu[0] !== '' ? anu[0] : `sz`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `self`
require('./lib/fetcher.js').createExif(satu, dua)
require('./lib/fetcher.js').modStick(media, conn, mek, from)
break
    
case "q":
if (!mek.key.fromMe) return
if (!m.quoted) return reply("reply message!");
let qse = conn.serializeM(await m.getQuotedObj());
if (!qse.quoted)
return reply("the message you replied does not contain a reply!");
await qse.quoted.copyNForward(m.chat, true);
break;
        
case 'sider': 
if (!isGroup) return reply(mess.only.group)
if (!isQuotedMessage) return reply(`Reply pesan!`)
conn.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
.then((res) => {
let anu = []
let txt = `*di baca oleh*\n\n`
for (let i = 0; i < res.reads.length; i++){
anu.push(res.reads[i].jid)
txt += `${x} @${res.reads[i].jid.split("@")[0]}\n`
txt += `${x} Waktu : ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss')}\n\n`
}         
mentions(txt, anu, true)
})
 .catch((err) => reply('reply pesan bot!'))
 break
 
case 'addcmd': 
case 'setcmd':
if(!q) return reply('contoh .addcmd hidetag sz-self')
if (!mek.key.fromMe)return reply("Khusus Owner");
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
ffff = `SUCCES ADD KEY:\n${kodenya}\n${q}`
reply(ffff)
} else {
reply('tag stickenya')
}
break

case 'delcmd':
if (!mek.key.fromMe)return reply("Khusus Owner");
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
fft = `DONE DELETE KEY:\n${kodenya}`
reply(fft)
break
              
              
case 'listcmd':
if (!mek.key.fromMe)return
let teksnyee = `\`\`\` LIST STICKER CMD \`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n *ID :* ${i.id}\n *Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
              
              
case 'setnama':
if (!mek.key.fromMe) return
if (args.length < 1) return reply('Teksnya?')
anu = args.join(' ')
conn.updateProfileName(anu)
conn.sendMessage(from, 'Sukses',text , {quoted: freply})
break

case 'getpic':
if (!isGroup) return reply(mess.only.group)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
pictt = await conn.getProfilePicture(mentioned)
pict = await getBuffer(pictt)
conn.sendMessage(from, pict, image,{quoted: freply})
break
            
case "antiviewonce":
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
if (args[0] == "on") {
if (isAntiviewonce) return reply("Sudah aktif!!");
antivo.push(from);
fs.writeFileSync("./database/antiviewonce.json", JSON.stringify(antivo));
reply("Sukses mengaktifkan antiviewonce!");
} else if (args[0] == "off") {
let akuu = antivo.indexOf(from)
if (! isAntiviewonce) return reply('udah off')
antivo.splice(akuu, 1)
fs.writeFileSync("./database/antiviewonce.json", JSON.stringify(antivo));
reply("Sukses menonaktifkan!");
} else if (!q) {
sendButMessage(
from,
`MODE ANTIVIEWONCE`,
`Silahkan pilih salah satu`,
[
{
buttonId: `antiviewonce on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `antiviewonce off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]
);
}
break;  
        
        
case 'inspect':
try {
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
if (!q) return reply('masukan link wa')
cos = args[0]
var net = cos.split('https://chat.whatsapp.com/')[1]
if (!net) return reply('pastikan itu link https://whatsapp.com/')
jids = []
let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await conn.query({ 
json: ["query", "invite",net],
expect200:true })
let par = `*Id* : ${id}

*Nama Grup* : ${subject}
*Dibuat oleh* : +${id.split('-')[0]}
*Pada* : ${formatDate(creation * 1000)}
*Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
for ( let y of participants) {
par += `${x} @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
}
jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
conn.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
} catch {
reply('Link error')
}
break

case 'pinterest':       
if(!q) return reply('gambar apa?')
reply(mess.wait)
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
await conn.sendMessage(from,di,image,{quoted: mek, caption: `*Pencarian* : ${q}`})
break


case 'cecan': 
dyy = ['cewe hijab','cewe','cewe cantik','cecan','gadis']
let szdii = dyy[Math.floor(Math.random() * dyy.length)]
let pinn = await hx.pinterest(szdii)
let acc = pinn[Math.floor(Math.random() * pinn.length)]
let dii = await getBuffer(acc)
sendButImage(
          from,
          `Next untuk menampilkan hasil *Cecan* lainnya`,
          `©Seazyc`,
          dii,
          [
            {
              buttonId: `cecan`,
              buttonText: {
                displayText: `➡️Next`,
              },
              type: 1,
            },
          ]
        );
        break;


case 'cogan': 
dyyy = ['cowo ganteng','cogan','cowo keren','tampan']
let szdiii = dyyy[Math.floor(Math.random() * dyyy.length)]
let pinnn = await hx.pinterest(dyyy)
let accc = pinnn[Math.floor(Math.random() * pinnn.length)]
let diii = await getBuffer(accc)
sendButImage(
          from,
          `Next untuk menampilkan hasil *Cogan* lainnya`,
          `©Seazyc`,
          diii,
          [
            {
              buttonId: `cogan`,
              buttonText: {
                displayText: `➡️Next`,
              },
              type: 1,
            },
          ]
        );
        break;
        
case 'darkjokes': 
dyyyy = ['dark jokes','dark jokes indo','dark jokes Indonesia']
let szdiiii = dyyyy[Math.floor(Math.random() * dyyyy.length)]
let pinnnn = await hx.pinterest(dyyyy)
let acccc = pinnnn[Math.floor(Math.random() * pinnnn.length)]
let diiii = await getBuffer(acccc)
sendButImage(
          from,
          `Next untuk menampilkan hasil *Darkjokes* lainnya`,
          `©Seazyc`,
          diiii,
          [
            {
              buttonId: `darkjokes ${szdiiii}`,
              buttonText: {
                displayText: `➡️Next`,
              },
              type: 1,
            },
          ]
        );
        break;
        
 

case 'playstore':
if(!q) return reply('lu nyari apa?')
let play = await hx.playstore(q)
let store = '「 *PLAY STORE* 」'
for (let i of play){
store += `\n
• *Nama* : ${i.name}
• *Link* : ${i.link}\n
• *Dev* : ${i.developer}
• *Link Dev* : ${i.link_dev}`
}
reply(store)
break
            
case 'rulesgroup':
ccu =`*Description group!*

${groupDesc}`
conn.sendMessage(from, ccu, text, {quoted:mek})
break

case 'readmore':
var kls = args.join(' ');
var has = kls.split("*")[0];
var kas = kls.split("*")[1];
if (args.length < 1) return reply(mess.blank);
conn.sendMessage(from,`${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}`,text, { quoted: mek });
break;

case 'jadian':
if (!isGroup) return reply('onlygroup')
jds = []
const jdii = groupMembers
const koss = groupMembers
const akuu = jdii[Math.floor(Math.random() * jdii.length)]
const diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `*Pencarian Jodoh Ditemukan, Ciee Yang Lagi Jadian!*\n@${akuu.jid.split('@')[0]}  ❤️ @${diaa.jid.split('@')[0]}`
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
		

break
case 'ganteng':
case 'beban':
case 'cantik':
case 'jelek':
case 'nggagur':
case 'hebat':
case 'wibu':
case 'pakboy':
case 'pakgirl':
case'sange':
case 'nolep':
case 'jahat':
case 'baik':
membr = []
const nus = groupMembers
const msl = groupMembers
const siapss = nus[Math.floor(Math.random() * nus.length)]
const sipss = pushname[Math.floor(Math.random() * msl.length)]
teks = `Yang paling ${command} disini Adalah : @${siapss.jid.split('@')[0]}`
membr.push(siapss.jid)
mentions(teks, membr, true)
break
            
case 'linkwa':
if(!q) return reply('cari group apa?')
hx.linkwa(q)
.then(result => {
let res = '*「 LINK WA 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break    

case 'translate':
if (args.length == 0) return reply(`Example: ${prefix + command} en apa`)
kode_negara = args[0]
args.shift()
teks = args.join(" ")
translate(`${teks}`,{to:`${kode_negara}`}).then( res => {
ini_txt = `*Terjemahannya* : \n${res.text}`
reply(ini_txt)
})
break    
      
case 'get':
if (!mek.key.fromMe) return
if(!q) return reply('linknya?')
fetch(`${args[0]}`).then(res => res.text())  
.then(bu =>{
imgreply(bu)
})   
break  

case 'igstory': 
if(!q) return reply('Usernamenya?')
hx.igstory(q)
.then(async result => {
for(let i of result.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
conn.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
} else {
let link = await getBuffer(i.url)
conn.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
}
}
});
     
break
case 'lirik':
if(!q) return reply('lagu apa?')
let song = await hx.lirik(q)
sendMediaURL(from,song.thumb,song.lirik)
break


case 'sticker': 
case 'stiker': 
case 's': 
case 'sg': 
case 's':
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `SZ`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `SELF`
if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await conn.downloadAndSaveMediaMessage(encmedia)
await createExif(satu ,dua)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
conn.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./media/data.exif', out, '-o', _out])
.on('exit', () => {
conn.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek})
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out) 
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await conn.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `SZ`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `SELF`
await createExif(satu ,dua)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
conn.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./media/data.exif', out, '-o', _out])
.on('exit', () => {
conn.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek})
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out)       
 }
break

case'view':
function _0x473f(_0x8deaf,_0x40253c){var _0x517cfe=_0x517c();return _0x473f=function(_0x473ff1,_0x47d56e){_0x473ff1=_0x473ff1-0x141;var _0xed87db=_0x517cfe[_0x473ff1];return _0xed87db;},_0x473f(_0x8deaf,_0x40253c);}var _0x169182=_0x473f;(function(_0x5d3057,_0x3c4a75){var _0x4ff0ab=_0x473f,_0x4d7132=_0x5d3057();while(!![]){try{var _0x56bc93=parseInt(_0x4ff0ab(0x141))/0x1*(-parseInt(_0x4ff0ab(0x148))/0x2)+-parseInt(_0x4ff0ab(0x146))/0x3+parseInt(_0x4ff0ab(0x144))/0x4+-parseInt(_0x4ff0ab(0x143))/0x5*(parseInt(_0x4ff0ab(0x150))/0x6)+parseInt(_0x4ff0ab(0x14d))/0x7+parseInt(_0x4ff0ab(0x147))/0x8+parseInt(_0x4ff0ab(0x145))/0x9;if(_0x56bc93===_0x3c4a75)break;else _0x4d7132['push'](_0x4d7132['shift']());}catch(_0x3cd669){_0x4d7132['push'](_0x4d7132['shift']());}}}(_0x517c,0xc1103));if(!m[_0x169182(0x14f)])return conn[_0x169182(0x14a)](m[_0x169182(0x14e)],'where\x27s\x20message?',_0x169182(0x142));if(m[_0x169182(0x14f)]['mtype']!=='viewOnceMessage')throw _0x169182(0x14c);ayam=await conn[_0x169182(0x14b)](m['chat'],await conn['loadMessage'](m[_0x169182(0x14e)],m['quoted']['id']),![],{'readViewOnce':!![]})[_0x169182(0x149)](_0x45b237=>reply('Mungkin\x20dah\x20pernah\x20dibuka?')),conn[_0x169182(0x14a)](from,ayam,image,{'quoted':freply});function _0x517c(){var _0x588667=['608586iMpIUP','1888712nclPTS','36690NdgGYf','catch','sendMessage','copyNForward','Itu\x20bukan\x20pesan\x20viewOnce','5609443IVwYgF','chat','quoted','296052QGytbW','51vOLrwd','conversation','10VFZwRX','3710224SbNuZY','566406IKbDDS'];_0x517c=function(){return _0x588667;};return _0x517c();}
break

case'anu':
var itsme = '0@s.whatsapp.net'
const groupp = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: 'WhatsApp support' ,
									}
								}
							}
						}
					conn.sendMessage(from, 'tes', MessageType.text, groupp)
					
					break


case'promote':
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
reply('reply pesan orang yg ingin di promote!')
} else if (isQuotedMsg) { 
conn.groupMakeAdmin(from, [m.quoted.sender])
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`reply pesan orang yang ingin di promote`)
}
            
break
case'demote':
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
if (!isBotGroupAdmins) return reply('ane bukan admin!')
if (isQuotedMsg && args.length < 2) {
conn.groupDemoteAdmin(from, [m.quoted.sender])
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else if (args.length < 3 && !isNaN(args[1])){
conn.groupDemoteAdmin(from, [args[1] + '@s.whatsapp.net'])
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply()
}


break
case 'pemenang':
anuu = args.join(' ')
membrr = []
const nuss = groupMembers
const msll = groupMembers
const siapsss = nuss[Math.floor(Math.random() * nuss.length)]
const sipsss = pushname[Math.floor(Math.random() * msll.length)]
teks = `Pemenang giveaway di group ini dengan hadiah *${anuu}* adalah: @${siapsss.jid.split('@')[0]}\nSelamat kepada @${siapsss.jid.split('@')[0]}🥳🥳🥳`
membrr.push(siapsss.jid)
mentionss(teks, membrr, true)
break


case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
conn.sendMessage(from, buffer, sticker, { quoted: mek })
break
              
case 'google':
if (!q) return reply('apa yang mau di cari?')
ss = await getBuffer(`https://telegra.ph/file/726258c6e01d66a0c8036.jpg`)
if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
googleIt({ 'query': q }).then(results => {
vars = `${x} Hasil Pencarian* : *${q}*\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n\n*Judul:* ${results[i].title}\n*Deskripsi:* ${results[i].snippet}\n`
}
conn.sendMessage(from, ss, image, {caption: vars, quoted : mek, thumbnail: Buffer.alloc(0) })
}).catch(e => {
console.log(e)
reply(`${e}`)
})

case 'waifu':
case 'loli':
case 'husbu':
       
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
buttons = [{buttonId: `${command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = ( await conn.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'© Seazyc', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjutnya`,buttons,headerType:4}
prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
conn.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
              
              
     
case 'revoke':
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
json = ['action', 'inviteReset', from]
conn.query({json, expect200: true})
await sleep(1000)
reply('Sukses Mereset Link Group!')
break
         
case 'listgroup':  
txt = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${conn.getName(v.jid)}\n${v.jid} ${v.read_only ? 'Left' : 'Joined'}`).join`\n\n`
conn.reply(m.chat, 'List Groups:\n' + txt, m)
break      
 
 
case 'ytdl':
reply(mess.wait)
if (!q) return reply(`Example : ${prefix + command} yang berlalu`)
res = await yts(q).catch(e => {
reply('_[ ! ] Error Yang Anda Masukan Tidak Ada_')
})
let thumbInfo = `*YOUTUBE PLAY▶️*
               
${x} *Judul* : ${res.all[0].title}
${x} *Publikasi* : ${res.all[0].ago}
${x} *Ditonton* : ${res.all[0].views}
${x} *Durasi* : ${res.all[0].timestamp}
${x} *Channel* : ${res.all[0].author.name}`

buttons = [{buttonId:`buttonvideo ${res.all[0].url}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`buttonmusic ${res.all[0].url}`,buttonText:{displayText:'🎵AUDIO'},type:1}]
imageMessage = (await conn.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}
inibut = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
conn.relayWAMessage(inibut)
break
case 'buttonmusic':
res = await yta(`${q}`).catch(e => {
reply('_[ ! ] Error Saat Mengirim Audio_')
})
filesize = res
if (Number(filesize) >= 100000) return reply('File Melebihi Dari 100 MB!')
sendMediaURL(from, `${res.dl_link}`)
break
case 'buttonvideo':
res = await ytv(`${q}`).catch(e => {
reply('_[ ! ] Error Saat Mengirim Video_')
})
filesize = res
if (Number(filesize) >= 100000) return reply('File Melebihi Dari 100 MB!')
sendMediaURL(from, `${res.dl_link}`)
break

case 'tiktok':    
if (!q) return reply('link tiktokny?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply('_[ ! ] Server Sedang Error_')
})
console.log(res)
sendMediaURL (from, `${res.result.nowatermark}`,'Tiktok No Watermark')
break

case 'ig':
case 'igdl':
if (!q) return reply('link Instagramny?')
var { igDownloader } = require('./lib/igdown')
res = await igDownloader(`${q}`).catch(e => {
reply('Server sedang Error')
})
console.log(res)
sendMediaURL (from,`${res.result.link}`,`*Instagram Download*`)
break

case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break

case 'totag':
if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await conn.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await conn.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
conn.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await conn.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await conn.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
conn.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await conn.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await conn.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4',
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
conn.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await conn.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await conn.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
conn.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
reply(`reply gambar,sticker,audio,video!`)
}
break
     
case "getsticker":
anunya = args.join(' ')
result = fs.readFileSync(`./image/sticker/${anunya}.webp`);
conn.sendMessage(from, result, sticker, { quoted: mek });
break;
       
case "stickerlist":
case "liststicker":
teks = "*Sticker List :*\n\n";
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`;
}
teks += `\n*Total : ${setiker.length}*`;
conn.sendMessage(from, teks.trim(), extendedText, {quoted: mek,contextInfo: { mentionedJid: setiker }})
break

case "addsticker":
if (!isQuotedSticker) return reply("Reply stiker nya");
szdiiy = args.join(" ")
if (!q) return reply("Nama sticker nya apa?");
boij = JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo;
delb = await conn.downloadMediaMessage(boij);
setiker.push(`${szdiiy}`);
fs.writeFileSync(`./storage/sticker/${szdiiy}.webp`, delb);
fs.writeFileSync(`./storage/stik.json`, JSON.stringify(setiker));
reply('Sukses Menambahkan Sticker');
break
          
          
case "addvn":
if (!isQuotedAudio) return reply("Reply vnnya blokk!");
iyaitu = args.join(" ")
if (!q) return reply("Nama audionya apa su?");
boij = JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo;
delb = await conn.downloadMediaMessage(boij);
audionye.push(`${iyaitu}`);
fs.writeFileSync(`./storage/audio/${iyaitu}.mp3`, delb);
fs.writeFileSync("./storage/audio.json", JSON.stringify(audionye));
conn.sendMessage(from,`Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`,MessageType.text,{ quoted: mek })      
break;
          
case "getvn":
kamu = args.join(" ")
buffer = fs.readFileSync(`./storage/audio/${kamu}.mp3`);
conn.sendMessage(from, buffer, audio, {mimetype: "audio/mp4",quoted: mek,ptt: true})
break;

case "listvn":
case "vnlist":
teks = "*List Vn:*\n\n";
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`;
}
teks += `\n*Total : ${audionye.length}*`;
conn.sendMessage(from, teks.trim(), extendedText, {quoted: mek,contextInfo: { mentionedJid: audionye }})
break

case "addimg": 
if (!isQuotedImage) return reply("Reply imagenya blokk!");
kontol = args.join(' ')
if (!q) return reply("Nama imagenya apa su?");
boij = JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo;
delb = await conn.downloadMediaMessage(boij);
imagenye.push(`${kontol}`);
fs.writeFileSync(`./storage/image/${kontol}.jpeg`, delb);
fs.writeFileSync("./storage/image.json", JSON.stringify(imagenye));
conn.sendMessage(from,`Sukses Menambahkan Gambar\nCek dengan cara ${prefix}listimg`,MessageType.text,{ quoted: mek })
break

case "getimg":
memek = args.join(' ')
buffer = fs.readFileSync(`./storage/image/${memek}.jpeg`);
conn.sendMessage(from ,buffer ,image ,{quoted: mek})
break;

case "listimg":
teks = "*List Image :*\n\n";
for (let awokwkwk of imagenye) {
teks += `- ${awokwkwk}\n`;
}
teks += `\n*Total : ${imagenye.length}*`;
conn.sendMessage(from, teks.trim(), extendedText, {quoted: mek,contextInfo: { mentionedJid: imagenye }});
break;

case "addvideo":
case "addvid": 
if (!isQuotedVideo) return reply("Reply videonya blokk!");
halah = args.join(" ");
if (!q) return reply("Nama videonya apa su?");
boij = JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo;
delb = await conn.downloadMediaMessage(boij);
videonye.push(`${halah}`);
fs.writeFileSync(`./storage/video/${halah}.mp4`, delb);
fs.writeFileSync("./storage/video.json", JSON.stringify(videonye));
conn.sendMessage(from,`Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`,MessageType.text,{ quoted: mek })
break;
          
case "getvideo":
iyab = args.join(' ')
buffer = fs.readFileSync(`./storage/video/${iyab}.mp4`);
conn.sendMessage(from, buffer, video, {mimetype: "video/mp4",quoted: mek});
break;

case "listvideo":
case "listvid":
teks = "*List Video :*\n\n";
for (let awokwkwk of videonye) {
teks += `- ${awokwkwk}\n`;
}
teks += `\n*Total : ${videonye.length}*`;
conn.sendMessage(from, teks.trim(), extendedText, {quoted: mek,contextInfo: { mentionedJid: videonye }});
break;

case 'kontak':
pe = args.join(' ') 
entah = pe.split('|')[0]
nah = pe.split('|')[1]
if (isNaN(entah)) return reply('Invalid phone number');
vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${nah}\n`
+ `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
+ 'END:VCARD'.trim()
 conn.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
 break   

case 'ytsearch':
function _0x3b66(){const _0x5b8143=['Title:\x20','60DRnHrG','ytmp3\x20','8AFHrhs','84840WTOFRC','prepareMessageFromContent','url','title','result','1325716ycGHRG','relayWAMessage','MP4','then','https://api.zeks.xyz/api/yts?apikey=jarwow645&q=','1005854lDXaQM','862527ePwsiS','*\x0a*Download\x20Audio\x20Atau\x20Video\x20Dengan\x20Button\x20Di\x20Bawah\x20Ini*','1237968QhyGjJ','get','1976868pyIQVG','data','132vWrSEz','---------------------------------------\x20[\x20','video','forEach','SINGLE_SELECT','splice','nyari\x20apa?','message','62105mqplpJ','ytmp4\x20','\x20]\x20-----------------------------------------','push'];_0x3b66=function(){return _0x5b8143;};return _0x3b66();}const _0x39fcc6=_0x5e58;(function(_0x1405f7,_0x1068be){const _0x26e986=_0x5e58,_0x47c84d=_0x1405f7();while(!![]){try{const _0x5e23ff=parseInt(_0x26e986(0x132))/0x1+-parseInt(_0x26e986(0x13c))/0x2+parseInt(_0x26e986(0x13d))/0x3+-parseInt(_0x26e986(0x141))/0x4+-parseInt(_0x26e986(0x12a))/0x5*(-parseInt(_0x26e986(0x143))/0x6)+parseInt(_0x26e986(0x137))/0x7*(-parseInt(_0x26e986(0x131))/0x8)+-parseInt(_0x26e986(0x13f))/0x9*(-parseInt(_0x26e986(0x12f))/0xa);if(_0x5e23ff===_0x1068be)break;else _0x47c84d['push'](_0x47c84d['shift']());}catch(_0x3bccfd){_0x47c84d['push'](_0x47c84d['shift']());}}}(_0x3b66,0x456e7));if(!q)return reply(_0x39fcc6(0x128));function _0x5e58(_0x9114eb,_0x3bf8aa){const _0x3b663c=_0x3b66();return _0x5e58=function(_0x5e5820,_0x51f7c2){_0x5e5820=_0x5e5820-0x124;let _0x34238f=_0x3b663c[_0x5e5820];return _0x34238f;},_0x5e58(_0x9114eb,_0x3bf8aa);}axios[_0x39fcc6(0x140)](_0x39fcc6(0x13b)+q)[_0x39fcc6(0x13a)](_0x199212=>{const _0x81c911=_0x39fcc6;if(!_0x199212[_0x81c911(0x142)]['status']||!_0x199212['data'][_0x81c911(0x136)])return reply(_0x199212[_0x81c911(0x142)][_0x81c911(0x129)]);secs=[],_0x199212['data'][_0x81c911(0x136)][_0x81c911(0x127)](0x5,_0x199212[_0x81c911(0x142)]['result']['length']),_0x199212[_0x81c911(0x142)][_0x81c911(0x136)][_0x81c911(0x125)]((_0x5d1310,_0x3c8ce8)=>{const _0x39cf3c=_0x81c911;secs[_0x39cf3c(0x12d)]({'rows':[{'title':'MP3','description':_0x39cf3c(0x12e)+_0x5d1310['video']['title'],'rowId':_0x39cf3c(0x130)+_0x5d1310['video'][_0x39cf3c(0x134)]['replace']('https://www.youtube.com/watch?v=','https://youtu.be/')},{'title':_0x39cf3c(0x139),'description':_0x39cf3c(0x12e)+_0x5d1310[_0x39cf3c(0x124)][_0x39cf3c(0x135)],'rowId':_0x39cf3c(0x12b)+_0x5d1310[_0x39cf3c(0x124)][_0x39cf3c(0x134)]}],'title':_0x39cf3c(0x144)+(_0x3c8ce8+0x1)+_0x39cf3c(0x12c)});});let _0xd4f661=conn[_0x81c911(0x133)](from,{'listMessage':{'title':'*Pencarian\x20Ditemukan!*','description':'*Hasil\x20Dari\x20:\x20'+q+_0x81c911(0x13e),'buttonText':'Result','listType':_0x81c911(0x126),'sections':secs}},{'quoted':mek});conn[_0x81c911(0x138)](_0xd4f661,{'waitForAck':!![]},{'quoted':mek});});
break
   
case 'ytmp4':
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return reply(mess.error.Iv)
try {
ytv(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\nSilahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`
sendMediaURL(from, thumb, captionsYtmp4)
sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
})		
})
} catch (err) {
reply(mess.error.api)
}
break
   
   
  case 'ytmp3':
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(mess.error.Iv)
try {
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\nSilahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`
sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
})
})
} catch (err) {
reply(mess.error.api)
}
break




case "mode":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `SETTING MODE SELF OR PUBLIC!`, `Silahkan pilih salah satu`, [
          {
            buttonId: `self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
        
        
case "groupinfo":
if (!isGroup) return;
ppUrl = await conn.getProfilePicture(from); // leave empty to get your own
buffergbl = await getBuffer(ppUrl);
conn.sendMessage(from, buffergbl, image, {
quoted: mek,
caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
});   
break
      
case "getname":
var ambl = mek.message.extendedTextMessage.contextInfo.participant;
const sname = conn.contacts[ambl] != undefined ? conn.contacts[ambl].sname || conn.contacts[ambl].notify : undefined;
reply(sname);
break;


case 'join':
if (!mek.key.fromMe) return reply('only premium')
try {
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
hen = args[0]
if (!q) return fakestatus('Masukan link group')
var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
if (!codeInvite) return reply ('pastikan link sudah benar!')
var response = await conn.acceptInvite(codeInvite)
reply('SUKSES')
} catch {
reply('LINK ERROR!')
}
break

case 'anime':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
conn.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
}
)
.catch((error) => {
console.log(error); 
}
)
});


case'linkgc':
case'link':
if (!isGroup) return reply(mess.only.group)
const linkgc = await conn.groupInviteCode (from) 
conn.sendMessage(from, `https://chat.whatsapp.com/${linkgc}`, MessageType.text, linkgcgan)
break


case 'emoji':
if (!q) return fakegroup('emojinya?')
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
break

 case 'owner':
let ini_list = []
for (let i of ownerNumber) {
const vname = conn.contacts[i] != undefined ? conn.contacts[i].vname || conn.contacts[i].notify : undefined
ini_list.push({
"displayName": 'bot',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;owner;;;\nFN:${vname ? `${vname}` : `${conn.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await conn.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek })
break


         
         

}
} catch (e) {
     e = String(e) 
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'pink'))
        }
	 //console.log(e)
	}
}


        
