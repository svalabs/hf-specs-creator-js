const yargs = require('yargs/yargs');

const md2yml = require('./md2yml');

// Get yargs running to read arguments
//const argv = yargs(hideBin(process.argv)).argv

md2yml.transform();
