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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_04_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICA1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI3LFxuICAgICAgICA5MixcbiAgICAgICAgMjIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZXpkU2pDOTJ4bjhoRHNxRkp5aGJ3WnJDdE9MR3A1WExDdFFiRXE5T256ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTYwMDkzMjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxM0YyMTk3QTFCNEQ1NTlBRkY4MDY4Rjg3M0M4RjJEOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNDM4NTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTYwMDkzMjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5ODhFODFERjQ2NUQ5QjIzMjlEMzEwQjI5QkVCMEIyMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNDM4NTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaDZWMWk2V3JTc2F5b2hxelJmb1hSd1wiLFxuICBcInBob25lSWRcIjogXCI0YzlkZTE3MS05MGUyLTQ2MzYtOWNkYi0wNDZkMTNlYmYzOTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgMTEwLFxuICAgICAgMTIzLFxuICAgICAgMTIsXG4gICAgICAyMjUsXG4gICAgICA0NixcbiAgICAgIDE5NCxcbiAgICAgIDEyNCxcbiAgICAgIDIyNSxcbiAgICAgIDg4LFxuICAgICAgMjEyLFxuICAgICAgMjAyLFxuICAgICAgMjAsXG4gICAgICAxMTEsXG4gICAgICAxMjksXG4gICAgICAxNDQsXG4gICAgICAxOTksXG4gICAgICA4MixcbiAgICAgIDE2NSxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDU2LFxuICAgICAgMjIzLFxuICAgICAgMCxcbiAgICAgIDEwNyxcbiAgICAgIDIyNixcbiAgICAgIDM3LFxuICAgICAgMTM1LFxuICAgICAgMTkyLFxuICAgICAgMTg3LFxuICAgICAgMjI5LFxuICAgICAgODUsXG4gICAgICAxODYsXG4gICAgICA4MSxcbiAgICAgIDE5LFxuICAgICAgMjAsXG4gICAgICAyNTAsXG4gICAgICAyMDcsXG4gICAgICA3MyxcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkoxV0dBNEc4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYwMDkzMjY3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNDM1OTUzNDgxMzM4MjozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlRoYXQgT2JzY3VyZWQgQW1iaXZlcnQg8J+MuVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXRnZzMEdFT20rNXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMG8yRGZMb2s5cHlneGZtNGd1QTNpNU83Z2h2ZUU0K1RQdXZlb0lPMFJHaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLZm43Qzh1cmtCaVNOUjM0Z3ZjemtIZy9qUTViYVBuYjZGckM2YjZndExSc09RZDdKMk9SSGNRWUkvQ3h6ZDFoR1V3SGFObWhMUjh2T25Sb2s4SHRBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvNy9EVkVqREVVU2JGU0MrZVgyTUFxdTVqN1dNK0dmamNqL3k0NkdrVUY5N0RWY0hzbElkdm84R1B2akxvdDF5bzhVQWIybW5NSDQ3VU9UTlU4N2NDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYwMDkzMjY3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzNDM4NTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCMzlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUIzOS5qc29uIjogIntcImtleURhdGFcIjpcInk0TWFsdE4weDNLOTkwQUJKN2dsRDQzVDBuSjJVampXTS8zVmtuY2FyZ3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3MzEwOTkyNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMzQzODUzNDE0XCJ9Igp9"  // PUT your SESSION_ID 


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
