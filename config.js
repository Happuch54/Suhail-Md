const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348160093267";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_29_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICA5LFxuICAgICAgICAyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY4LFxuICAgICAgICA1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDkxLFxuICAgICAgICA1OCxcbiAgICAgICAgODksXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDcyLFxuICAgICAgICA1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM2LFxuICAgICAgICA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDgwLFxuICAgICAgICA5MyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU4LFxuICAgICAgICAzNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3LFxuICAgICAgICA2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9UZXFkWGxEMVRYMm80Z0ROMGJZQjAwSTlWaHRZL1VEd3laSWFXV3Q3cUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2MDA5MzI2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkFCQ0Q2RDdGNjY3OENFNjdEM0M3MzFFNzcyMjk3QzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjQ0NTc0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2MDA5MzI2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjAzNEMyQzFGMUYwRjgzRDc0MDY3MUE2ODEwNENBNjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjQ0NTc0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRkMFpCa0ZMUVlLbXgyXzBUdGdsNEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmE2MzA1NmQtMWViZi00YzhkLWJiZDctODdlYmNiYmM2MTljXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgNTAsXG4gICAgICA2NyxcbiAgICAgIDYwLFxuICAgICAgMjUxLFxuICAgICAgMjU1LFxuICAgICAgMTE2LFxuICAgICAgMSxcbiAgICAgIDk4LFxuICAgICAgNzYsXG4gICAgICA1OSxcbiAgICAgIDQsXG4gICAgICAxMDEsXG4gICAgICAyMDgsXG4gICAgICA5MyxcbiAgICAgIDE1OSxcbiAgICAgIDExMSxcbiAgICAgIDIzMyxcbiAgICAgIDIxNCxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDg5LFxuICAgICAgMjI0LFxuICAgICAgMjU1LFxuICAgICAgNDUsXG4gICAgICAxNCxcbiAgICAgIDQyLFxuICAgICAgNjAsXG4gICAgICAyMjgsXG4gICAgICAzMixcbiAgICAgIDM5LFxuICAgICAgMTc5LFxuICAgICAgNTksXG4gICAgICAxOSxcbiAgICAgIDIyMyxcbiAgICAgIDE4OSxcbiAgICAgIDIwOCxcbiAgICAgIDI0NyxcbiAgICAgIDIwMyxcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaWkhFNUNNVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2MDA5MzI2NzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDQzNTk1MzQ4MTMzODI6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLT0Z2czBHRUptMzRMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjBvMkRmTG9rOXB5Z3hmbTRndUEzaTVPN2dodmVFNCtUUHV2ZW9JTzBSR2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicmViV1pvdVNKVnk5dW1YUDZXSU8vUkxQYnJRTWQ0RHduV0dmMU5kdWtVL0dqclBtYlhEZlkveGRpWDU3ODBuRGRQTXpES1I1dVZFMlVlSG9Vdkt6Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRmZ0SHpTQ0ZJU2h5TVd1LzlQY1V2NzFUMCthUFg4ZXo5MC84dlQwTGFCd3RYbWEvNllxcHZWTjJRbm5PS1RwK2NBTkRTTXpDZGI1RXZhWFJOc2lYanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MDA5MzI2NzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjQ0NTcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjM0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCMzQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaR2phci9CQ3NxdmNrc1pmSUtRVUh3anBPZDArTklUZ3U4OS9yNEUxZm93PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NzMxMDk5MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI0NDU3NjAyNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
