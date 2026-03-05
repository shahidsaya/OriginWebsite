const basicAuth = require("express-basic-auth");

module.exports = {
  name: "cr-basic-auth",
  construct: (self, options) => {
    if (process.env.GATE == "TRUE") {
      self.expressMiddleware = {
        when: "beforeRequired",
        middleware: [
          basicAuth({
            challenge: true,
            users: { origin: "origin" },
          }),
        ],
      };
    } else {
      return true;
    }
  },
};
