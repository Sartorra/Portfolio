const expressApp = require(`${process.cwd()}/src/config/express`);
const https = require('https');
const http = require('http');
const args = process.argv.slice(2);

if(args.length != 0) {
    const options = {
        key: fs.readFileSync(args[0]),
        cert: fs.readFileSync(args[1])
    }

    https.createServer(options, expressApp).listen(443);
}

http.createServer(expressApp).listen(80);