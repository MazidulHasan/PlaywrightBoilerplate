// env.config.js - choose which config to export by setting ENV variable
const env = process.env.TEST_ENV || 'local';

const configs = {
  local: require('./config.local'),
  qa: require('./config.qa'),
  prod: require('./config.prod')
};

module.exports = configs[env];