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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_23_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc1LFxuICAgICAgICA1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDksXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkzLFxuICAgICAgICA5NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDU4LFxuICAgICAgICA1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6SGNqMnZIL2o1aDBweEs5akl1enkvQi9IRkxnM0pFYkVJalpTZUZtdDBvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3MV90UGR6SVJjMm0yVmdZWHdkNFlBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhZDM5YjBiLTQyMDYtNDBlNi1iNDE5LWJhNzc0YmYxZGM1YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICAxNzMsXG4gICAgICAyMTgsXG4gICAgICAxOTAsXG4gICAgICAxNjEsXG4gICAgICAyNDYsXG4gICAgICAyMDIsXG4gICAgICAxNDYsXG4gICAgICAyMTQsXG4gICAgICA0MyxcbiAgICAgIDIyNixcbiAgICAgIDg3LFxuICAgICAgMTA2LFxuICAgICAgMTYxLFxuICAgICAgMTQ3LFxuICAgICAgMjA5LFxuICAgICAgMjE1LFxuICAgICAgMzQsXG4gICAgICA2OCxcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAyNDUsXG4gICAgICA2MSxcbiAgICAgIDE4MCxcbiAgICAgIDc4LFxuICAgICAgMTc3LFxuICAgICAgMTIsXG4gICAgICAxNzEsXG4gICAgICAxOSxcbiAgICAgIDY4LFxuICAgICAgMTc1LFxuICAgICAgMzEsXG4gICAgICAxNDMsXG4gICAgICA1LFxuICAgICAgMTY1LFxuICAgICAgNzYsXG4gICAgICAxNDUsXG4gICAgICA3NCxcbiAgICAgIDEwMixcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRLN0hIWVpNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDUyOTUxODQ2OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS2VyZW4taGFwcHVjaFwiLFxuICAgIFwibGlkXCI6IFwiMTQ4NzgwNjg3NDgzMjk6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVhCenFNRkVPT3gvN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3bVBvb2FMRldQRGZUT2RvYWVNQVU1SW9yTzdNOWhjM29salBUMmRnMkIwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBCQ2UrWWl0K2ZIMVRxdUZiSHkxbERPUUNZVE10U1ZYejFPZ1RBcTJaSFI3cGRjeUpTekpMVkZoZFdNNXo1L1dJSUxnbUVYaS9UNFA0bUtOTk9iN0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkM1VDFaM1E5NjVmeTZUaVZnOGhiZ1R3K0p1bStyaXVnNzArK0M4Q0lpMGxEVU9oK2pEWjhoMFZ6c04zMkNIMHFNajVMWEI5WVB0alBXMkpYLzFKZmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTI5NTE4NDY6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc1MTc4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUU1R1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTVHLmpzb24iOiAie1wia2V5RGF0YVwiOlwieWJpcmJZZlIzV2g3aUhRWm1rdk8zc3kwVy9sMlByM3hWSmRWSXh2by96RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE2ODYzODc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNzUxNDMyMzA0XCJ9Igp9"  // PUT your SESSION_ID 


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
