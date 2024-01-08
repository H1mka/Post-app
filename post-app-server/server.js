const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/post.routes');

const app = express();
const PORT = process.env.PORT || 8080;

try {
  app.use(express.json());
  app.use(cors());
  app.use('/api', postRouter);

  app.listen(PORT, (err) => (err ? console.log(err) : console.log(`Listening Port ${PORT}`)));
} catch (error) {}
