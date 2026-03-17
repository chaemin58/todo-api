import express from 'express';

const app = express();

app.get('/hello', (req, res) =>{
  res.send('ye Express!!')
});

app.listen(3000, () => console.log('Server Started'));