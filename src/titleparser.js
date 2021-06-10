function parseTitleFromString(part)
{
    var query = new RegExp(/^#\s(.*)/gm);
    var result = query.exec(part)
    return result[1]

}

module.exports.parseTitleFromString = parseTitleFromString