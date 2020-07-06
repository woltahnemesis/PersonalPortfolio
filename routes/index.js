  'use strict';
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: "Web Portfolio" , name: "Rey Walter Magbanua"});
});

/* GET about me page. */
router.get('/aboutme', function (req, res) {
    res.render('aboutme', { title: 'About Me' });
});

/* GET contact page. */
router.get('/contact', function (req, res) {
    res.render('contact');
});

/* GET projects page. */
router.get('/project', function (req, res) {
    res.render('project', { title: 'Projects' });
});

/* GET services page. */
router.get('/service', function (req, res) {
    res.render('service', { title: 'Services' });
});

/* POST method for Contact Form */
router.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact');
    var email = req.body.fromEmail;
    var password = req.body.password;
    var message = req.body.message;
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: password
        }
    });

    var mailOptions = {
        from: email,
        to: 'alucardmagbanua@gmail.com',
        subject: 'Sending Email using Node.js',
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
   
});

module.exports = router;
