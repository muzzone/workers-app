const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/Users');
const keys = require('../config/keys');

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({login: req.body.login});

  if (candidate) {
    const passwordResult = bcrypt.compareSync(req.body.pass.toString(), candidate.pass.toString());
    if (passwordResult) {
      const user = {
        email: candidate.email,
        login: candidate.login,
        _id: candidate._id
      };
      const token = jwt.sign(user, keys.jwt, {expiresIn: 60 * 60});
      res.send({
        user,
        token: `Bearer ${token}`
      });
    } else {
      res.status(401).json({
        message: 'Wrong password'
      })
    }
  } else {
    res.status(404).json({
      message: 'User not found'
    })
  }
};

// POST localhost:8080/api/register
// body: {
// 	"email": mail,
// 	"login": login,
// 	"pass": 123
// }
module.exports.register = async function (req, res) {
  const candidateEmail = await User.findOne({email: req.body.email});
  const candidateLogin = await User.findOne({login: req.body.login});
  console.log('request body', req.body);

  if (candidateEmail) {
    res.status(409).json({
      message: 'Email already used'
    })
  } else if (candidateLogin){
    res.status(409).json({
      message: 'Login already used'
    })
  } else {
    const salt = bcrypt.genSaltSync(10);
    const pass = req.body.pass;
    const user = new User({
      email: req.body.email,
      login : req.body.login,
      pass : bcrypt.hashSync(pass, salt)
    });
    user.save()
      .then((savedUser) => {

        const user = {
          _id: savedUser._id,
          login: savedUser.login,
          email: savedUser.email
        };
        const token = jwt.sign(user, keys.jwt, {expiresIn: 60 * 60});

        const response = {
          user,
          token : `Bearer ${token}`
        };
        res.status(200).json(response);
      })
      .catch(e => {
          console.log('create user err', e),
          res.status(400).json({message: 'Something went wrong!'})
      });
  }
};