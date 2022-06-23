const express = require('express');
var app = express();
var sql = require("mssql");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));

var sql = require("mssql");

var config = {
    user: '195Nstudent',
    password: '195Nstudent',
    server: 'cisdbss.pcc.edu',
    database: 'PHT',
    options: {
        encrypt: false
    }
};

function displayTours(){

    sql.connect(config, function (err) {
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
        request.query("SELECT tourID, title, price FROM tour", function (err, data) {
            if (err) console.log(err)

            // send records as a response
            console.log(data.recordset);
        });
    });
}

displayTours();

app.get('/reservations', (req,res) => {
    sql.connect(config, function (err) {
        var request = new sql.Request();
        request.query("SELECT tourID, title, price FROM tour", function (err, data) {
            res.type('text/html');
            res.render('reservations', {tours: data.recordset});
        });
    });
});


app.post('/confirmation', (req,res) => {
    sql.connect(config, () => {

        var tourID          = req.body.tour
        var first_name      = req.body.myfname
        var last_name       = req.body.mylname
        var email           = req.body.myemail
        var phone           = req.body.myphone
        var date            = req.body.mydate
        var participants    = req.body.mygroup
        var sensitivites    = req.body.mycomments

        var request = new sql.Request();

        request.input('itour',     sql.Int, tourID);
        request.input('ifname',    sql.VarChar, first_name);
        request.input('ilname',    sql.VarChar, last_name);
        request.input('iemail',    sql.VarChar, email);
        request.input('iphone',    sql.VarChar, phone);
        request.input('idate',     sql.DateTime, date);
        request.input('igroup',    sql.Int, participants);
        request.input('icomments', sql.VarChar, sensitivites);

        request.query("INSERT INTO reservation(tourID,first_name,last_name,email,phone,date,participants,sensitivities) values(@itour,@ifname,@ilname,@iemail,@iphone,@idate,@igroup,@icomments)",
            function (err) {
                if (err)
                {
                    console.log(err);
                }
                res.render('confirmation', {CTour: tourID, CDate:date, CGroup:participants});
            });
    })
})

app.listen(3000);