const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {User} = require('../src/db/sequelize');
require('dotenv').config();

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false
}, (username, password, done) => {
  User.findOne({
    where: {
      username
    }
  })
    .then(user => {
      if (!user || !User.validatePassword(password, user.hash)) {
        return done({error: 'Invalid password or email address!'}, false);
      }
      return done(null, user);
    }).catch(done);
}));

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_KEY
};

passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
    User.findByPk(payload.id).then(user => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    }).catch(done);
  })
);