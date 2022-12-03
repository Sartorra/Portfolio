const express = require('express');
const compression = require('compression');
const fs = require('fs');

// Setup express app.
const app = express();

switch (process.env.NODE_ENV) {
    case 'production':
        app.use(compression());
        break;
}

// Setup middleware.

// Setup views.
app.set('views', `${process.cwd()}/src/views`)

// Setup routes.
for (let route of fs.readdirSync(`${process.cwd()}/src/routes`)) {
    // Don't load index yet.
    if (route == 'index.server.routes.js') {
        continue;
    }

    let router = require(`../routes/${route}`);
    router(app);
}

// Load index last.
let router = require(`../routes/index.server.routes.js`);
app.use(router);

// Export the app.
module.exports = app;