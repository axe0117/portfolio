const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer();
server.on("request", (req, res) => {
    let url = req.url;

    console.log(url);
    if(url === "/") {
        res.writeHead(200, {"Content-type": "text/html"});
        fs.createReadStream("./index.html").pipe(res);
    }
    else if(url === "favicon.ico") {
        res.writeHead(200, {"Content-type": "image/png"});
        fs.createReadStream("./index.html").pipe(res);
    }
    else if(url === "style.css") {
        res.writeHead(200, {"Content-type": "text/css"});
        fs.createReadStream("./style.css").pipe(res);
    }
})