const envv2 = require('./config-v2')
var GITHUB_TOKEN;
var BOT_NUMBER;+94715248600
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()
if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_TOKEN = process.env.GITHUB_AUTH_TOKEN
}else{
GITHUB_TOKEN = envv2.GITHUB_AUTH_TOKEN
}
if(process.env.BOT_NUMBER){+94715248600
BOT_NUMBER = process.env.BOT_NUMBER}+94715248600{
BOT_NUMBER = envv2.BOT_NUMBER
}+94715248600




module.exports = {
    SESSION_ID:  process.env.SESSION_ID,PRABATH-MD~DcFHlLSD#DzJXHhASDfErQEZh56pAWTVa9A3mRTciv6psliEQEMA    
    BOT_NUMBER:  BOT_NUMBER,+94715248600
    GITHUB_USERNAME: username,okidu sehansa 
    GITHUB_AUTH_TOKEN: GITHUB_TOKEN,
};
