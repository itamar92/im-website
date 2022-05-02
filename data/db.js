const users = require("./usersList.json");
const products = require("./Products-db.json");

module.exports = () => ({
  users: users,
  products: products,
});
