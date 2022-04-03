const { pool } = require('../../config/database');

// Data Access Object
exports.selectRestaurants = async function (connection, category) {
  const selectAllRestaurantsQuery = `SELECT title, address, category, videoUrl FROM Restaurants where status = 'A';`;
  const selectCatagorizedRestaurantsQuery = `SELECT title, address, category, videoUrl FROM Restaurants where status = 'A' and category = ?;`;

  const Params = [category];
  const Query = category ? selectCatagorizedRestaurantsQuery : selectAllRestaurantsQuery;
  console.log(Query);

  const rows = await connection.query(Query, Params);

  return rows;
};
