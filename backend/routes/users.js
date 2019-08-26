const router = require('express').Router();
let User = require('../models/user.model');
//the user is the model that we created with mongoose in the folder above
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});
///this is a post request so we are sending this to the server

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});
        //the new use is saved to the database

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

