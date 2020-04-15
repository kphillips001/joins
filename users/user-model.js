const db = require("../data/db-config.js");

module.exports = {
  all,
  findById,
  create,
  update,
};

// implementation details
function all() {
  return db("users");
}

// implement a method to find a user by id
function findById(id) {
  return db("users").where({ id }).first();
}

function create(user) {
  return db("users")
    .insert(user, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}
