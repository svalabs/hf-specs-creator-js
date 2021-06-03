const yaml = require('js-yaml');

function getConfigFromMD (markdown_string) {

    var query = new RegExp(/(---)((.|\n)*)(---)/g)
    var result = query.exec(markdown_string)[0].replace(/---/g,'')

    console.log(result)
}

module.exports.getConfigFromMD = getConfigFromMD