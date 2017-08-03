module.exports = () => {
  const env = process.env;
  return config = {
    PORT: env.PORT || 3102,
    URL: env.FOOBOT_GOOGLE_HOME_URL || 'https://bb522f5c.ngrok.io'
  }
};

