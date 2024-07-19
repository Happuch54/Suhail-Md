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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349052951846";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_35_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDksXG4gICAgICAgIDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MixcbiAgICAgICAgOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICA1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM5LFxuICAgICAgICA5MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDU3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEsXG4gICAgICAgIDM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTc1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiODdicWFRWncxMUdVbVZzNnpGdkxoMElBNFVlck0vN3BIcE9ZYjBDQ2FwQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDUyOTUxODQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMzI5NUM2QjA5Qjg1RkI3NDJENThDMTI3RURFOUM5NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzODE3MTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR0dFMG9rNXpSSDZsOE1kT0NsNUJ4QVwiLFxuICBcInBob25lSWRcIjogXCI0OTBiYjgyZC0xMjkwLTQwYWMtYWU5NS0yOWVhM2VhNTJkYWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMTg4LFxuICAgICAgODEsXG4gICAgICAxMjEsXG4gICAgICAxNixcbiAgICAgIDExNSxcbiAgICAgIDEwNixcbiAgICAgIDE0NyxcbiAgICAgIDE3NCxcbiAgICAgIDE2LFxuICAgICAgMjI4LFxuICAgICAgMjAxLFxuICAgICAgMTQ0LFxuICAgICAgOSxcbiAgICAgIDc1LFxuICAgICAgMTA1LFxuICAgICAgMjA5LFxuICAgICAgMTAsXG4gICAgICAxNTcsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjMsXG4gICAgICAxNjksXG4gICAgICA3NCxcbiAgICAgIDc4LFxuICAgICAgODEsXG4gICAgICAyMDUsXG4gICAgICA1MixcbiAgICAgIDE5LFxuICAgICAgNTEsXG4gICAgICA5OCxcbiAgICAgIDc0LFxuICAgICAgMTA4LFxuICAgICAgMjEzLFxuICAgICAgMTY4LFxuICAgICAgNzksXG4gICAgICAxNjIsXG4gICAgICAxODksXG4gICAgICAyNCxcbiAgICAgIDgzLFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlY3UVNEUEdDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDUyOTUxODQ2OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS2VyZW4taGFwcHVjaFwiLFxuICAgIFwibGlkXCI6IFwiMTQ4NzgwNjg3NDgzMjk6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUxCenFNRkVNYm02TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3bVBvb2FMRldQRGZUT2RvYWVNQVU1SW9yTzdNOWhjM29salBUMmRnMkIwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhDU1Z0U2M5amx6TVpuajdhM2JnWEVoVEhRM0k4V1JIWkVRenoxcWJBTDFwREtUdEI4Q092M1FRWnJVS1RFb0R2R0ZkS0VZUHN5UllxVlZsMzF5aEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlwNlY2QnQvd3loYk44REVjYmpXK1hvbVA0Zk9JeTVwSk9IdXhGdkd1MVJZeDBYekx0UFovVlNtYTdiQ05kRk9FWG03eVo2cldTRDgyUktMVzg2NGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTI5NTE4NDY6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTM4MTcwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUU1QVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTVBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZGo2VWJZOW4xNVNHcWJWcTVRbjFGNEU1QUgvSCsrN3pFTDEyaGhNT1d6ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE2ODYzODcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMzc5MjA1MjM0XCJ9Igp9"  // PUT your SESSION_ID 


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
