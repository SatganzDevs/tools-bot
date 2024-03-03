require("./config");
require("./lib/JSONstringify.d.js");
const { downloadContentFromMessage, generateWAMessageFromContent, proto, generateWAMessage, areJidsSameUser, fetchLatestBaileysVersion, getContentType } = require("@whiskeysockets/baileys");
import fs from "fs"
const fetch = require("node-fetch");
const moment = require("moment-timezone");
const ytdl = require("ytdl-core");
const util = require("util");
const chalk = require("chalk");
const os = require("os");
const speed = require("performance-now");
const axios = require("axios");
const { Primbon } = require("scrape-primbon");
const primbon = new Primbon();
const { uptotelegra } = require("./lib/upload");
const { exec  } = require("child_process");
const { Sticker, StickerTypes } = require("wa-sticker-formatter");
moment.tz.setDefault('Asia/Jakarta');




//lIB FILE
const diferentme = require("./lib/JSONstringify.js");
const { Succes, getHit, cmdAdd, expiredCmd } = require("./lib/totalcmd");
const { addError, deleteError, checkError, clearAllError } = require("./lib/totalerror")
const { reSize, getAllCmd, getBuffer, getCases, generateProfilePicture, sleep, fetchJson, runtime,  isUrl,  pickRandom, getGroupAdmins, getRandom,  FileSize, toFirstCase, makeId} = require("./lib/functional.js");
const { formatNumber } = require("./lib/myfunc")



//Ucapan Waktu  
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat malam' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat siang'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'  }    






const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const allcommand = db.data.allcommand 








module.exports = satria = async (satria, m, chatUpdate, store) => {
try {
var body = m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "";
var budy = typeof m.text == "string" ? m.text : "";
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix;
global.prefix = prefix;
const isCmd = body.startsWith(prefix);
global.replyType = pickRandom(["web", "troli"]);
global.chatModifying = "edit: key";
const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
var args = body.trim().split(/ +/).slice(1);
args = args.concat(["", "", "", "", "", ""]);
const pushname = m.pushName || "No Name";
const { type  } = m;
const isQuotedMsg = type == "extendedTextMessage";
const botNumber = await satria.decodeJid(satria.user.id);
const isCreator = (isOwner = "6281316701742@s.whatsapp.net" === m.sender ? true : false) ;
const itsMe = m.sender == botNumber ? true : false;
const from = m.chat;
const text = (q = args.join(" ").trim());
const fatkuns = m.quoted || m;
const quoted = fatkuns.mtype == "buttonsMessage" ? fatkuns[Object.keys(fatkuns)[1]] : fatkuns.mtype == "templateMessage" ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : fatkuns.mtype == "product" ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || "";
const qmsg = quoted.msg || quoted;
const isMedia = /image|video|sticker|audio/.test(mime);
const isImage = /image/.test(mime);
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
const senderNumber = m.sender.split("@")[0];
const isPremium = isCreator


// CALENDER
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})



let ppuser
try {
ppuser = await satria.profilePictureUrl(m.sender, "image");
} catch (err) {
ppuser ="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}
const ppg = await getBuffer(ppuser)
const ppgny = await ppg.toString('base64');



const groupMetadata = m.isGroup ? await satria.groupMetadata(m.chat).catch((e) => { }) : "";  
const participants = m.isGroup ? await groupMetadata.participants : "";
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };




// FAKE QUOTED
const fkontak = {key: { participant: m.sender, ...(m.chat ? { remoteJid: from } : {}) }, message: {contactMessage: {displayName: pushname,vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:$pushname},\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: ppuser, bthumbnail: { url: ppuser },sendEphemeral: true}}}; 
const fkontakv2 = {key: {fromMe: false, participant: m.sender,...(m.chat ? { remoteJid: "status@broadcast" } : {}),},message: {contactMessage: {displayName: pushname,vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:$pushname},\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: ppuser, thumbnail: { url: ppuser },sendEphemeral: true}}};
const emot = `${pickRandom(["⎔","✦","⭑","ᯬ","⭔","◉","▢","᭻","»","々","⛥","✗","⛊","⚝","⚚","♪",])}`;



///// FUNCTION \\\\\
async function Loading() {
const satxy = ["《 ███▒▒▒▒▒▒▒▒▒▒▒ 》20%","《 ██████▒▒▒▒▒▒▒▒ 》40%","《 █████████▒▒▒▒▒ 》60%","《 ████████████▒▒ 》80%","《 ██████████████ 》100%","ᴄᴏᴍᴘʟᴇᴛᴇ!",];
let { key } = await satria.sendMessage(m.chat, {text: "Process",});
for (let i = 0; i < satxy.length; i++) {
await satria.sendMessage(m.chat, { text: satxy[i], edit: key });
}
}
function nomorRandom(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
const replyType = pickRandom(["web","troli"]) 
const reply = async (teks) => {
const translate = require('@iamtraction/google-translate');
const res = await translate(teks, { to: "en" })
let th = await fetchJson('https://raw.githubusercontent.com/SatganzDevs/database/main/random.json')
let ty = pickRandom(th)
let ts = await getBuffer(ty)
let tagnya = null;
if (typeof teks === "string") { tagnya = [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + "@s.whatsapp.net");
} else {ntagnya = [m.sender] }
if (replyType === "web") {
return satria.sendMessage(m.chat, { text: res.text, contextInfo: {mentionedJid: tagnya, externalAdReply: {showAdAttribution: true, containsAutoReply: true, renderLargerThumbnail: false, title: `hi ${pushname} (ˆ⌣ˆ)`, previewType: "PHOTO", mediaType: 0, mediaUrl: `https://instagram.com/kurniawansatria.mp4`, sourceUrl:`https://instagram.com/kurniawansatria.mp4`, isSuspiciousLink: true, thumbnail: ts }}},{ quoted: m });
} else if (replyType === "troli") {
let thul = await reSize(await getBuffer(ppuser), 200, 200)
satria.sendTroli(from, res.text, thul, m)
};
}
///// AKHIR FUNCTION \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// SET DATABASE \\\\\
let isNumber = (x) => typeof x === "number" && !isNaN(x);
let limitUser = isPremium? global.limitawal.premium : global.limitawal.free;
let user = db.data.users[m.sender];
if (typeof user !== "object") db.data.users[m.sender] = {};
if (user) {
if (!('name' in user)) user.name = pushname
if (!('id' in user)) user.id = senderNumber
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.hit)) user.hit = 1
if (!isNumber(user.balance)) user.balance = 1000
if (!isNumber(user.limit)) user.limit = 30
if (!isNumber(user.afk)) user.afk = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.pc)) user.pc = 0
if (!('autolevelup' in user)) user.autolevelup = false
if (!isNumber(user.pc)) user.pc = 0
if (!user.grade) user.grade = 'Newbie'
} else {
global.db.data.users[m.sender] = {
name: pushname,
id: senderNumber,
date: calender,
exp: 100,
level: 1,
hit: 0,
balance: 1000,
limit: 30,
afk: -1,
pc: 0,
grade: 'Newbie',
autolevelup: false 
}
}
let chats = db.data.chats[m.chat];
if (typeof chats !== "object") db.data.chats[m.chat] = {};
if (chats) {
if (!("mute" in chats)) chats.mute = false;
if (!("antilink" in chats)) chats.antilink = false;
} else
global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
};
let setting = db.data.settings[botNumber];
if (typeof setting !== "object") db.data.settings[botNumber] = {};
if (setting) {
if (!("anticall" in setting)) setting.anticall = true;
if (!isNumber(setting.status)) setting.status = 0;
if (!("autobio" in setting)) setting.autobio = false;
if (!("antiowntag" in setting)) setting.antiowntag = false;
} else
global.db.data.settings[botNumber] = {
anticall: true,
status: 0,
autobio: false,
antiowntag: false,
};
const react = async (emoti) => {
return satria.sendMessage(from, {react: {text: emoti,key: {remoteJid: m.chat,fromMe: false,key: m.key,id: m.key.id,participant: m.sender}}})
}
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// AUTO VN \\\\\    
if (db.data.audio[budy]) {
satria.sendMessage(from, { audio: { url: db.data.audio[budy].link }, mimetype: 'audio/mpeg', ptt: true, waveform: new Uint8Array(64)},{quoted:{key: { fromMe: true, participant: m.sender, ...(m.chat ? { remoteJid: "120363166125652167@g.us" } : {}), },message: { orderMessage: {
orderId: "594071395007984",
thumbnail: await reSize(await getBuffer(ppuser), 200, 200),
itemCount: 2024,
status: "INQUIRY",
surface: "CATALOG",
message:`[ VOICE NOTE ]`,
orderTitle: "BAYMAX",
sellerJid: "6281268248904@s.whatsapp.net",
token: "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
totalAmount1000: "500000000000000",
totalCurrencyCode: "IDR",
}}}});
}
if (m.message) {
console.log(chalk.black(chalk.bgWhite("〔 MESSAGE 〕"))  + "\n" + chalk.black(chalk.bgGreen("=>")), chalk.black(chalk.bgBlue(budy || m.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(pushname), chalk.yellow(`〔 ${m.sender.replace("@s.whatsapp.net", "")} 〕`) + "\n" + chalk.blueBright("=> In"), chalk.green(await satria.getName(m.chat)), chalk.yellow(`〔 ${m.chat.replace("@g.us", "")} 〕`));
}
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// CMD RESPON \\\\\
if (m.isGroup) {
if (!isBotAdmins) return {}
let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|pntk|shit|dick/i 
let isBadword = badwordRegex.test(budy.toLowerCase())
if (isBadword) {
var hapus = m.key.participant
var bang = m.key.id
reply(pickRandom(['Hey, watch your mouth', 'Never been taught how to speak?', 'Please use polite language.']))
await sleep(300)
satria.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: bang, participant: hapus }})
}
}        
if(type == 'protocolMessage'){
    //Log(m.message.protocolMessage)
    let mess = chatUpdate.messages[0].message.protocolMessage
    let chats = Object.entries(await satria.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])
    if(chats[1] == undefined) return
if(chats[1] !== undefined){
let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
await satria.copyNForward(mess.key.remoteJid, msg).catch(e => console.log(e, msg))
}
}
//ANTI VIEWONCE 
if (type == 'viewOnceMessageV2')  {
var view = m.message.viewOnceMessage.message
let Type = Object.keys(view)[0]
let media = await downloadContentFromMessage(view[Type], Type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(Type)) {
satria.sendFileUrl(m.chat, buffer,view[Type].caption || '', m)
} else if (/image/.test(Type)) {
satria.sendFileUrl(m.chat, buffer, view[Type].caption || '', m)
}
}
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// ANTI BADWORD \\\\\
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: satria.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, satria.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
satria.ev.emit('messages.upsert', msg)
}    
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\      
//Auto Hit 
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`  
if(isCmd){
db.data.users[m.sender].hit += 1
cmdAdd("run", "1d", hitnya)
Succes(toFirstCase(command), dash, allcommand)
}
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
// Auto Dl
if (/^(https?|ftp):\/\/[^\s\/$.?#][^\s]*$/.test(m.text)) {
if (m.text.includes("instagram.com")) {
let { kuy } = await satria.sendMessage(m.chat, {text: "Process"});
try {
const res = await fetchJson(`https://api.satganzdevs.tech/api/snapsave?url=${m.text}`);
for (let i of res.data) {
await satria.sendFileUrl(from, i.url, 'nih', m);
}
} catch (error) {
console.error(error);
await satria.sendMessage(m.chat, { text: "Error", edit: kuy });
}
await satria.sendMessage(m.chat, { text: "Success", edit: kuy });
}
if (m.text.includes("tiktok")) {
let { key } = await satria.sendMessage(m.chat, {text: "Process"});
let r = await fetchJson(`https://api.satganzdevs.tech/api/tiktok?url=${m.text}`)
if (r.result.type === "video") { await satria.sendMessage(m.chat, { video: await getBuffer(r.result.video1), caption: r.result.desc, streamingSidecar: new Uint8Array(300) },{ quoted: m });
} else {
try {
let r = await fetchJson(`https://api.satganzdevs.tech/api/tiktok?url=${m.text}`)
for (let i of r.result.image) {
satria.sendMessage(m.chat, { image: {url: i }, caption: r.result.desc, mimetype: 'image/jpeg' },{ quoted : m });
}
} catch {
await satria.sendMessage(m.chat, { text: "Api Error, Mencoba Metode Lain...", edit: key });
let response = await axios.get(`https://dlpanda.com/id?url=${m.text}&token=G7eRpMaa`);
const $ = cheerio.load(response.data);
let imgSrc = [];
let creator = "Jikarinka";
$("div.col-md-12 > img").each((index, element) => {imgSrc.push($(element).attr("src"))});
let fix = imgSrc.map((e) => {return { img: e, creator: creator }});
for (let i of fix) satria.sendMessage(m.chat, { image: {url: i.img }, caption: r.result.desc, mimetype: 'image/jpeg' },{ quoted : m });  
}
}
await satria.sendMessage(m.chat, { text: "Success", edit: key });
}
}
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// START CASE \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\    
switch (command) {
///// | MAIN | \\\\\
case "runtime":{
let {apa} = await satria.sendMessage(from, {text: "Getting Runtime..."})
await sleep(3000)
await satria.sendMessage(m.chat, { text: runtime(process.uptime()), edit: apa });
}
break;
case "speed":{
const timestampp = speed();
const latensi = speed() - timestampp
let {apa} = await satria.sendMessage(from, {text: "Testing Speed..."})
await sleep(3000)
await satria.sendMessage(m.chat, { text: `Speed: ${latensi.toFixed(4)} Second`, edit: apa });
}
break
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
///// | OWNER | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
case 'setcmd': {
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
delete global.db.data.sticker[hash]
reply(`Done!`)
}
break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
satria.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
if (!isCreator) throw mess.owner
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
reply('Done!')
}
break
case 'addmsg': {
if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case 'getmsg': {
if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
satria.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
case 'listmsg': {
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
reply(teks)
}
break
case 'delmsg': case 'deletemsg': {
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
case "backup":{
if (!isCreator) return reply("owner only!") 
const archiver = require('archiver');
const sourcePath = './'; 
const backupFileName = 'backup.zip';
try {
const output = fs.createWriteStream(backupFileName);
const archive = archiver('zip', { zlib: { level: 9 } });
archive.pipe(output);
archive.on('warning', function(err) {
if (err.code === 'ENOENT') {
console.warn(err);
} else {
throw err;
}
});
archive.glob('**/*', { cwd: sourcePath, ignore: ['node_modules/**/*', 'satzz-session/**', '**/.*', backupFileName]});
await archive.finalize();
await  reply(`Arsip berhasil dibuat: ${backupFileName}`);
await satria.sendMessage(from, {document: {url: './backup.zip'}, mimetype: "application/zip", fileName: "backup.zip"}, {quoted: fkontak}) 
await fs.unlinkSync("./backup.zip") 
} catch (error) {
console.error('Terjadi kesalahan:', error);
throw new Error('Terjadi kesalahan saat membuat arsip.');
}
}
break
case "setthumb":{
if (/image/.test(mime)) {
const client = require("filestack-js").init("A6B7DMp9NQXmniwrvMoEEz");
const policy = 'eyJleHBpcnkiOjE3MzI5ODYwMDAsImNhbGwiOlsicmVtb3ZlIl19'; // Gantilah dengan kebijakan keamanan Anda
const signature = '30f04767f47c592c9ec1ac089707aea13d2ba97be7472915e8c9ca18757187f7'; 
client.remove(db.data.thumb.split(".com/")[1], { policy, signature })
let media = await satria.downloadAndSaveMediaMessage(qmsg, q);
let fileNames = await makeId()
await client.upload(media, {}, { filename: fileNames }, {}).then((data) => { db.data.thumb = data.url });
let teks = `Berhasil menambahkan thumbnail ke dalam database`;
await reply(teks);
await fs.unlinkSync(media);
} else {
return reply("Reply Image!");
}
}
break;
case "addvn":{
if (/audio/.test(mime)) {
const client = require("filestack-js").init("A6B7DMp9NQXmniwrvMoEEz");
if (!q) return reply("Nama audionya apa?");
if (db.data.audio[q]) return reply("Nama tersebut sudah ada di dalam database");
let media = await satria.downloadAndSaveMediaMessage(qmsg, q);
await client.upload(media, {}, { filename: q }, {}).then((data) => {
db.data.audio[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url,
};
});
let teks = `Berhasil menambahkan audio
ke dalam database dengan nama *${q}*`;
await reply(teks);
await fs.unlinkSync(media);
} else return reply("Reply audio");
}
break;
case "delvn":{
try {
if (!db.data.audio[q]) return reply("Nama tersebut tidak ada di dalam data base");
const client = require("filestack-js").init("A6B7DMp9NQXmniwrvMoEEz");
const policy = 'eyJleHBpcnkiOjE3MzI5ODYwMDAsImNhbGwiOlsicmVtb3ZlIl19'; // Gantilah dengan kebijakan keamanan Anda
const signature = '30f04767f47c592c9ec1ac089707aea13d2ba97be7472915e8c9ca18757187f7'; 
client.remove(db.data.audio[q].link.split(".com/")[1], { policy, signature })
delete db.data.audio[q];
reply(`Sukses delete vn ${q}`);
} catch (err) {
console.log(err);
reply("eror kak");
}
}
break;
case "listvn": {
let vnListMessage = `*── 「 VOICE NOTE LIST 」 ──*\nTotal: ${Object.keys(db.data.audio).length
}\n\n`;
for (let key in db.data.audio) {
if (db.data.audio.hasOwnProperty(key)) {
let voiceNote = db.data.audio[key];
vnListMessage += `${emot} Name: ${voiceNote.name}\n${emot} ID: ${voiceNote.id}\n${emot} Size: ${voiceNote.size}\n${emot} Link: ${voiceNote.link}\n\n`;
}
}
reply(vnListMessage);
}
break;
case "kirim":{
if (!q) return (`mana urlnya? contoh: kirim https//xnxxxx.mp4|lol`)
reply('bentar cuy')
let urls
try {
if (q.includes("|")) urls = q.split("|")[0]
} catch { urls = q }
satria.sendMessage(from, {video: {url: urls }, caption: q.split('|')[1] || "" })
}
break
case "cleartmp":{
let path = require("path");
let directoryPath = path.join();
let {apa} = await satria.sendMessage(from, {text: "Wait a second..."})
fs.readdir(directoryPath, async function (err, files) {
if (err) {
console.log("Unable to scan directory: " + err);
return satria.sendMessage(m.chat, { text: "Unable to scan directory: " + err, edit: apa }) }
let filteredArray = await files.filter((item) => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("webp") || item.endsWith("webm") || item.endsWith("jfif"));
console.log(filteredArray.length);
if (filteredArray.length === 0) return satria.sendMessage(m.chat, { text: `No trash files detected.`, edit: apa });
let text = `Detected ${filteredArray.length} trash files\n\n`;
if (filteredArray.length === 0) return satria.sendMessage(m.chat, { text: text, edit: apa });
filteredArray.map(function (e, i) { text += i + 1 + `. ${e}\n` });
satria.sendMessage(m.chat, { text: text, edit: apa });
await sleep(2000);
satria.sendMessage(m.chat, { text: text, edit: apa });
await filteredArray.forEach(function (file) { fs.unlinkSync(file) });
await sleep(2000);
satria.sendMessage(m.chat, { text: text, edit: apa });
});
}
break;
case "setppbot":{
if (!isCreator) return reply(mess.ownerOnly);
let {apa} = await satria.sendMessage(from, {text: "Wait a second..."})
let medis = await satria.downloadAndSaveMediaMessage(qmsg, "ppg");
var { img } = await generateProfilePicture(medis);
await satria.query({tag: "iq", attrs: { to: botNumber, type: "set", xmlns: "w:profile:picture" }, content: [{tag: "picture", attrs: { type: "image" }, content: img }]});
fs.unlinkSync(medis);
satria.sendMessage(m.chat, { text: "sucess update profile picture", edit: apa });
}
break;
case "block":{
if (!isCreator) return reply(mess.ownerOnly);
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
await satria.updateBlockStatus(users, "block").then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)));
}
break;
case "unblock":{
if (!isCreator) return reply(mess.ownerOnly);
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
await satria.updateBlockStatus(users, "unblock").then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)));
}
break;
case 'adderror':{
if (!q) return reply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
if (!m.key.fromMe && !isOwner) return reply ("Fitur Khusus Pemilik Bot")
let oke = q.split("|")[0]
let oka = q.split("|")[1]
addError(oke, oka, listerror)
await reply(`Sukses Menambahkan ${q} ke daftar error`)
}
break
case 'clearallerror':{
if (!isOwner) return reply ("Fitur Khusus Pemilik Bot")
reply("SukseS clear all error")
clearAllError(listerror)
}
break 	
case 'delerror':{
if (!itsMe && !isOwner) return reply ("Fitur Khusus Pemilik Bot")
listerror.splice(q, 1)
fs.writeFileSync('./src/listerror.json', JSON.stringify(listerror))
reply( `Sukses menghapus ${q} di daftar error`)
}
break
case 'listerror': {
let errornye = `*List Error*\nJumlah : ${db.data.listerror.length}\n\n`
for (let i of db.data.listerror) {          
errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
} 
errornye += `© Baymax`
reply(errornye)}
break
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
///// | RANDOM | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
case "tts":
const gtts = require( 'node-gtts')
function tts(text, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }})
}	
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = 'id'
text = args.join(' ')
}
if (!text && m.quoted?.text) text = m.quoted.text
let ras
try { ras = await tts(text, lang) }
catch (e) {
m.reply(e + '')
text = args.join(' ')
if (!text) reply( `Use example ${prefix}${command} en hello world`)
ras = await tts(text, defaultLang)
} finally {
if (ras) satria.sendMessage(from, {audio: ras, ptt:true, mimetype: "audio/mpeg", waveform: new Uint8Array(64)},{quoted:m})
}	
break
case 'me': {
let ppimg = await satria.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
try{
let sol = await satria.fetchStatus(m.sender)
var stst = sol.status == undefined ? '' : sol.status 
} catch(err){
var stst = ""	  
}
let teks = `*]────「 Profile User 」────[*

🆔 Nama : ${pushname} 
🤖 Status Bot : ${isOwner ? 'Owner':'User'}
🕔 Expired : Permanent
📉 Limit : ${isPremium ? 'Unlimited' : `${db.data.users[m.sender].limit}`}
📲 No : wa.me/${m.sender.split("@")[0]}
🧸 Bio : ${stst}`	
const { welcomeImage } = require('ultrax');
const title = "PROFILE";
const subtitle = pushname;
const footer = `Profile`;
const color = '#ffffff';
const options = { font: "sans-serif", attachmentName: `Profile-image`, title_fontSize: 80, subtitle_fontSize: 50, footer_fontSize: 30
};
let imeg = await welcomeImage("https://i.ibb.co/d0SVtM5/IMG-20240111-WA0002.png", ppimg, title, subtitle, footer, color, options)
await satria.sendMessage(from, {image: imeg.attachment, caption: teks},{quoted:m})
} 
break
case "tr":{
if (!quoted) return reply('balas text yang ingin di translate! contoh : .tr id')
if (!quoted.text) return reply('pesan yang kamu balas tidak mengandung teks.')
const translate = require('@iamtraction/google-translate');
translate(m.quoted.text, { to: q }).then(res => {reply(res.text) }).catch(err => {
console.error(err);
reply(`The language *${q}* is not supported, type .tr -help to show support language.`)});
}
break
case 'earrape': case 'bass': case 'blown': case 'deep':  case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
await Loading()
let media = await satria.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
satria.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
case "removebg":{
if (!isImage) return
let media = await satria.downloadMediaMessage(qmsg);
const formData = new FormData();
formData.append('size', 'auto');
formData.append('image_file', fs.createReadStream(media), path.basename(media));
axios({method: 'post', url: 'https://api.remove.bg/v1.0/removebg', data: formData, responseType: 'arraybuffer', headers: {...formData.getHeaders(),'X-Api-Key': 'FPLFj3QobyWnWAzvQufhdrpw' }, encoding: null}).then(async (response) => {
if(response.status != 200) return console.error('Error:', response.status, response.statusText);
satria.sendMessage(from, {image: await getBuffer(response.data), caption: "nih"}) 
}).catch((error) => { return console.error('Request failed:', error) });
}
break
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
///// | INFO | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\
///// | \\\\\   
case "owner":{
await react("🫡");
const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:SatganzDevs\nFN:SatganzDevs\nORG:CLAY COMMUNITY;\nTEL;TYPE=CELL;TYPE=VOICE;waid=6281316701742:+62 813 1670 1742\nEMAIL:satganzdevs@gmail.com\nINSTAGRAM:instagram.com/kurniawansatria.mp4\nADR;TYPE=WORK,PREF:;;Jalan Raya No. 123;Jakarta;DKI Jakarta;12345;Indonesia\nEND:VCARD`;
const sentMsg = await satria.sendMessage(
from, { contacts: { displayName: "SatganzDevs", contacts: [{ vcard }] } },{ quoted: m });
await satria.sendMessage(from, { audio: {url: "https://cdn.filestackcontent.com/ZVmOui4qSgqxKrrcXZG2",},mimetype: "audio/mpeg",ptt: true,waveform: new Uint8Array(64),},{ quoted: sentMsg });
}
break;
case "menu":{
let yes = "*「 _Error_ 」* ❌"
let no =""
const feat = (q) => {
let status = false
Object.keys(db.data.listerror).forEach((i) => {
if (db.data.listerror[i].cmd === q) {
status = true
}})
return status
}
const { version } = await fetchLatestBaileysVersion();
let anu = `Hi @${m.sender.split("@")[0]} 👋🏻
Baymax - Multi Device is here to provide assistance like an automated system. I am an AI (Artificial Intelligence) designed to provide support and information in various matters through various platforms, including WhatsApp.

┌──⭓ *ʙ ᴏ ᴛ - ɪ ɴ ғ ᴏ* 
│ ⎚ *ʟɪʙʀᴀʀʏ* : @whiskeysockets/baileys
│ ⎚ *ᴠᴇʀsɪᴏɴ* : v${version.join(".")}
│ ⎚ *ғᴇᴀᴛᴜʀᴇ* : ${await getAllCmd().length} Feature Total
│ ⎚ *ʀᴜɴɴɪɴɢ ᴏɴ* : 🐦 Ptrodactyl Panel
│ ⎚ *ʀᴜɴᴛɪᴍᴇ* : ⏳ ${runtime(process.uptime())}
│ ⎚ *sᴇʀᴠᴇʀ ᴅᴀᴛᴇ* : ${moment.tz("Asia/Jakarta").format("DD/MM/YY")}
│ ⎚ *sᴇʀᴠᴇʀ ᴛɪᴍᴇ* : ${moment.tz("Asia/Jakarta").format("HH:mm:ss")}
└───────⭓



╭─▸ 〔 *ᴍᴀɪɴ* 〕
│
│ ${emot} .owner
│ ${emot} .runtime
│ ${emot} .ping
│ ${emot} .speed
│
╰────────────˧

╭─▸ 〔 *ᴏᴡɴᴇʀ* 〕
│
│ ${emot} .addvn ${feat("addvn")? yes :no}
│ ${emot} .delvn ${feat("delvn")? yes :no}
│ ${emot} .listvn ${feat("listvn")? yes :no}
│ ${emot} .blockcmd ${feat("blockcmd")? yes :no}
│ ${emot} .unblockcmd ${feat("unblockcmd")? yes :no}
│ ${emot} .setcmd ${feat("setcmd")? yes :no} 
│ ${emot} .delcmd ${feat("delcmd")? yes :no}
│ ${emot} .adderror
│ ${emot} .delerror
│ ${emot} .listerror
│ ${emot} .clearallerror
│ ${emot} .cleartmp
│ ${emot} .ban
│ ${emot} .unban
│ ${emot} .bc
│ ${emot} .bcaudio
│ ${emot} .public
│ ${emot} .self
│ ${emot} .block
│ ${emot} .unblock
│ ${emot} >
│ ${emot} =>
│ ${emot} $
│
╰────────────˧

╭─▸ 〔 *ɢʀᴏᴜᴘ* 〕
│
│ ${emot} .add 
│ ${emot} .kick 
│ ${emot} .promote 
│ ${emot} .demote 
│ ${emot} .setppgc 
│ ${emot} .setsubject 
│ ${emot} .setdesc 
│ ${emot} .tagall 
│ ${emot} .hidetag 
│ ${emot} .group (option)
│
╰────────────˧

╭─▸ 〔 *ʀᴀɴᴅᴏᴍ ɪᴍᴀɢᴇs* 〕
│
│ ${emot} .akira 
│ ${emot} .akiyama 
│ ${emot} .anna 
│ ${emot} .asuna 
│ ${emot} .ayuzawa 
│ ${emot} .boruto 
│ ${emot} .chitanda 
│ ${emot} .chitoge 
│ ${emot} .deidara 
│ ${emot} .doraemon 
│ ${emot} .elaina 
│ ${emot} .emilia 
│ ${emot} .asuna 
│ ${emot} .erza 
│ ${emot} .gremory 
│ ${emot} .hestia 
│ ${emot} .hinata 
│ ${emot} .inori 
│ ${emot} .isuzu 
│ ${emot} .itachi 
│ ${emot} .itori 
│ ${emot} .kaga 
│ ${emot} .kagura 
│ ${emot} .kakasih 
│ ${emot} .kaori 
│ ${emot} .kosaki 
│ ${emot} .kotori 
│ ${emot} .kuriyama 
│ ${emot} .kuroha 
│ ${emot} .kurumi 
│ ${emot} .loli 
│ ${emot} .madara 
│ ${emot} .mikasa 
│ ${emot} .miku 
│ ${emot} .minato 
│ ${emot} .naruto 
│ ${emot} .natsukawa 
│ ${emot} .neko2 
│ ${emot} .nekohime 
│ ${emot} .nezuko 
│ ${emot} .nishimiya 
│ ${emot} .onepiece 
│ ${emot} .pokemon 
│ ${emot} .rem 
│ ${emot} .rize 
│ ${emot} .sagiri 
│ ${emot} .sakura 
│ ${emot} .sasuke 
│ ${emot} .shina 
│ ${emot} .shinka 
│ ${emot} .shizuka 
│ ${emot} .shota 
│ ${emot} .tomori 
│ ${emot} .toukachan 
│ ${emot} .tsunade 
│ ${emot} .yatogami 
│ ${emot} .yuki 
│
╰────────────˧

╭─▸ 〔 *ʀᴀɴᴅᴏᴍ sᴛɪᴄᴋᴇʀ* 〕
│
│ ${emot} .paimon ${feat("paimon")? yes :no}
│ ${emot} .patrick ${feat("patrick")? yes :no}
│ ${emot} .doge ${feat("doge")? yes :no}
│ ${emot} .amongus ${feat("amongus")? yes :no}
│ ${emot} .mukalu ${feat("mukalu")? yes :no}
│
╰────────────˧

╭─▸ 〔 *ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ* 〕
│
│ ${emot} .quotes ${feat("quotes")? yes :no}
│ ${emot} .couple ${feat("couple")? yes :no}
│
╰────────────˧

╭─▸ 〔 *ᴛᴏᴏʟs ᴍᴇɴᴜ* 〕
│
│ ${emot} .sticker 
│ ${emot} .smeme ${feat("smeme")? yes :no}
│ ${emot} .qc ${feat("qc")? yes :no}
│ ${emot} .toptv ${feat("toptv")? yes :no}
│ ${emot} .toaud ${feat("toaud")? yes :no}
│ ${emot} .tomp3 ${feat("tomp3")? yes :no}
│ ${emot} .togif ${feat("togif")? yes :no}
│ ${emot} .tovideo ${feat("tovideo")? yes :no}
│ ${emot} .remini ${feat("remini")? yes :no}
│ ${emot} .toanime ${feat("toanime")? yes :no}
│ ${emot} .removebg ${feat("removebg")? yes :no}
│ ${emot} .bitly ${feat("bitly")? yes :no}
│ ${emot} .tinyurl ${feat("tinyurl")? yes :no}
│ ${emot} .bass ${feat("bass")? yes :no}
│ ${emot} .blown ${feat("blown")? yes :no}
│ ${emot} .deep ${feat("deep")? yes :no}
│ ${emot} .earrape ${feat("earrape")? yes :no}
│ ${emot} .fast ${feat("fast")? yes :no}
│ ${emot} .fat ${feat("fat")? yes :no}
│ ${emot} .nightcore ${feat("nightcore")? yes :no}
│ ${emot} .reverse ${feat("reverse")? yes :no}
│ ${emot} .robot ${feat("robot")? yes :no}
│ ${emot} .slow ${feat("slow")? yes :no}
│ ${emot} .smooth ${feat("smooth")? yes :no}
│ ${emot} .tupai ${feat("tupai")? yes :no}
│
╰────────────˧

╭─▸ 〔 *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ* 〕
│
│ ${emot} .tiktok ${feat("tiktok")? yes :no}
│ ${emot} .tiktokmp3 ${feat("tiktokmp3")? yes :no}
│ ${emot} .ig ${feat("ig")? yes :no}
│ ${emot} .scdl ${feat("scdl")? yes :no}
│ ${emot} .ytmp4 ${feat("ytmp4")? yes :no}
│ ${emot} .ytmp3 ${feat("ytmp3")? yes :no}
│
╰────────────˧

╭─▸ 〔 *ɪɴᴛᴇʀɴᴇᴛ ᴍᴇɴᴜ* 〕
│
│ ${emot} .lirik ${feat("lirik")? yes :no}
│ ${emot} .pinterest ${feat("pinterest")? yes :no}
│ ${emot} .yts ${feat("yts")? yes :no}
│ ${emot} .play ${feat("play")? yes :no}
│
╰────────────˧
`;
await satria.sendMessage(from, {text: anu, contextInfo: { 
mentionedJid: [m.sender],
forwardingScore: 9999,
isForwarded: false,
showAdAttribution: true,
title: "BAYMAX",
mediaType: "PHOTO",
mediaUrl: `https://instagram.com/kurniawansatria.mp4`,
previewType: "PHOTO",
thumbnail: ppuser,
sourceUrl: "https://instagram.com/kurniawansatria.mp4",
detectLinks: false}},{quoted:fkontak})
await satria.sendMessage(from, {audio: await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${await nomorRandom(1, 161)}.mp3`), ptt:true, mimetype: "audio/mpeg", waveform: new Uint8Array(64)},{quoted:m})
}
break;
//━━━━━━━━━━━━━━━[ DOWNLOADER MENU ]━━━━━━━━━━━━━━━━━//
case "ytmp3":{
if (!args[0]) return m.reply(`Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27`);
reply("please wait");
const url = args[0];
await satria.sendMessage(from, { audio: {url: `https://api.satganzdevs.tech/api/yta?url=${url}` }, mimetype: "audio/mpeg", ptt: false, mtype: "audioMessage"},{ quoted: m })
}
break;
case "ytmp4":{
if (!text) return m.reply(`Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27`);
reply("please wait");
const url = args[0];
satria.sendMessage(m.chat, { video: {url: `https://api.satganzdevs.tech/api/ytv?url=${url}` } , mimetype: "video/mp4" },{ quoted: m });
}
break;
case "tiktok":{
let { key } = await satria.sendMessage(m.chat, {text: "Process"});
let r = await fetchJson(`https://api.satganzdevs.tech/api/tiktok?url=${args[0]}`)
if (r.result.type === "video") { await satria.sendMessage(m.chat, { video: await getBuffer(r.result.video1), caption: r.result.desc, streamingSidecar: new Uint8Array(300) },{ quoted: m });
} else {
try {
let r = await fetchJson(`https://api.satganzdevs.tech/api/tiktok?url=${args[0]}`)
for (let i of r.result.image) {
satria.sendMessage(m.chat, { image: {url: i }, caption: r.result.desc, mimetype: 'image/jpeg' },{ quoted : m });
}
} catch {
await satria.sendMessage(m.chat, { text: "Api Error, Mencoba Metode Lain...", edit: key });
let response = await axios.get(`https://dlpanda.com/id?url=${m.text}&token=G7eRpMaa`);
const $ = cheerio.load(response.data);
let imgSrc = [];
let creator = "Jikarinka";
$("div.col-md-12 > img").each((index, element) => {imgSrc.push($(element).attr("src"))});
let fix = imgSrc.map((e) => {return { img: e, creator: creator }});
for (let i of fix) satria.sendMessage(m.chat, { image: {url: i.img }, caption: r.result.desc, mimetype: 'image/jpeg' },{ quoted : m });  
}
}
await satria.sendMessage(m.chat, { text: "Success", edit: key });
}
break;
case "ig": case "igdl":{
if (!args[0]) return reply("masukan url instagram, contoh : .ig https://instagram.com/kurniawansatria.mp4")
let { kuy } = await satria.sendMessage(m.chat, {text: "Process"});
try {
const res = await fetchJson(`https://api.satganzdevs.tech/api/snapsave?url=${args[0]}`);
for (let i of res.data) {
await satria.sendFileUrl(from, i.url, 'nih', m);
}
} catch (error) {
console.error(error);
await satria.sendMessage(m.chat, { text: "Error", edit: kuy });
}
await satria.sendMessage(m.chat, { text: "Success", edit: kuy });
}
break;
case "tiktokmp3":{
reply("wait kak")
try {
const tik = await fetchJson('https://api.satganzdevs.tech/api/tiktok?url=' + args[0]) 
satria.sendMessage(m.chat, { audio: await getBuffer(tik.result.music), mimetype: "audio/mpeg"},{ quoted: m });
} catch (error) {
console.log(error);
reply("error");
}
}
break;
case "scdl": case "souncloud": case "soundclouddl":{
reply("wait kak")
let { soundcloud } = require("./lib/skrep") 
let r = await soundcloud(q)
satria.sendMessage(from, {audio: { url: r.link }, mimetype: "audio/mpeg", ptt: false, mtype: 'audioMessage'},{ quoted: m });
}
break;
//━━━━━━━━━━━━━━━[ CONVERTER MENU ]━━━━━━━━━━━━━━━━━//
case "toimg":
case "toimage":{
if (!/webp/.test(mime)) return reply(`Reply sticker dengan caption *${prefix + command}*`);
try {
let media = await satria.downloadAndSaveMediaMessage(qmsg);
let ran = await getRandom(".png");
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media);
if (err) throw err;
let buffer = fs.readFileSync(ran);
satria.sendMessage(m.chat, { image: buffer }, { quoted: m });
});
} catch {
let media = await satria.downloadAndSaveMediaMessage(qmsg);
let ran = await getRandom(".mp4");
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media);
if (err) throw err;
let buffer = fs.readFileSync(ran);
satria.sendMessage(m.chat, { video: buffer }, { quoted: m });
});
}
}
break;
case "toaudio":{
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin DijaSatrian Audio Dengan Caption ${prefix + command
}`
);
await Loading()
let media = await satria.downloadMediaMessage(qmsg);
let { toAudio } = require("./lib/converter");
let audio = await toAudio(media, "mp4");
satria.sendMessage(m.chat,
{ audio: audio, mimetype: "audio/mpeg" },{ quoted: m });
}
break;
case "tomp3":{
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin DijaSatrian MP3 Dengan Caption ${prefix + command}`);
await Loading()
let media = await satria.downloadMediaMessage(qmsg);
let { toAudio } = require("./lib/converter");
let audio = await toAudio(media, "mp4");
satria.sendMessage(m.chat, { document: audio, mimetype: "audio/mpeg", fileName: `Convert By Satzz.mp3` },{ quoted: m });
}
break;
case "tovn":{
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio Yang Ingin DijaSatrian VN Dengan Caption ${prefix + command}`);
await Loading()
let media = await satria.downloadMediaMessage(qmsg);
let { toPTT } = require("./lib/converter");
let audio = await toPTT(media, "mp4");
satria.sendMessage(m.chat, {audio: audio, ptt: true, waveform: new Uint8Array(64), mimetype: "audio/mpeg", },{ quoted: m }) }
break;
case "togif":{
if (!/webp/.test(mime)) return reply(`Reply stiker dengan caption *${prefix + command}*`);
await Loading()
let { webp2mp4File } = require("./lib/uploader");
let media = await satria.downloadAndSaveMediaMessage(qmsg);
let webpToMp4 = await webp2mp4File(media);
await satria.sendMessage(m.chat, { video: {url: webpToMp4.result, caption: "Convert Webp To Video",streamingSidecar: new Uint8Array(300),},gifPlayback: true },{ quoted: m });
await fs.unlinkSync(media) }
break;
case "toptv":{
await Loading();
if (!m.quoted) return reply(`Balas Video Dengan Caption ${prefix + command}`);
if (/video/.test(mime)) {
var ppt = m.quoted;
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({ ptvMessage: ppt }), { userJid: from, quoted: m });
satria.relayMessage(from, ptv.message, { messageId: ptv.key.id }) }}
break;
case "sticker": case "stiker": case "s":{
if (/image/.test(mime)) {
let media = await satria.downloadMediaMessage(qmsg);
const sticker = new Sticker(media, {pack: global.packname,author: global.author,type: StickerTypes.FULL,categories: ["🤩", "🎉"],id: "12345",quality: 50,background: "#000000",});
let memek = await sticker.toFile("sticker.webp");
satria.sendMessage(m.chat, { sticker: fs.readFileSync(memek), isAvatar:true },{ quoted: m });
await fs.unlinkSync(memek);
} else if (/video/.test(mime)) {
let media = await satria.downloadMediaMessage(qmsg);
let encmedia = await satria.sendVideoAsSticker(m.chat, media, m, {pack: global.packname, author: global.author, isAvatar:true});
await fs.unlinkSync(encmedia);
} else reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`);
}
break;
case "smeme":{
if (!args[0]) return reply(`Balas Image Dengan Caption ${prefix + command}`);
if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`);
if (/image/.test(mime)) {
mee = await satria.downloadAndSaveMediaMessage(quoted);
mem = await uptotelegra(mee);
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${args[0]}.png?background=${mem}`);
satria.sendImageAsSticker(m.chat, kaytid, m, {packname: global.packname,author: global.author,isAvatar:true});
} else return reply("hanya bisa membuat smeme dari foto");
}
break;
case "qc":{
let teks = m.quoted && m.quoted.q ? m.quoted.text : args[0] ? args[0] : "";
if (!teks) return reply(`Cara Penggunaan ${prefix}qc teks`);
await Loading()
const text = `${teks}`;
const username = await satria.getName(m.quoted ? m.quoted.sender : m.sender);
const avatar = await satria.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, "image").catch(() => `https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`);
const json = { type: "quote", format: "png", backgroundColor: "#FFFFFF", width: 700, height: 580, scale: 2, messages: [ { entities: [], avatar: true, from: {id: 1, name: username, photo: {url: avatar}}, text: text, replyMessage: {} }]};
axios.post("https://bot.lyo.su/quote/generate", json, { headers: { "Content-Type": "application/json" } }).then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await satria.sendImageAsSticker(m.chat, buffer, m, {packname: global.packname,author: global.author,categories: ["ðŸ¤©", "ðŸŽ‰"],id: "12345",quality: 100,background: "transparent",});
await fs.unlinkSync(encmedia);
});
}
break;
//━━━━━━━━━━━━━━━[ RANDOM MENU ]━━━━━━━━━━━━━━━━━//
case "akira": case "akiyama": case "anna": case "asuna": case "ayuzawa": case "boruto": case "chitanda": case "chitoge": case "deidara": case "doraemon": case "elaina": case "emilia": case "asuna": case "erza": case "gremory": case "hestia": case "hinata": case "inori": case "isuzu": case "itachi": case "itori": case "kaga": case "kagura": case "kakasih": case "kaori": case "kosaki": case "kotori": case "kuriyama": case "kuroha": case "kurumi": case "loli": case "madara": case "mikasa": case "miku": case "minato": case "naruto": case "natsukawa": case "neko2": case "nekohime": case "nezuko": case "nishimiya": case "onepiece": case "pokemon": case "rem": case "rize": case "sagiri": case "sakura": case "sasuke": case "shina": case "shinka": case "shizuka": case "shota": case "tomori": case "toukachan": case "tsunade": case "yatogami": case "yuki":{
await Loading()
let res = await fetchJson(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/${command}.json`);
let cita = res[Math.floor(Math.random() * res.length)];
await satria.sendMessage(from, { image: { url: cita }, caption: "nih" },{ quoted: fkontak }) }
break;
case "doge":
case "patrick":
case "amongus":
case "mukalu":
case "paimon":{
await Loading()
satria.sendImageAsSticker(from,`https://api.satganzdevs.tech/api/stiker/${command}`,m,{ packname: global.packname, author: global.author });
}
break;
//━━━━━━━━━━━━━━━[ TOOLS MENU ]━━━━━━━━━━━━━━━━━//
case "ytsearch":
case "yts":{
if (!text) return reply(`Example : ${prefix + command} story wa anime`);
await Loading()
let yts = require("yt-search");
let search = await yts(text);
let teks = "YouTube Search\n\n Result From " + text + "\n\n";
let no = 1;
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${formatNumber(i.views)}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`;
}
satria.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks },{ quoted: m });
}
break;
case "play":{
if (!args[0]) return reply(`Example : ${prefix + command} story wa anime`);
await Loading()
const yts = require("yt-search");
let search = await yts(args[0]);
let anu = search.videos[0];
try {
let bro = await ytdl.getInfo(anu.url);
let mp3File = getRandom(".mp3");
ytdl(anu.url, { filter: "audioonly" }).pipe(fs.createWriteStream(mp3File)).on("finish", async () => {
await satria.sendMessage(m.chat, {image: await getBuffer(anu.thumbnail), fileLength: 8888888888, caption: `〔 *ＹＯＵＴＵＢＥ* 〕\n⭔ *ᴛɪᴛʟᴇ* : ${anu.title}\n⭔ *ᴅᴇsᴄ* : ${anu.description}\n⭔ *ᴅᴜʀᴀᴛɪᴏɴ* : ${anu.timestamp}\n⭔ *ᴠɪᴇᴡs* : ${formatNumber(anu.views)}\n⭔ *ᴜᴘʟᴏᴀᴅ ᴀᴛ* : ${anu.ago}\n⭔ *ᴀᴜᴛʜᴏʀ* : ${anu.author.name}`,
},{ quoted: m });
await satria.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: "audio/mpeg", ptt: false, seconds: anu.timestamp, mtype: 'audioMessage'},{ quoted: m }).then(() => {
fs.unlinkSync(mp3File)    
})
});
} catch (err) {
console.log(err);
}
}
break;
case "tohd":
case "remini": {;
if (/image/.test(mime)) {
let {kurir} = await satria.sendMessage(m.chat, {text: "Wait a second..."})
const { remini } = diferentme;
let media = await satria.downloadMediaMessage(qmsg);
let resultan = await remini(media, "enhance");
await satria.sendMessage(m.chat, { image: resultan, caption: "ɴɪʜ ᴋᴀᴋ ʜᴀꜱɪʟɴʏᴀ (*^ ‿ <*)♡", mimetype: "image/jpeg" },{ quoted: m });
} else return satria.sendMessage(m.chat, { text: 'Bot Hanya Bisa Enhance Image/gambar.', edit: kurir });
satria.sendMessage(m.chat, { text: 'success', edit: kurir });
}
break;
case "tinyurl":{
if (args.length < 1) return reply(`Masukkan link`);
if (!/^(https?|ftp):\/\/[^\s\/$.?#][^\s]*$/.test(q)) return reply(`Masukkan link`);
let {kurir} = await satria.sendMessage(m.chat, {text: "Wait a second..."})
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono).then((response) => response.text()).then((text) => resolve(text)).catch((err) => {
console.log(color(err, "red"));
reject(err);
});
});
};
let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`);
let shorti = `*Result : ${okok}*`;
await satria.sendMessage(m.chat, { text: shorti, edit: kurir });
}
break;
case "bitly":{
const { BitlyClient } = require("bitly");
const bitly = new BitlyClient("7d737131e678fc366699edead8bca146e69f6c78",{});
if (!q) return reply("Masukan link");
if (!isUrl) return reply("Masukan link dengan benar");
let {kurir} = await satria.sendMessage(m.chat, {text: "Wait a second..."})
try {
let result = await bitly.shorten(q);
await satria.sendMessage(m.chat, { text: `Link: ${result.link}\nCreated at: ${result.created_at}`, edit: kurir });
} catch (e) {
await satria.sendMessage(m.chat, { text: `invalid Url`, edit: kurir });
}
}
break;
case "quotes":{
if (!args[0]) return satria.sendPoll(from, "Select One", [".quotes senja",".quotes islami",".quotes anime",".quotes bacot",".quotes dilan",], m);
if (args[0].toLowerCase() === "senja") {
let med = await fetchJson(`https://api.satganzdevs.tech/api/quotes/senja`);
reply(med.quote)};
if (args[0].toLowerCase() === "islami") {
let med = await fetchJson(`https://api.satganzdevs.tech/api/quotes/islami`);
reply(med.quote)};
if (args[0].toLowerCase() === "bacot") {
let med = await fetchJson(`https://api.satganzdevs.tech/api/quotes/${args[0]}`);
reply(med.quote)}
if (args[0].toLowerCase() === "dilan") {
let med = await fetchJson(`https://api.satganzdevs.tech/api/quotes/${args[0]}`);
reply(med.quote)}
if (args[0].toLowerCase() === "anime") {
let med = await fetchJson(`https://api.satganzdevs.tech/api/quotes/anime`);
satria.sendMessage(from, { image: await getBuffer(med.result.gambar), caption: `${med.result.quotes}\n - ${med.result.karakter}` },{ quoted: m })}
}
break;
case "couple":{
await Loading()
let anu = await fetchJson("https://raw.githubusercontent.com/SatganzDevs/database/main/kopel.json");
let random = pickRandom(anu)
await satria.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` },{ quoted: fkontakv2 });
await satria.sendMessage(m.chat,{ image: { url: random.female }, caption: `Couple Female` },{ quoted: fkontakv2 });
}
break;
case "lyrics":
case "lirik":{
if (!q) return reply("please input the query!");
await Loading()
let res = await fetchJson(`https://api.satganzdevs.tech/api/lirik?judul=${q}&apikey`);
reply(res.lyrics);
}
break;
case "pinterest": {
if (!q) return reply("Masukkan query pencarian, contoh: .pinterest freyajkt48");
if (q.split("|")[1] === "asSticker") {
await fetchJson('https://api.satganzdevs.tech/api/pinterest?query=' + q.split("|")[0]).then(async(res) => {
for ( let ai of res) {
let kaytid = await getBuffer(ai) 
satria.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author, isAvatar: true });
}
});
} else {
await fetchJson('https://api.satganzdevs.tech/api/pinterest?query=' + q.split("|")[0]).then(async(res) => {
for (let i of res) {
satria.sendMessage(m.chat, { image: { url: i } });
}
});
}
}
break;
case "toanime": case "jadianime": {
let FormData = require("form-data");
let fetch = require("node-fetch");
let cheerio = require("cheerio");
let {gmn} = await satria.sendMessage(from, {text: "Wait a second..."},{quoted:m})
if (/image/.test(mime)) {
try {
var media = await satria.downloadAndSaveMediaMessage(quoted, `./src/` + new Date() * 1).catch((err) => reply(`Gambar Tidak Di Temukan!\nMohon Kirim/reply gambar dengan caption ${prefix + command}`));
const listmodel = ["anime", "comic", "manhwa_female", "stipple-cg", "manga", "princess", "angel"];
for (let model of listmodel) {
const url = `https://api.itsrose.life/image/differentMe?style=${model}&json=true&apikey=Rs-XINN_CLAY`;
const formData = new FormData();
formData.append("file", fs.createReadStream(media), "image.jpg");
const response = await await axios.post(url, formData, {headers: {...formData.getHeaders(), accept: "application/json"}});
const buffer = Buffer.from(response.data.result.base64Image, "base64");
satria.sendMessage(m.chat, { image: buffer, caption: `Style: *${model}*` },{ quoted: m });
}
} catch (err) {
console.log(err);
satria.sendMessage(m.chat, { text: 'Axios nya eror coba gambar lain', edit: gmn });
}
} else reply(`Kirim/reply gambar dengan caption ${prefix + command}`);
}
break;
//━━━━━━━━━━━━━━━[ GROUP MENU ]━━━━━━━━━━━━━━━━━//
case 'del':
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
if(!users) return reply("Reply pesan")
if (users == botNumber) {
satria.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: users} })
} else if(mentionByReply !== botNumber && isBotAdmins){
satria.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: users } })
} 
break
case "kick":{
if (!m.isGroup) return reply(mess.groupOnly);
if (!isBotAdmins) return reply(mess.botAdminRequired);
if (!isAdmins) return reply(mess.adminOnly);
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
await satria.groupParticipantsUpdate(m.chat, users, "remove").then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)));
}
break;
case "add":{
if (!m.isGroup) return reply(mess.groupOnly);
if (!isBotAdmins) return reply(mess.botAdminRequired);
if (!isAdmins) return reply(mess.adminOnly);
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
await satria.groupParticipantsUpdate(m.chat, users, "add").then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)));
}
break;
case "promote":{
if (!m.isGroup) return reply(mess.groupOnly);
if (!isBotAdmins) return reply(mess.botAdminRequired);
if (!isAdmins) return reply(mess.adminOnly);
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
await satria.groupParticipantsUpdate(m.chat, users, "promote").then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)));
}
break;
case "demote":{
if (!m.isGroup) return reply(mess.groupOnly);
if (!isBotAdmins) return reply(mess.botAdminRequired);
if (!isAdmins) return reply(mess.adminOnly);
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
await satria.groupParticipantsUpdate(m.chat, users, "demote").then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)));
}
break;
case "setname":
case "setsubject":{
if (!m.isGroup) return reply(mess.groupOnly);
if (!isBotAdmins) return reply(mess.botAdminRequired);
if (!isAdmins) return reply(mess.adminOnly);
if (!text) return reply("Text ?");
await satria.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)));
}
break;
case "setdesc":
case "setdesk":{
if (!m.isGroup) return reply(mess.groupOnly);
if (!isBotAdmins) return reply(mess.botAdminRequired);
if (!isAdmins) return reply(mess.adminOnly);
if (!text) return reply("Text ?");
await satria.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)));
}
break;
case "setppgroup":
case "setppgrup":
case "setppgc":{
if (!m.isGroup) return reply(mess.groupOnly);
if (!isAdmins) return reply(mess.adminOnly);
if (!isBotAdmins) return reply(mess.botAdminRequired);
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);
var mediz = await satria.downloadAndSaveMediaMessage(quoted, "ppgc.jpeg");
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(mediz);
await satria.query({tag: "iq", attrs: { to: m.chat, type: "set", xmlns: "w:profile:picture" }, content: [{ tag: "picture", attrs: { type: "image" }, content: img }]});
fs.unlinkSync(mediz);
reply(`Sukses`);
} else {
var memeg = await satria.updateProfilePicture(m.chat, { url: mediz });
fs.unlinkSync(mediz);
reply(`Sukses`);
}
}
break;
case "tagall":{
if (!m.isGroup) return reply(mess.groupOnly);
if (!isBotAdmins) return reply(mess.botAdminRequired);
if (!isAdmins) return reply(mess.adminOnly);
let teks = `══✪〘 *👥 Tag All* 〙✪══

➲ *Pesan : ${q ? q : "kosong"}*\n\n`;
for (let mem of participants) {
teks += `⭔ @${mem.id.split("@")[0]}\n`;
}
satria.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) },{ quoted: m });
}
break;
case "hidetag":{
if (!m.isGroup) return reply(mess.groupOnly);
if (!isBotAdmins) return reply(mess.botAdminRequired);
if (!isAdmins) return reply(mess.adminOnly);
satria.sendMessage(m.chat, { text: q ? q : "", mentions: participants.map((a) => a.id) },{ quoted: m });
}
break;
case "totag":{
if (!m.isGroup) return reply(mess.groupOnly);
if (!isBotAdmins) return reply(mess.botAdminRequired);
if (!isAdmins) return reply(mess.adminOnly);
if (!m.quoted) return reply(`Reply pesan dengan caption ${prefix + command}`);
satria.sendMessage(m.chat, {forward: m.quoted.fakeObj, mentions: participants.map((a) => a.id)});
}
break;
default:
}
//━━━━━━━━━━━━━━━[ EVAL MENU ]━━━━━━━━━━━━━━━━━//
if (budy.startsWith("=>")) {
if (!isCreator) return m.reply(mess.ownerOnly);
function Return(sul) {
sat = JSON.stringify(sul, null, 2);
bang = util.format(sat);
if (sat == undefined) {
bang = util.format(sul);
}
return m.reply(bang);
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)));
} catch (e) {
m.reply(String(e));
}
}
if (budy.startsWith(">")) {
if (!isCreator) return m.reply(mess.ownerOnly);
const evalAsync = () => {
return new Promise(async (resolve, reject) => {
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== "string")
evaled = require("util").inspect(evaled);
resolve(evaled) } catch (err) { reject(err) }
})};
evalAsync().then((result) => m.reply(result)).catch((err) => reply(String(err)));
}
if (budy.startsWith("$")) {
if (!isCreator) return m.reply(mess.ownerOnly);
reply("Executing...");
exec(budy.slice(2), async (err, stdout) => {
if (err) return m.reply(`${err}`);
if (stdout) return m.reply(stdout);
});
}




//━━━━━━━━━━━━━━━[ ERROR RESPONSE ]━━━━━━━━━━━━━━━━━// 
} catch (err) {
console.error(err);
satria.sendMessage("6281316701742@g.us", { text: `「 *Server Error* 」\n\nError : ${util.format(err)}` });
m.reply(`「 *SYSTEM ERROR* 」\n\n${util.format(err)}`);
}
};






//━━━━━━━━━━━━━━━[ DETECT FILE UPDATE ]━━━━━━━━━━━━━━━━━//
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.blueBright(`Update ${__filename}`));
delete require.cache[file];
require(file);
});
