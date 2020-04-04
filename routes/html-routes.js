const path = require('path')

module.exports = function(app) {
// GET method route for index.html page
app.get('/', function (req, res) {
    // console.log(req);
    // console.log("hitting route!");
    // res.send('GET request to the homepage')
    res.sendfile(path.join(__dirname, '../public/index.html'));
})

// Define a GET route for "/exercise" that sends back exercise.html
app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// Assume we also need a "/stats" route that sends back stats.html
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

}