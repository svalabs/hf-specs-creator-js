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

var files = fs.readdirSync("../md/");

for(var x=0; x<files.length; x++)
{
    const contbuff = Buffer.from(fs.readFileSync("../md/"+files[x]).toString(), 'utf-8');
    const titlebuff = Buffer.from(files[x]);

    specs.spec.steps.push({        
        content: contbuff.toString('base64'),
        title: titlebuff.toString('base64')
    })
}

for(var x=0; x<config.vm.length; x++)
{
    const newobj = {}
    newobj[config.vm[x].name] =  config.vm[x].type

    specs.spec.virtualmachines.push(newobj)
}

fs.writeFileSync("../output/result.yml", yaml.dump(specs));
console.log('DONE!');
