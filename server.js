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
    else if(url === "/exp") {
        res.writeHead(200, {"Content-type": "text/html"});
        fs.createReadStream("./exp.html").pipe(res);
    }
    else if(url === "/about") {
        res.writeHead(200, {"Content-type": "text/html"});
        fs.createReadStream("./about.html").pipe(res);
    }
    else if(url === "/project") {
        res.writeHead(200, {"Content-type": "text/html"});
        fs.createReadStream("./project.html").pipe(res);
    }
    else if(url === "/axetao.ico") {
        res.writeHead(200, {"Content-type": "image/ico"});
        fs.createReadStream("./axetao.ico").pipe(res);
    }
    else if(url === "/style.css") {
        res.writeHead(200, {"Content-type": "text/css"});
        fs.createReadStream("./style.css").pipe(res);
    }
    else if(url === "/script.js") {
        res.writeHead(200, {"Content-type": "text/javascript"});
        fs.createReadStream("./script.js").pipe(res);
    }
    else if(url === "/soul.png") {
        res.writeHead(200, {"content-type": "image/png"});
        fs.createReadStream("./soul.png").pipe(res);
    }
})


server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})