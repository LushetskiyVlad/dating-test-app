const passport = require('passport');
const jwt = require('jsonwebtoken');
const {User} = require('../db/sequelize');

module.exports.profile = async (req, res, next) => {
  await passport.authenticate('jwt', function (err, user) {
    console.log(err);
    if (user) {
      res.sendStatus(200);
    } else {
      res.json();
    }
  })(req, res, next)
};

module.exports.getById = async (req, res) => {
  const id = req.params.userId;

  try {
    const data = await User.findByPk(id);

    res.status(200).json({
      user: {
        ...data.dataValues,
        hash: undefined
      }
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports.login = async (req, res, next) => {
  await passport.authenticate('local', (err, user) => {
    if (!user) {
      res.status(401).json({
        ...err
      });
    } else {
      const payload = {
        id: user.id,
        email: user.email,
        username: user.username
      };
      const token = jwt.sign(payload, process.env.JWT_KEY);

      res.status(200).json({
        token,
        userId: user.id,
        username: user.username,
        expiresIn: 3600
      });
    }
  })(req, res, next);
};

module.exports.register = async (req, res) => {
  const {username, email, password, gender, birthDate} = req.body;

  try {
    const user = await User.findOne({
      where: {
        username,
        email
      }
    });

    if (user) {
      res.status(409).json({
        error: 'User with that email already exists'
      });
    }

    await User.create({
      email,
      hash: User.generateHash(password),
      username,
      birthDate,
      gender
    });

    res.sendStatus(201);
  } catch (e) {
    console.log(e);
  }
}

module.exports.update = async (req, res) => {
  const {username, email, gender, birthDate, weight, height, city} = req.body;

  try {
    await User.update({
      username, email, gender, birthDate, weight, height, city
    }, {
      where: {
        id: req.params.userId
      }
    });

    res.sendStatus(201);
  } catch (e) {
    console.log(e);
  }
}

module.exports.delete = async (req, res) => {
  const {id} = req.body;

  try {

    await User.destroy({
      where: {id}
    });

    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
}