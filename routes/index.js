'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: "Portfolio" , name: "Rey Walter Magbanua"});
});

router.get('/aboutme', function (req, res) {
    res.render('aboutme', { title: 'About Me' });
});

router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact' });
});

router.get('/project', function (req, res) {
    res.render('project', { title: 'Projects' });
});

router.get('/service', function (req, res) {
    res.render('service', { title: 'Services' });
});

module.exports = router;
