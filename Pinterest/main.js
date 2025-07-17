const  server=require('./app');
const port = 3001;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the server for testing purposes
module.exports = server;