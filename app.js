const express = require('express');
const app = express();
const port = 8080;

app.get("/", function(req, res) {
    res.sendFile('./index.html', {root: __dirname });
});

app.get("/about", function(req, res) {
    res.sendFile('./about.html', {root: __dirname });
});

app.get("/contact-me", function(req, res) {
    res.sendFile('./contact-me.html', {root: __dirname });
});

// Handle 404 responses by showing 404 webpage to the user
app.use(function(req, res, next) {
    res.status(404);
    res.sendFile('./404.html', {root: __dirname });
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});