let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de The Shadow Borkers - Bot*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/GBLJJNdsabGA7lms6NZY3R

*2.-* pronto... 

*3.-* pronto...

*4.-* pronto...

*5.-* pronto...

*6.-* pronto...

*7.-* pronto...

*8.-* pronto...

*9.-* pronto...

*10.-* pronto...
`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 THE SHADOW BROKERS - BOT 🔥', "jpegThumbnail": fs.readFileSync(`./Menu2.jpg`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
