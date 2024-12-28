const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { APP_SECRET } = require("../config");

module.exports.validateSignature = async (req) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const payload = await jwt.verify(token, APP_SECRET);
    req.user = payload;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};


module.exports.FormateData = async (data) => {
    if (data) {
      return {data} 
    } else {
      throw new Error("Data not Found");
    }
  };