/* eslint-disable no-console */
import app from '.';

const port = 3000;

export const server = app.listen(port).on('error', (err) => {
  console.error('ERROR: ', err);
  process.exit(1);
});

console.log('Mock Server Listening on:', port);
