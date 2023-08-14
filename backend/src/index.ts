import express, { Router } from 'express';
const cors = require('cors');
import mongoose, { model } from 'mongoose';
import migrate from './migration/dataMigration';
import RootRoute from './routes/rootRoute';

require('dotenv').config();

const main = async (): Promise<void> => {
  const app = express();
  app.use(express.json({ type: '*/*' }));
  app.use(cors());
  app.use((req, res, next) => {
    console.log("ada request");
    next();
  })

  try {
    if(process.env.DB_CONNECTION_URI === undefined) {
      throw new Error("database URI is undefined");
    }
    await mongoose.connect(process.env.DB_CONNECTION_URI);
    console.log("connected to the database");
    await migrate();
    console.log("data migration success");
  } catch (error) {
    console.log(`database error: ${error}`);
  }

  const rootRoute = new RootRoute(app);
  rootRoute.registerRoutes();

  const port = process.env.APP_PORT
  if (port === undefined) {
    throw new Error('Port is undefined.')
  }

  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
}

main()
  .then(() => {
    console.log('App started.')
  })
  .catch((error) => {
    console.log('Error starting app: ', error)
  })
