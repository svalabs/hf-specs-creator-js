const yaml = require('js-yaml');
const fs   = require('fs');
const crypto = require('crypto');
const configParser = require('./configparser')

try
{
    var files = fs.readdirSync("../md/");
}
catch (e)
{
    console.log("Error reading directory: " + e);
}

for(var x=0; x<files.length; x++)
{   
    try
    {
        const contbuff = Buffer.from(fs.readFileSync("../md/"+files[x]).toString(), 'utf-8');
        const titlebuff = Buffer.from(files[x].slice(0,-3));

        
    }
    catch(e)
    {
        console.log("Error reading file and adding to array: " + e);
    }
    
}