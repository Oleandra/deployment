const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
console.log(keys)
const app = express();
app.use(bodyParser.json());

require('./models/gatos');
mongoose.connect(keys.MONGO_URL);

   require('./routes/gatosRoutes')(app);

app.listen(process.env.PORT || 5000);