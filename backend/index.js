require('dotenv').config();
const { db } = require('./config/config');
const app = require('./app');

const { PORT = 8080, BASE_URL } = process.env;

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on: ${BASE_URL}:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  });
