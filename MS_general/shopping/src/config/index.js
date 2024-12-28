const dotEnv = require("dotenv")

if (process.env.NODE_ENV !== "prod") {    
  dotEnv.config({ path: './.env.dev' });
} else {
  dotEnv.config();
}

module.exports={
    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URL,
}