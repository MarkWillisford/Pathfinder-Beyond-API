const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const mongoose = require('mongoose');
const aasimarHeritagesRouter = require('./routers/aasimarHeritages.router');
const bloodlinesRouter = require('./routers/bloodlines.router');
const charClassesRouter = require('./routers/charClasses.router');
const deitiesRouter = require('./routers/deities.router');
const domainsRouter = require('./routers/domains.router');
const druidsNatureBondsRouter = require('./routers/druidsNatureBonds.router');
const featsRouter = require('./routers/feats.router');
const racesRouter = require('./routers/races.router');
const spellsRouter = require('./routers/spells.router');
const traitsRouter = require('./routers/traits.router');

const app = express();
const PORT = process.env.PORT || 3000;

/* Middlewares */
// CORS
const cors = require('cors');
const {CLIENT_ORIGIN} = require('./config/main.config.js');


// log the http layer
app.use(morgan('common'));

app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);

/* Routes */
app.use('/api/aasimarHeritages', aasimarHeritagesRouter);
app.use('/api/bloodlines', bloodlinesRouter);
app.use('/api/classes', charClassesRouter);
app.use('/api/deities', deitiesRouter);
app.use('/api/domains', domainsRouter);
app.use('/api/druidsNatureBonds', druidsNatureBondsRouter);
app.use('/api/feats', featsRouter);
app.use('/api/races', racesRouter);
app.use('/api/spells', spellsRouter);
app.use('/api/traits', traitsRouter);

/* app.get('/api/*', (req, res) => {
res.json({ok: true});
}); */

// Server scripts
let server;
function runServer(){
	const port = process.env.PORT || 8080;
	return new Promise((resolve, reject) => {
		server = app
			.listen(port, () => {
				console.log(`Your app is listening on port ${port}`);
				resolve(server);
			})
			.on("eror", err => {
				reject(err);
			});
	});
}

function closeServer(){
	return new Promise((resolve, reject) => {
		console.log("Closeing server");
		server.close(err => {
			if(err){
				reject(err);
				return;
			}
			resolve();
		});
	});
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };

/* // Server scripts

// this function starts our server and returns a Promise.
// In our test code, we need a way of asynchronously starting
// our server, since we'll be dealing with promises there.
// this function is responsable for loading the server 
let server;
function runServer(databaseUrl) {
    return new Promise((res, rej) => {
        mongoose.connect(databaseUrl, (err) => {
            if (err) {
                return rej(err);
            }
            if (ENV === 'development') {
                winston.info(`Connected to ${databaseUrl}`);
            } else {
                winston.info('Connected to database');
            }
            server = app.listen(PORT, () => {
                winston.info(`App is listening on port ${PORT}`);
                winston.info(`App is running in ${ENV} environment`);
                winston.info(`Worker process id: ${process.pid}`);
                winston.info('=========================================');
                res();
            })
            .on('error', (error) => {
                mongoose.disconnect();
                rej(error);
            });
            return server;
        });
    });
}

// like 'runServer', this function also returns a promise
function closeServer() {
    return mongoose.disconnect().then(() => (
        new Promise((res, rej) => {
            winston.info('Closing server.');
            server.close((err) => {
                if (err) {
                    return rej(err);
                }
                return res();
            });
        })
    ));
}

// if server.js is called directly . . . 
if (require.main === module) {
    throng({
        workers: WORKERS,
        lifetime: Infinity,
    }, () => {
        runServer(DATABASE_URL).catch(err => winston.info(err));
    });
} */

module.exports = { app, runServer, closeServer };