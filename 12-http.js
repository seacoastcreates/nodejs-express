const http = require('http');

const server = http.createServer(( req, res) => {
    // console.log(req);
    if(req.url === '/') {
        res.end('hello welcome to our homepage')
    }
    else if(req.url === '/about') {
        res.end('hello to about')
    }
    else {
        res.end(`<h1>Nothing to see here folks. Move along. No content there. Nothing at all.</h1>`)
    }    
})

server.listen(8000)