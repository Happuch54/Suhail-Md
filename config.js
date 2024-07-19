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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_23_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1LFxuICAgICAgICAxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUzLFxuICAgICAgICA5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMixcbiAgICAgICAgNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM4LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUwLFxuICAgICAgICA5NSxcbiAgICAgICAgNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3LFxuICAgICAgICA0MixcbiAgICAgICAgODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm41OGdrRU1PTUtnVFJCQm5VL1E2c2ZrY0tuQmVPVmJPTE5xREdkZ2pQS2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2MDA5MzI2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjM0MEExNDA5M0YwNUUxNTQzNTc2MzI2QkQ1RTNCM0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzgxMDE2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2MDA5MzI2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkMyOTg2RDc1RjVGRDNEODg4Q0U5MDkxMkJCRUI1QjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzgxMDE3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZJWlY4VllHUXM2TDRZbWZta3pmZ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzUwMWQ4NTUtODZhZi00MjYyLWIwODgtYmVjNmUxOTI3OTU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDI4LFxuICAgICAgMTEsXG4gICAgICAyNTQsXG4gICAgICAyNTQsXG4gICAgICAyMTgsXG4gICAgICA0MCxcbiAgICAgIDE3LFxuICAgICAgODIsXG4gICAgICAxODAsXG4gICAgICA1NyxcbiAgICAgIDMxLFxuICAgICAgOTYsXG4gICAgICAyMixcbiAgICAgIDE1NyxcbiAgICAgIDIxMixcbiAgICAgIDQsXG4gICAgICAxMTcsXG4gICAgICAyMzAsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgMTE0LFxuICAgICAgMTA2LFxuICAgICAgMTk3LFxuICAgICAgMjAsXG4gICAgICAxMDAsXG4gICAgICAxOCxcbiAgICAgIDEyOCxcbiAgICAgIDEzMSxcbiAgICAgIDcsXG4gICAgICAyMjMsXG4gICAgICAyNDgsXG4gICAgICA5MCxcbiAgICAgIDE2NixcbiAgICAgIDY3LFxuICAgICAgMTgyLFxuICAgICAgNDQsXG4gICAgICA2MyxcbiAgICAgIDEzMCxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZWTNQNDJRRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2MDA5MzI2Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDQzNTk1MzQ4MTMzODI6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJUaGF0IE9ic2N1cmVkIEFtYml2ZXJ0IPCfjLlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYUZ2czBHRUpMaDZMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjBvMkRmTG9rOXB5Z3hmbTRndUEzaTVPN2dodmVFNCtUUHV2ZW9JTzBSR2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZy9MUDFWb0pDTENOaFNHaFBoTlFmWmdUS0hHUHVFTk5EVCtWM2sxV1gxVjVqMVJsUElPa0RUYUUvT3NQOWtlUDFOOStVbWRtQlZZek9mQVhPZDlSQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWWtJK3lTcm9VOUVHNHRRZE5Tb3NWWDYzRFBWRHgydDg5cUt2WEJCTnRaSE1oZmhhS1MrbmlFUDE2V08xWHB0all3eHZnWW5SeWprSG1BakR2Y3B6QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MDA5MzI2Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzgxMDE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjMvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCMy8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
