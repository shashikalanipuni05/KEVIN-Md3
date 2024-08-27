const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HF1UQADa#XZS9YQGF7_ZG0Qm2ltEEopjKExAN-k1SNOniYaT1-os",
STATUS_VIEW: process.env.STATUS_VIEW === undefined ? 'true' : process.env.STATUS_VIEW,    
MONGODB: process.env.MONGODB || "mongodb://mongo:YwaWQTJTuUHeFHPSoTZvLunISgkvYvsE@autorack.proxy.rlwy.net:12762"
};
