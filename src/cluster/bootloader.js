const cluster = require('cluster');
const { exit } = require('process');
const process = require('process');

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running\nNow bootloading...`);
    require('./primary.js');
}
else {
    console.log(`Worker ${process.pid}:${process.env.worker_type} is running`);

    // Load our worker type.
    require(`./workers/${process.env.worker_type}.js`);
}