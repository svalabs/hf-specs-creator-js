const md2yml = require('./md2yml');
const yml2md = require('./yml2md');

// Get yargs running to read arguments
var argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: $0 [command]')
    .command('toyml', 'Converte MD to yml file', toyml)
    .command('tomd', 'Converte yml to MD file', tomd)
    .demandCommand(1, 'You need at least one command to execute')
    .argv;

function toyml()
{
    console.log("Converting MD to YML");
    md2yml.transform();
    console.log("DONE!");
}

function tomd()
{
    console.log("Converting YML to MD");
    yml2md.transform()
    console.log("DONE!");
}