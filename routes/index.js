/* 
File Name: PersonalPortfolio
Author's Name: Walter Magbanua
Website Name: Web Portfolio
Description: This website is a web portfolio and has 5 different pages (Home, About Me, Contact Me, Services, & Projects).
*/
  

'use strict';
var express = require('express');
var router = express.Router();

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
    res.render('contact', { title: 'Contact Me' });
});

/* GET projects page. */
router.get('/project', function (req, res) {
    res.render('project', { title: 'Projects' });
});

/* GET services page. */
router.get('/service', function (req, res) {
    res.render('service', { title: 'Services' });
});

module.exports = router;
