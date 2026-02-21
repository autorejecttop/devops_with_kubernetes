const { readFileSync } = require("node:fs");

const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

function readLogOutputFileToString() {
  try {
    const data = readFileSync("files/log-output.txt");

    return data.toString();
  } catch (err) {
    console.error(err);
  }
}

app.get("/", (req, res) => {
  const logOutputFileContent = readLogOutputFileToString();

  res.send(logOutputFileContent);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
