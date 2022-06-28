const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const JwtCookieComboStrategy = require("passport-jwt-cookiecombo");

const config = require("../../bin/config");
const User = require("../../models/admin");

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const users = await User.findAll({ where: { email } });
        const user = users[0];

        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: "Wrong Password" });
        }

        return done(null, user, { message: "Logged in Successfully" });
      } catch (error) {
        console.error(error);
        return done(error);
      }
    }
  )
);

passport.use(
  new JwtCookieComboStrategy(
    {
      secretOrPublicKey: config.auth.secret,
      jwtVerifyOptions: config.auth.options,
    },
    async (token, done) => {
      if (!token) {
        console.error("no token");
        return done(null, false);
      }
      try {
        return done(null, token.user);
      } catch (error) {
        console.error(error);
        done(error);
      }
    }
  )
);

function authMiddleware(req, res, next) {
  passport.authenticate("jwt-cookiecombo", { session: false }, (err, user) => {
    if (err || !user) {
      console.error(err);

      return res.status(err.code || 500).json({
        success: false,
        message:
          err.message || "Please Contact support at tech@convivialtechhub.com",
      });
    }

    req.user = user;

    return next();
  })(req, res, next);
}

module.exports ={authMiddleware}
