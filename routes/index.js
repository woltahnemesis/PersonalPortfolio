//File Name: PersonalPortfolio
//Author's Name: Walter Magbanua
//Website Name: Web Portfolio
//Description: This website is a web portfolio and has 5 different pages (Home, About Me, Contact Me, Services, & Projects).
//Reference: 
//Contact Form Solution By: Codtex https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer
//How To Get Post Data By: The Net Ninja https://www.youtube.com/watch?v=rin7gb9kdpk
//The Nodemailer Module By: W3Schools https://www.w3schools.com/nodejs/nodejs_email.asp

'use strict';
var express = require('express');
var router = express.Router();

// Package to be able to send email
var nodemailer = require('nodemailer');

// These are needed when taking data from the form
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
// urlencodedParser must be in the parameter to get form data
router.post('/contact', urlencodedParser, function (req, res) {

    // To show inputs
    console.log(req.body);

    res.render('contact');

    // Data taken from the inputs
    var email = req.body.fromEmail;
    var password = req.body.password;
    var message = req.body.message;

    // To sign in gmail account
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: password
        }
    });

    // To send message via gmail
    var mailOptions = {
        from: email,
        to: 'alucardmagbanua@gmail.com',
        subject: 'Sending Email using Node.js',
        text: message
    };

    // To find errors
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
   
});

module.exports = router;
