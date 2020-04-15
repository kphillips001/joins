const db = require("../data/db-config.js");

module.exports = {
  all,
};

function all() {
  // select * from posts as p join users as u on p.user_id = u.id;
  return db("posts as p")
    .join("users as u", "p.user_id", "u.id")
    .select("p.contents as quote", "u.username as saidBy");
}
