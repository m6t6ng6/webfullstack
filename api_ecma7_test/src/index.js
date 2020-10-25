import express from 'express';
import morgan from 'morgan';
import router from './router';
import dotenv from 'dotenv';

dotenv.config( { path: '.env' } );

const app = express();

app.use( morgan( 'dev' ));

router( app );

const port = process.env.NODE_PORT;

app.listen( port, () => {
  console.log("running on port " + port);
})