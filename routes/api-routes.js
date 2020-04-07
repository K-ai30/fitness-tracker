var db = require("../models");

module.exports = function (app) {



  //since we already have an api-routes.js and an html-routes.js, put this in api-routes.js
// app.get("/continueWorkout", (req, res) => {
//     console.log(req);
//     db.Exercise.create(req.body)
//     .then(dbUser => {
//         res.json(dbUser);
//     })
//     .catch(err => {
//         res.json(err);
//     })
// });

  // GET method route
  app.get('/api/workouts', function (req, res) {
      db.Workout.find({})
        .then(function(data){

        console.log(data);

        res.json(data);
      });
  })
  
  // PUT method route (originally 2nd)
  app.put('/api/workouts/:id', function (req, res) {
    //console.log the req.body that 
    db.Workout.update({_id: req.params.id}, { $push: {exercises: req.body} })
    .then(function(data) {
      res.json(data);
    })
    console.log(req.body);
  })

  // POST method route (originally 1st)
  app.post('/api/workouts', function (req, res) {
    console.log(req.body);
    //use our db variable to insert a new record based on whatever req.body is (req.body may be empty, but thats ok, because our model can just create an ID and a timestamp)
    db.Workout.create({})
    .then(function(data) {
      res.json(data);
    })
  })

  app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({}).limit(6)
    .then(function (data) {
      console.log(data, `in the range api route`);
      res.json(data);
    })
  })

};