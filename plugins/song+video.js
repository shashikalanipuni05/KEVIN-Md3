const {cmd , commands} = require('../command')
const fg = require (`api-dylux`)
const yts = tequire (`yt-search`)

cmd({
    pattern: "song",
    desc: "Download songs",
    category: "download ",
    filename: __filename
    
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!p) return reply ("please give me url or titel")
const search = await yts(q)
const data = search.videos[o];
const url = data.url 

let dese = ` 🌟 KEVIN-MD SONG DOWNLOADER 🌟  


title: ${data.title}
description: {data.discription}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY KEVIN-MD
`
await conn.sendMessage (from,{image:{url: data.thumbnail},caption:desc}{quoted:mek}),
    // download audio


let down = await fg.yta(url)
let downloadUrl = down.dl_url

// send audio + document message
await conn.sendMessage (form{audio:{url:downloadUrl}mimetype: "audio/mpeg",{quoted:mek});
await conn.sendMessage (form{document:{url:downloadUrl}mimetype: "audio/mpeg",fileName:data.title + "mp3",caption:"KEVIN-MD AODIO DOWNLOAD...🌟"},{quoted:mek});


                             

                            
}catch (e) {
console.log(e)
reply(`${e}`)
}
})

//============video_dl===============

cmd({
    pattern: "video",
    desc: "Download videos",
    category: "download ",
    filename: __filename
    
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!p) return reply ("please give me url or titel")
const search = await yts(q)
const data = search.videos[o];
const url = data.url 

let dese = ` 🌟 KEVIN-MD VIDEO DOWNLOADER 🌟  


title: ${data.title}
description: {data.discription}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY KEVIN-MD
`
await conn.sendMessage (from,{image:{url: data.thumbnail},caption:desc}{quoted:mek}),
    // download videi


let down = await fg.ytv(url)
let downloadUrl = down.dl_url

// send vudeo + document message
await conn.sendMessage (form{video:{url:downloadUrl}mimetype: {"video/mp4"},{quoted:mek});
await conn.sendMessage (form{document:{url:downloadUrl}mimetype: "video/mp4",fileName:data.title + "mp4",caption:"KEVIN-MD VIDIO DOWNLOAD...🌟"},{quoted:mek});


                             

                            
}catch (e) {
console.log(e)
reply(`${e}`)
}
})

