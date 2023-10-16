const { Client } = require('pg');

const client = new Client({
  user: "postgres",
  password: "Scorpio6356.",
  host: "localhost",
  database: "gamestore",
  port: 3000
});

module.exports = client;