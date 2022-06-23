let http = require('http');
let fs = require('fs');
let path = require('path');
let nodemailer = require('nodemailer');
let qs = require('querystring');
let util = require('util');
let connect = require('connect');
let mime = require('mime-types');

let app = connect();

function logit(req, res, next) {
    util.log(util.format('Request received: %s, %s', req.method, req.url));
    next();
}

function send404(res) {
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.write('Error 404: Resource not found.');
    res.end();
}

// let server = http.createServer(function (req, res) {
    function serverConfig(req, res, next) {
     //   let mimeLookup = {
     //       '.css': 'text/css',
     //      '.png': 'image/png',
     //       '.jpg': 'image/jpeg',
     //       '.js': 'application/javascript',
     //       '.html': 'text/html'//  };

        //   if(req.method == 'GET') {

        // resolve file path to file system
        let fileurl;
        if (req.url == "/") {
            fileurl = '/index.html';
        } else {
            fileurl = req.url;
        }

        let filepath = path.resolve('./pht' + fileurl);
 //       console.log(filepath);

        //lookup mime type
    //    let fileExt = path.extname(filepath);
    //    let mimeType = mimeLookup[fileExt];
        let mimeType = mime.lookup(filepath);
     //   console.log(mimeType);
        if (!mimeType && (fileurl !== '/send') && (fileurl !== '/reserve')) {
            send404(res);
            return;
        }

        //check to see if we have the file we requested
        fs.stat(filepath, function (err) {
            // if the file doesn't exist
            if (err && (fileurl !== '/send') && (fileurl !== '/reserve')) {
                send404(res);
                return;
            };

            //finally stream the file
            if (req.url == '/send' || req.url == '/reserve') {
                if (req.url == '/send') {
                    filepath = './pht/sent.html';
                } else filepath = './pht/thankyou.html';
                res.writeHead(200, {'content-Type': 'text/html'});
            } else {
                res.writeHead(200, {'content-Type': mimeType});
            }
            fs.createReadStream(filepath).pipe(res);
        });
    }

        function contactEmail(req, res, next) {
            if (req.method == 'POST') {
                // get the form data and parse to variables
                req.on('data', function (data) {
                    let body = '';
                    body += data;
                    let result = qs.parse(body);
                    let name = result.name;
                    let email = result.email;
                    let question = result.question;

                    //create HTML output
                    let output = '<p>You have a new message</p>' +
                        '<h3>Message</h3>' +
                        '<ul>' +
                        '<li>Name: ' + name + '</li>' +
                        '<li>Email: ' + email + '</li>' +
                        '<li>Question: ' + question + '</li>' +
                        '</ul>';
                    //create connection to email server
                    let transporter = nodemailer.createTransport({
                        host: 'mail.pcc-webtech.com',
                        port: 587,
                        secure: false,
                        auth: {
                            user: 'students@pcc-webtech.com',
                            pass: 'zY?&RejYaC@F'
                        },
                        tls: {
                            rejectUnauthorized: false
                        }
                    });

                    //setup email
                    let mailOptions = {
                        from: '"Nodemailer Contact" <students@pcc-webtech.com>',
                        to: 'robert.heintze@pcc.edu',
                        subject: 'Node Mailer Contact Submission',
                        html: output
                    };

                    //send this email
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Message sent %s', info.messageId);
                        }
                    });
                });
            } else {
                send404(res);
            }
            next();
        }


function reservationEmail(req, res, next) {
    if (req.method == 'POST') {
        // get the form data and parse to variables
        req.on('data', function (data) {
            let body = '';
            body += data;
            let result = qs.parse(body);
            let tour = result.tour;
            let myfname = result.myfname;
            let mylname = result.mylname;
            let myemail = result.myemail;
            let myphone = result.myphone;
            let mydate  = result.mydate;
            let mygroup = result.mygroup;
            let mycomments = result.mycomments;

            //create HTML output
            let output = '<p>You have a new message</p>' +
                '<h3>Message</h3>' +
                '<ul>' +
                '<li>Name: ' + myfname + ' ' + mylname + '</li>' +
                '<li>Email: ' + myemail + '</li>' +
                '<li>Phone: ' + myphone + '</li>' +
                '<li>Date: ' + mydate + '</li>' +
                '<li>Group: ' + mygroup + '</li>' +
                '<li>Comments: ' + mycomments + '</li>' +
                '</ul>';
            //create connection to email server
            let transporter = nodemailer.createTransport({
                host: 'mail.pcc-webtech.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'students@pcc-webtech.com',
                    pass: 'zY?&RejYaC@F'
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            //setup email
            let mailOptions = {
                from: '"Nodemailer Contact" <students@pcc-webtech.com>',
                to: 'robert.heintze@pcc.edu',
                subject: 'Node Mailer Contact Submission',
                html: output
            };

            //send this email
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log("sent mail error: ", error);
                } else {
                    console.log('Message sent %s', info.messageId);
                }
            });
        });
    } else {
        send404(res);
    }
    next();
}
 //   }).listen(3000);

app.use('/send', contactEmail);
app.use('/reserve', reservationEmail);

app.use(logit);

app.use(serverConfig);

http.createServer(app).listen(3000);

console.log('server is running on port 3000');

