const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res)=> {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+err));

});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const mail = req.body.mail;
    const password = req.body.password;
    const newUser = new User ({
        username,
        mail,
        password,
    });

    newUser.save()
    .then(()=>res.json('Nuevo usuario!'))
    .catch(err => res.status(400).json('Error: '+err));


});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status.json('Error: '+err));
});


router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
      .then(usr => {
        usr.username = req.body.username;
        usr.mail = req.body.mail;
        usr.password = req.body.password;
  
        usr.save()
          .then(() => res.json('Usuario updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports = router;