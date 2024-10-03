const User = require('../models/userModel');
const {hashPassword} =  require("../utils/bcrypt");
const {generateToken} = require("../utils/jwt");

exports.addUser = async (req, res) => {
  try {
    req.body.isAdmin = false
    req.body.password = hashPassword(req.body.password )
    const user = new User(req.body);
    await user.save();
    let accessToken = generateToken(user.id, "access")
    let refreshToken = generateToken(user.id, "refresh")
    res.status(200).json({"accessToken": accessToken, "refreshToken": refreshToken});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};
