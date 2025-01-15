const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const startoRoutes = require('./routes/starto');

const app = express();

mongoose.connect('mongodb+srv://yoanncayron:Njikolpm54200@cluster0.k6fsk.mongodb.net/STARTO?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected !'))
  .catch((e) => console.log('MongoDB connexion failed.', e));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/auth', userRoutes);
app.use('/api/starto', startoRoutes);

module.exports = app;