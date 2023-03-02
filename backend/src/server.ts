import express from 'express';
import AdsRoute from './routes/Ads.route'

const app = express();

app.use(AdsRoute);

app.listen(3001);