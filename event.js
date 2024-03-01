const fs = require('fs');

const a = fs.createReadStream('./hello.txt','utf-8') //creating a open and read event

a.on('open', function(){
    console.log('Event : File Opened')
})