const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/blog',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
