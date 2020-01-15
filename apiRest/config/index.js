const sql = require("mssql");
// const dbConfig = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   server: process.env.DB_SERVER,
//   database: process.env.DB_DATABASE,
//   port: process.env.DB_PORT,
//   options: {
//     encrypt: false
//   }
// };

// sql.connect(dbConfig, function(err) {
//   if (err) {
//     console.error(err);
//     throw err;
//   }
//   console.log("Connected!");
// });

// exports.config = dbConfig;

exports.doQuery = async (sqlQuery, callback) => {
  try {
    await sql.connect({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      server: process.env.DB_SERVER,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT,
      options: {
        encrypt: false
      }
    });
    console.log("Connected!");
    let result = await sql.request().query(sqlQuery);
    callback(result);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
