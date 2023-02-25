
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    var cancelRequest = false;

    req.on('close', function (err) {
        cancelRequest = true;
    });
    // let str = `This might be a weird request, but I've been trying to identify ways of generating high cpu usage with javascript. This is for a project on mitigation of side channel attacks. But I'm quite a newbie to JS, trying to wrap my mind around how JS engines work and all. I thought about asking here, to the more experienced community. In your experience coding with JS, have you ever come across not too complex webAPIs or short pieces of code that made you go: "wow, I didn't expect this piece of code to use soo much CPU" ?`;
    // for (let i = 0; i < 10000000000; i++) {
    //     if (cancelRequest === true) {
    //         throw new Error("Request canceled");
    //     }
    //     str = str.concat("aaaa");

    // }
    res.send('<html><body><h1>Hello World tests</h1></body></html>');
});


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});