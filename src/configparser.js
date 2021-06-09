const yaml = require('js-yaml');

function getConfigFromMD (markdown_string) 
{

    var query = new RegExp(/(---)((.|\n)*)(---)/g);
    var result = yaml.load(query.exec(markdown_string)[0].replace(/---/g,''));

    return result;
}

module.exports.getConfigFromMD = getConfigFromMD;