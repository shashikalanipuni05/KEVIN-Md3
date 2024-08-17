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

// send audio message
await conn.sendMessage (form{audio:{url:downloadUrl}mimetype: "audio/mpeg",{quoted:mek});


                             

                            
}catch (e) {
console.log(e)
reply(`${e}`)
})

