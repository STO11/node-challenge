import express from 'express';
import bodyParse from 'body-parser';
import routespuppy from './routes/recipepuppy.route';

// initialize express
const app = express();
// json encode
app.use(bodyParse.json());
// decode params
app.use(bodyParse.urlencoded(
  {
    extended: false,
  },
));

app.use('/api', routespuppy);

app.listen(3000);
