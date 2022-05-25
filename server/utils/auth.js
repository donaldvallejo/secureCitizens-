const jwt = require('jsonwebtoken');
const expiration = '2h';

module.exports = {
  signToken: function ({ email, _id }) {
    const payload = { email, _id };
    return jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: expiration });
  },
  authMiddleWare: async function (req, res, next) {
    //console.log("in the middleware!!\n=====================")
    
    try {
      if (!req.headers.authorization) {
        throw new Error('invalid header');
      }
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decodedToken.userId;
      if (req.body.userId && req.body.userId !== userId) {
        throw new Error('unauthorized user');
      } else {
        next();
      }
    } catch(err) {
      res.status(401).json({
        error: err.message,
      });
    }
  }
};