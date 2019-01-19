const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/data.json');
const middlewares = jsonServer.defaults();
const db = require('./data.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login', (req, res) => {
  const { username, password, role } = req.body;
  switch(role) {
    case 'admin': {
      if (username === 'admin' && password === 'admin') {
        res.send({ username, role, token: 'admin-token' });
        return;
      }
      break;
    }
    case 'client': {
      if (username === 'client' && password === 'client') {
        res.send({ username, role, token: 'client-token' });
        return;
      }
      break;
    }
  }
  res.status(401).send('Incorrect username or password');
});

server.post('/logout', (req, res) => {
  res.sendStatus(200);
});

server.use('/profile', (req, res, next) => {
  if (req.headers.authorization === 'client-token') {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
