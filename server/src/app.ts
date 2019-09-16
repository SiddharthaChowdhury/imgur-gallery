import express from 'express';
import * as bodyParser from 'body-parser';
import { getImages } from './features/getImages/getImages';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/gallery', getImages);

app.listen(8000, () => {
    console.log('server listening on port :8000');
})
