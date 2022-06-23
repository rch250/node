const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));

app.get('/firstview', (req,res) => {
    res.type('text/html');
    res.render('firstview',{myName:'Robert Heintze',myEmail:'rch250@gmail.com'});
});

app.get('/reservations', (req,res) => {
    res.type('text/html');
    res.render('reservations');
});

app.listen(3000);