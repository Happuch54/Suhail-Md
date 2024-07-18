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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_42_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDkwLFxuICAgICAgICA0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxODIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTExLFxuICAgICAgICA3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4LFxuICAgICAgICA3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY3LFxuICAgICAgICA3LFxuICAgICAgICAxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDg5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDUyLFxuICAgICAgICA2MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM1LFxuICAgICAgICA2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU0LFxuICAgICAgICA2LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibmZSZjJlMFp3Ly9pR0FXbkZZSkFuZXNXTlNWZzRDRFB5YzVsZjZUd1pVcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidHlrX0ZlRlRRd0NudG9rVnB1bVBrQVwiLFxuICBcInBob25lSWRcIjogXCIzYjdhOGQwOC05NzQ1LTRkMWQtOGM2MS0zMTNkZjU5MmE3M2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAyMjMsXG4gICAgICAyMyxcbiAgICAgIDExOSxcbiAgICAgIDIyMixcbiAgICAgIDE4NSxcbiAgICAgIDE0MCxcbiAgICAgIDcwLFxuICAgICAgMjMyLFxuICAgICAgMTgzLFxuICAgICAgMTk3LFxuICAgICAgMjMyLFxuICAgICAgMTYyLFxuICAgICAgODYsXG4gICAgICAyNDMsXG4gICAgICAyMzQsXG4gICAgICAxMDMsXG4gICAgICAyMTEsXG4gICAgICA3NSxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICA4MSxcbiAgICAgIDIxMyxcbiAgICAgIDE1MCxcbiAgICAgIDIyMyxcbiAgICAgIDIyNSxcbiAgICAgIDgyLFxuICAgICAgMjgsXG4gICAgICAyMDEsXG4gICAgICA3NSxcbiAgICAgIDE4OCxcbiAgICAgIDMzLFxuICAgICAgMjgsXG4gICAgICAyNixcbiAgICAgIDE5OSxcbiAgICAgIDQsXG4gICAgICAxNzUsXG4gICAgICAxMTcsXG4gICAgICAxMTIsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaWFBLNkJMR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1Mjk1MTg0NjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIktlcmVuLWhhcHB1Y2hcIixcbiAgICBcImxpZFwiOiBcIjE0ODc4MDY4NzQ4MzI5OjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lEQnpxTUZFTmZRNXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN21Qb29hTEZXUERmVE9kb2FlTUFVNUlvck83TTloYzNvbGpQVDJkZzJCMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtNCtCei9wR0NWM0djUTRHUkRXYmpJMVJPeFFpRy9kNS81b2R6QlFOYjVDZ1FJQkNRTkhzTDhEVDg3cVl2L2RZZE4zZllFSjRRaXdZaG9YWTBlU0xEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxekNLRCs4ZWt5U2pMbDZhYWpZNlFGbXdRaU9SU2xSeEJEUG5PUFRONWd0WTBUT1pNOUczbWRBL1R2bXZ4NWt6VEpnTUJCRTc2SysvNDI3ZmRuS2JCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDUyOTUxODQ2OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzNDYxMzhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
