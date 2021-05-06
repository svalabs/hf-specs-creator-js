const yaml = require('js-yaml');
const fs   = require('fs');
const crypto = require('crypto');

var config = yaml.load(fs.readFileSync("../scenarios.yml",'utf8'));

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

        specs.spec.steps.push({        
            content: contbuff.toString('base64'),
            title: titlebuff.toString('base64')
        })
    }
    catch(e)
    {
        console.log("Error reading file and adding to array: " + e);
    }
    
}

for(var x=0; x<config.vm.length; x++)
{
    const newobj = {}
    newobj[config.vm[x].name] =  config.vm[x].type

    specs.spec.virtualmachines.push(newobj)
}

try
{
    fs.writeFileSync("../output/result.yml", yaml.dump(specs));
}
catch (e)
{
    console.log("Error writing file to output: " + e);
}
console.log('DONE!');
