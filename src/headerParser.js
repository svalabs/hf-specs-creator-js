function getHeaderFromMD(markdown_string)
{
    var query = new RegExp(/[^#]#\s/g);
    var result = query.exec(markdown_string)

    console.log(result)
}

module.exports.getHeaderFromMD = getHeaderFromMD