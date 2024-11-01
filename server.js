const http = require('http');
const app = require('./app');
const {connectDatabase} = require('./db/mongobd')



const  PORT  = 5000
app.set('port', PORT);

const server = http.createServer(app);

// starting up server and Testing db connection
async function start() {
  try {
    await connectDatabase();
    server.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

start();
