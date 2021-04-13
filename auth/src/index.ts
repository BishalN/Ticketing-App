import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/users/getcurrentuser', (req, res) => {
  res.send('The request was recieved');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
  console.log('object!!!');
});
