var expressSession = require("express-session");
var mongoStore = require("connect-mongodb-session")(expressSession);

var store = new mongoStore({
  uri: 'mongodb://student1:<student1>@ds034807.mlab.com:34807/cookbook', //CHANGE ME!!!!!!
  collection: "Sessions"
});

store.on("error", function (err) {
  console.log("[SESSION ERROR]", err);
});

// @ts-ignore
var session = expressSession({
  secret: "I dont know what this is", //CHANGE ME!!!!
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 2,
  },
  store,
  resave: true,
  saveUninitialized: true
});

module.exports = session;