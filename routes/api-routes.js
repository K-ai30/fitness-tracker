var db = require("../models");

module.exports = function (app) {



  //since we already have an api-routes.js and an html-routes.js, put this in api-routes.js
// app.post("/continueWorkout", (req, res) => {
//     console.log(req);
//     db.Exercise.create(req.body)
//     .then(dbUser => {
//         res.json(dbUser);
//     })
//     .catch(err => {
//         res.json(err);
//     })
// });
  
  // POST method route
  app.post('/api/workouts', function (req, res) {
    console.log(req.body);
    //use our db variable to insert a new record based on whatever req.body is (req.body may be empty, but thats ok, because our model can just create an ID and a timestamp)
    res.send('POST request to the homepage')
  })

    
  // PUT method route
  app.put('/api/workouts', function (req, res) {
    //console.log the req.body that 
    console.log(req.body);
    //use our db variable to insert a new record based on whatever req.body is (req.body may be empty, but thats ok, because our model can just create an ID and a timestamp)
    res.send('POST request to the homepage')
  })
};