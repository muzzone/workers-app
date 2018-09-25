const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/Users');
const keys = require('../config/keys');

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email});

  if (candidate) {
    const passwordResult = bcrypt.compareSync(req.body.pass.toString(), candidate.pass.toString());
    if (passwordResult) {
      const token = jwt.sign({
        email: candidate.email,
        name: candidate.name,
        _id: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60});
      res.send({
        user: candidate,
        token: `Bearer ${token}`
      });
    } else {
      res.status(401).json({
        message: 'wrong password'
      })
    }
  } else {
    res.status(404).json({
      message: 'Email not found'
    })
  }
};

// POST localhost:8080/api/register
// body: {
// 	"email": mail,
// 	"name": name,
// 	"pass": 123
// }
module.exports.register = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email});
  console.log('request body', req.body);

  if (candidate) {
    res.status(409).json({
      message: 'Email already used'
    })
  } else {
    const salt = bcrypt.genSaltSync(10);
    const pass = req.body.pass;
    const user = new User({
      email: req.body.email,
      name : req.body.name,
      pass : bcrypt.hashSync(pass, salt)
    });
    user.save()
      .then((savedUser) => {

        const user = {
          _id: savedUser._id,
          name: savedUser.name,
          email: savedUser.email
        };
        const token = jwt.sign(user, keys.jwt, {expiresIn: 60 * 60});

        const response = {
          user,
          token : `Bearer ${token}`
        };

        res.status(200).json(response);
      })
      .catch(e => {console.log('create user err', e)});
  }
};