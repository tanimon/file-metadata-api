const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

const indexRouter = require('./routes/index.route');
const apiRouter = require('./routes/api.route');

app.use('/', indexRouter);
app.use('/api', apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
