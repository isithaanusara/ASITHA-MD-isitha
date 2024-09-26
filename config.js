const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "CRkS0RCJ#tGOLu1HyO-6Llnzzc3O6QfN5h0KVVOjqTeaQSJA-Djc",
MONGODB: process.env.MONGODB || "mongodb+srv://isithaanusara01:202213isi@cluster0.mcee3.mongodb.net/",//enter mongo db url
};
