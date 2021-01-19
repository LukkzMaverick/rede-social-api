const jwt = require('jsonwebtoken');
const MSGS = require('../messages')

module.exports = function (req, res, next) {
  const token = request.header('x-auth-token')
    if(!token){
        return response.status(401).json({errors: [{msg: MESSAGES.WITHOUT_TOKEN}]})
    }

  try {
    jwt.verify(token, jwtSecret, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: MSGS.INVALID_TOKEN });
      }
      req.user = decoded.user;
      next();
    })

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: MSGS.GENERIC_ERROR });
  }
}
