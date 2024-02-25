const dotenv = require('dotenv')
dotenv.config();

module.exports = {
    API_KEY: process.env.api_key,
    PORT: process.env.PORT
}