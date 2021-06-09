function getPartsFromMD(markdown_string)
{
    var query = new RegExp(/[^#]#\s/g);
    var result = []
    
    // Find all headers
    do
    {
        var entry = query.exec(markdown_string)

        if(entry)
        {
            result.push(entry.index)
        }
    }
    while(entry)

    // Split document at header psoitions
    var parts = []

    for(x = 0; x < result.length; x++)
    {

    }
}

module.exports.getPartsFromMD = getPartsFromMD