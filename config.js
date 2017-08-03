module.exports = () => {
  const env = process.env;
  return config = {
    PORT: env.PORT || 3102,
    
    NGROK_TOKEN: env.NGROK_TOKEN || '6Vcg38cCn34fo9T1maWYj_6nuWaLy45rLQrjsnKNdvb'
  }
};

