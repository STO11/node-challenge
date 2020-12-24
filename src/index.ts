import express from 'express';
import bodyParse from 'body-parser';

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

app.get('/', (req, res) => {
  // res.send('ok');
  res.json({
    message: process.env.GIPHY_KEY,
  });
});

app.listen(3000);
