const yaml = require('js-yaml');
const fs   = require('fs');
const crypto = require('crypto');
const configParser = require('./configparser');
const headerParser = require('./headerParser');

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
        var rawMarkdown = fs.readFileSync("../md/"+files[x]).toString()

        // Get the right configuration
        var config = configParser.getConfigFromMD(rawMarkdown)

        // Get the different parts seperated by the headers
        var parts = headerParser.getPartsFromMD(rawMarkdown)
        
        // Create new file for each found part
        parts.forEach(element => {

            // Raw specs
            var specs = {
                apiVersion: "hobbyfarm.io/v1",
                kind: "Scenario",
                metadata: {
                    name: "Scenario-"+crypto.randomBytes(8).toString('hex')
                },
                spec: {
                    id: config.scenario.id,
                    title: Buffer.from(config.scenario.id).toString('base64'),
                    description: Buffer.from(config.scenario.description).toString('base64'),
                    pause_duration: config.scenario.pause_duration,
                    keepalive_duration: config.scenario.keepalive_duration,
                    pauseable: config.scenario.pauseable,
                    steps: [],
                    virtualmachines: []
                }
            };

            // Add vms to specs
            for(var x=0; x<config.vm.length; x++)
            {
                const newobj = {}
                newobj[config.vm[x].name] =  config.vm[x].type

                specs.spec.virtualmachines.push(newobj)
            }

            var title = ("Scenario-"+crypto.randomBytes(8).toString('hex'))
            // Add content to specs
            specs.spec.steps.push({        
                content: Buffer.from(element).toString('base64'),
                title: title.toString('base64')
            })

            try
            {
                fs.writeFileSync("../output/"+title+".yml", yaml.dump(specs));
            }
            catch (e)
            {
                console.log("Error writing file to output: " + e);
            }


        });
        
    }
    catch(e)
    {
        console.log("Error reading file and adding to array: " + e);
    }   
}