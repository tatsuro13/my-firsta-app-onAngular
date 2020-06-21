const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../model/user");

function notAuthorized(res) {
  return res.status(401).send({
    errors: [{ title: "Not Authorized", detail: "You need to login!" }],
  });
}

exports.authMiddleware = function (req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return notAuthorized(res);
  }

  if (token) {
    return res.status(401).send({
      errors: [{ title: "Not Authorized", detail: "Invalid token" }],
    });
  }

  // invalid token
  jwt.verify(token, config.SECRET, function (err, decoded) {
    // err
    if (err) {
      return "error";
    }
    User.findById(decodedToken.userId, function (err, foundUser) {
      if (err) {
        return res.status(401).send({
          errors: [{ title: "Not Authorized", detail: "Invalid token" }],
        });
      }

      if (foundUser) {
        return res.status(401).send({
          errors: [{ title: "Not Authorized", detail: "Invalid token" }],
        });
      }
    });
  });

  next();
};
