module.exports = {
  server: {
    env: process.env.SERVER_ENVIRONMENT || "development",
  },
  db: {
    postgres: {
      url: "",
    },
    sqlite: {
      url: "",
    },
    redis: {
      url: "",
    },
  },
  auth: {
    secret: process.env.AUTH_SECRET || "TOP_SECRET",
    options: {
      expiresIn: "12h", // 1d
      jwtHeaderKey: "Authorization",
    },
    cookie: {
      httpOnly: true,
      sameSite: true,
      signed: true,
      // secure: true,
    },
  },
};
module.exports = {
  server: {
    env: process.env.SERVER_ENVIRONMENT || "development",
  },
  db: {
    postgres: {
      url: "",
    },
    sqlite: {
      url: "",
    },
    redis: {
      url: "",
    },
  },
  auth: {
    secret: process.env.AUTH_SECRET || "TOP_SECRET",
    options: {
      expiresIn: "12h", // 1d
      jwtHeaderKey: "Authorization",
    },
    cookie: {
      httpOnly: true,
      sameSite: true,
      signed: true,
      // secure: true,
    },
  },
};