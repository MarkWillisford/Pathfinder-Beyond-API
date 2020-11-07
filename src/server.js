const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const throng = require('throng');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const aasimarHeritagesRouter = require('./routers/aasimarHeritages.router');
const bloodlinesRouter = require('./routers/bloodlines.router');
const charClassesRouter = require('./routers/charClasses.router');
const deitiesRouter = require('./routers/deities.router');
const domainsRouter = require('./routers/domains.router');
const featsRouter = require('./routers/feats.router');
const racesRouter = require('./routers/races.router');
const spellsRouter = require('./routers/spells.router');
const druidsNatureBondsRouter = require('./routers/druidsNatureBonds.router');
const traitsRouter = require('./routers/traits.router');
const armorsRouter = require('./routers/armors.router');
const goodsAndServicesRouter = require('./routers/goodsAndServices.router');
const tradeGoodsRouter = require('./routers/tradeGoods.router');
const weaponsRouter = require('./routers/weapons.router');
const { router: usersRouter } = require('./routers/users.router');

const app = express();
const { PORT, DATABASE_URL, CONCURRENCY: WORKERS, ENV, TEST_DATABASE_URL } = require('./config/main.config');
mongoose.Promise = global.Promise;

/* Middlewares */
// CORS
const cors = require('cors');
const {CLIENT_ORIGIN} = require('./config/main.config.js');


// log the http layer
app.use(morgan('common'));

// CORS
app.use(function (req, res, next) {
  console.log("In cors Middleware");
  res.header('Access-Control-Allow-Origin', '*');
  //res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin', "Authorization", "Origin", "x-requested-with", "Content-Type", "Content-Range", "Content-Disposition", "Content-Description"); // ,Authorization
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // BUG #4 CORS ERROR
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');


  
  // if (req.method === 'OPTIONS') {
  //   return res.send(204);
  // }
  next();
});
/* app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json,Authorization');
  next();
}); */
app.use(cors());

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Logging
morgan.token('processId', () => process.pid);
if (ENV === 'development') {
    app.use(morgan(':processId - :method :url :status :response-time ms - :res[content-length]'));
}

/* Routes */
app.use('/api/users', usersRouter);
app.use('/api/aasimarHeritages', aasimarHeritagesRouter);
app.use('/api/bloodlines', bloodlinesRouter);
app.use('/api/charClasses', charClassesRouter);
app.use('/api/deities', deitiesRouter);
app.use('/api/domains', domainsRouter);
app.use('/api/feats', featsRouter);
app.use('/api/races', racesRouter);
app.use('/api/spells', spellsRouter);
app.use('/api/traits', traitsRouter);
app.use('/api/armors', armorsRouter);
app.use('/api/goodsAndServices', goodsAndServicesRouter);
app.use('/api/tradeGoods', tradeGoodsRouter);
app.use('/api/weapons', weaponsRouter);
app.use('/api/druidsNatureBonds', druidsNatureBondsRouter);

 // Server scripts

// this function starts our server and returns a Promise.
// In our test code, we need a way of asynchronously starting
// our server, since we'll be dealing with promises there.
// this function is responsable for loading the server 
let server;
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'logfile.log' })
    ]
});

function runServer(databaseUrl, port = PORT) {
/*     return new Promise((res, rej) => {
        mongoose.connect(databaseUrl, (err) => {
            if (err) {
                return rej(err);
            }
            if (ENV === 'development') {
                logger.info(`Connected to ${databaseUrl}`);
            } else {
                logger.info('Connected to database');
            }
            server = app.listen(PORT, () => {
                logger.info(`App is listening on port ${PORT}`);
                logger.info(`App is running in ${ENV} environment`);
                logger.info(`Worker process id: ${process.pid}`);
                logger.info('=========================================');
                res();
            })
            .on('error', (error) => {
                mongoose.disconnect();
                rej(error);
            });
            return server;
        });
    }); */

        return new Promise((resolve, reject) => {
          mongoose.connect(databaseUrl, err => {
            if (err) {
                console.log(err);
              return reject(err);
            }
            server = app.listen(port, () => {
              console.log(`Your app is listening on port ${port}`);
              console.log(`You are connected to ${databaseUrl}`);
              resolve();
            })
              .on('error', err => {
                mongoose.disconnect();
                reject(err);
              });
          });
        });

}

// like 'runServer', this function also returns a promise
function closeServer() {
    return mongoose.disconnect().then(() => (
        new Promise((res, rej) => {
            logger.info('Closing server.');
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
} 

module.exports = { app, runServer, closeServer };