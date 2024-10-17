const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    let a = Number(queryObject.a);
    let b = Number(queryObject.b);

    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;

    if (req.url.startsWith('/add')) {
        res.write(`${a + b}`);  
    } else if (req.url.startsWith('/subtract')) {
        res.write(`${a - b}`);
    } else if (req.url.startsWith('/multiply')) {
        res.write(`${a * b}`);
    } else if (req.url.startsWith('/divide')) {
        res.write(`${a / b}`);
    } else {
        res.write("Invalid operation");
    }
    
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
