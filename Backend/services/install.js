const conn = require("../config/db.config");
const fs = require("fs");

async function install() {
  const queryfile = __dirname + "/sql/initial-queries.sql";
  console.log("Query file path:", queryfile);

  if (!fs.existsSync(queryfile)) {
    console.log("SQL file does not exist:", queryfile);
    return { status: 500, message: "SQL file not found" };
  }

  let queries = [];
  let finalMessage = {};
  let templine = "";

  const lines = fs.readFileSync(queryfile, "utf-8").split("\n");

  lines.forEach((line) => {
    if (line.trim().startsWith("--") || line.trim() === "") {
      return;
    }
    templine += line;
    if (line.trim().endsWith(";")) {
      const sqlQuery = templine.trim();
      queries.push(sqlQuery);
      templine = "";
    }
  });


  for (let i = 0; i < queries.length; i++) {
    try {
      console.log("Executing query:", queries[i]); // Log the query being executed
      const result = await conn.query(queries[i]);
      console.log("Query executed successfully:", result); // Log the result
    } catch (err) {
      console.error("Error executing query:", queries[i], err); // Log the error
      finalMessage.message = "Not all tables are created";
    }
  }

  if (!finalMessage.message) {
    finalMessage.message = "All tables are created";
    finalMessage.status = 200;
  } else {
    finalMessage.status = 500;
  }

  return finalMessage;
}

module.exports = { install };
