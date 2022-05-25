const express = require('express');
const next = require('next');
const db = require('./config/connection');
var compression = require("compression");
const logger = require("morgan");
const enforce = require('express-sslify')
const cors = require('cors');

//const mailer = require('./utils/mailClient')
// mailer().catch(err => console.error(err));

// port
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });


// cors settings
const corsOrigin = dev ? 
    '*' : 
    ['https://www.therockademy.rocks', 'https://therockademy.rocks']
;
const corsOption = {
    origin: corsOrigin,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin', 'Origin', 'Accept'],
}

// handle request
const handle = app.getRequestHandler();


// ROUTES
const routes = require('./routes');

app
    .prepare()
    .then(() => {
        const server = express();
        
        if (!dev) {
            server.use(enforce.HTTPS({ trustProtoHeader: true }));
        }

        server.use(compression());
        server.use(logger(dev ? 'dev' : 'combined'));

        server.use(express.json());
        server.use(express.urlencoded({ extended: true }));

        // enable cors
        server.use(cors(corsOption));

        server.use(routes);

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, err => {
            if (err) throw err;
            console.log('Server listening on port ' + PORT);
        });

    })
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    });
