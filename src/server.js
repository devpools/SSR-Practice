import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';
const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const appString = renderToString(<App {...initialState} />);

  res.send(template({
    body: appString,
    title: 'Hello DevPools from the server',
	initialState: JSON.stringify(initialState)
  }));
});
console.log("Server listen port 8080");
server.listen(8080);
