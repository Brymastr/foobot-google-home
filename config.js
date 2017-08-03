module.exports = () => {
  const env = process.env;
  return config = {
    PORT: env.PORT || 3102,
    
    NGROK_TOKEN: env.NGROK_TOKEN
  }
};

