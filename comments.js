// Create web server for the comments page

// Import modules
const express = require('express');
const router = express.Router();
const fs = require('fs');

// Import the database module
const db = require('../models');

// Create the route for comments page
router.get('/comments', (req, res) => {
    // Get the comments from the database
    db.Comment.findAll().then((comments) => {
        // Render the comments page
        res.render('comments', {
            comments: comments
        });
    });
});

// Create the route for the comments page
router.post('/comments', (req, res) => {
    // Get the comments from the database
    db.Comment.create({
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment
    }).then(() => {
        // Redirect to the comments page
        res.redirect('/comments');
    });
});

// Export the module
module.exports = router;

