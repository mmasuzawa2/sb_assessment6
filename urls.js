const fs = require('fs');
const axios = require('axios');


function getHostName(url) {
    // run against regex
    const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    // extract hostname (will be null if no match is found)
    return matches && matches[1];
}

function read(cbFunc){
    fs.readFile('urls.txt', 'utf8', (err, data) => {
        if (err) {
            console.log("ERROR:", err);
            process.kill(1)
        }
        cbFunc(data.split('\n'));
    });
}

read(async function(d){
    for(i of d){
        try{
            fs.writeFile(`${getHostName(i)}`, (await axios.get(i)).data,{encoding: 'utf8'}, err=>{
                if (err) {
                    console.log("ERROR:", err)
                    process.kill(1)
                } 
                console.log("IT WORKED!")
            })
        }
        catch(e){
            console.log(e);
        }
    }
});


