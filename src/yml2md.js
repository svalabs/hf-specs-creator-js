function transform ()
{
    try
    {
        var files = fs.readdirSync("../yml/");
    }
    catch (e)
    {
        console.log("Error reading directory: " + e);
    }

    {   
        try
        {
            var rawMarkdown = fs.readFileSync("../md/"+files[iterationcounter]).toString();        
            
        }
        catch(e)
        {
            console.log("Error reading file and adding to array: " + e);
        }   
    }
}

module.exports.transform = transform