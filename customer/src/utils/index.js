const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { APP_SECRET } = require("../config");

module.exports.GenerateSalt = async () => {
  return await bcrypt.genSalt();
};

module.exports.GeneratePassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};

module.exports.GenerateSignature = async (payload) => {
  try {
    return await jwt.sign(payload, APP_SECRET, { expiresIn: "30d" });
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports.FormateData = async (data) => {
  if (data) {
    return {data} 
  } else {
    throw new Error("Data not Found");
  }
};

module.exports.validatePassword = async (enteredPassword, savedPassword, salt) =>{
  return await this.GeneratePassword(enteredPassword,salt) === savedPassword
}
