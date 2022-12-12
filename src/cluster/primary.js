const cluster = require('cluster');
const process = require('process');
const pidusage = require('pidusage');
const idMap = new Map();
const cpus = require('os').cpus()

let maxThreads = cpus.length;
console.log(`Max threads: ${maxThreads}`);

// Determine an appropriate number of threads to use.
if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == undefined) {
    maxThreads = 1;
}

let startWorker = (workerType) => {
    const worker = cluster.fork({worker_type: workerType});
    idMap.set(worker.id, workerType);
}

// Load the threads.
console.log(`Now loading ${maxThreads} ${maxThreads > 1 ? "threads" : "thread"}...`);
for (let i = 0; i < maxThreads; i++) {
    startWorker('server');
}

// Handle worker death.`
cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.id} (${worker.process.pid}) died. Restarting...`);
    startWorker(idMap.get(worker.id));
    idMap.delete(worker.id);
});

// Monitor view. ( To be moved to a component )
// setInterval(async () => {
//     console.clear();

//     // Title
//     console.log(`Cluster Monitor`)
//     console.log(`====================`)

//     // Fetch usage.
//     for (const worker of Object.values(cluster.workers)) {
//         // Fetch the info for the process.
//         let info = await pidusage(worker.process.pid);

//         // Display the info.
//         console.log(`Worker ${worker.id} (${worker.process.pid}) - ${idMap.get(worker.id)}`);
//         console.log(`CPU: ${info.cpu}%`);
//         console.log(`Memory: ${info.memory / 1024 / 1024} MB`);
//         console.log(`Uptime: ${info.elapsed / 1000} seconds`);
//         console.log();
//     }

//     // Display overall usage.
//     let info = await pidusage(process.pid);
//     console.log(`Max threads: ${maxThreads}`)
//     console.log(`CPU: ${info.cpu}% - MASTER`);
//     console.log(`Memory: ${info.memory / 1024 / 1024} MB`);
//     console.log(`Uptime: ${info.elapsed / 1000} seconds`);
//     console.log();

//     // Display environment.
//     console.log(`Environment: ${process.env.NODE_ENV}`);
// }, 500);