const cluster = require('cluster');
const process = require('process');
const cpus = require('os').cpus()

let maxThreads = cpus.length;
console.log(`Max threads: ${maxThreads}`);

// Determine an appropriate number of threads to use.
if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == undefined) {
    maxThreads = 1;
}

// Load the threads.
console.log(`Now loading ${maxThreads} ${maxThreads > 1 ? "threads" : "thread"}...`);
for (let i = 0; i < maxThreads; i++) {
    cluster.fork({worker_type: 'server'});
}

// TODO: Dedicate threads to specific things.