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

function readPingPongFileToString() {
  try {
    const data = readFileSync("files/ping-pong.txt");

    return data.toString();
  } catch (err) {
    console.error(err);
  }
}

function readInformationFileToString() {
  try {
    const data = readFileSync("config/information.txt");

    return data.toString();
  } catch (err) {
    console.error(err);
  }
}

app.get("/", async (req, res) => {
  const logOutputFileContent = readLogOutputFileToString();
  // const pingPongFileContent = readPingPongFileToString();
  const pongResponse = await fetch("http://ping-pong:3456/pings");
  const pongCounter = await pongResponse.text();

  const informationFileContent = readInformationFileToString();

  const outputString =
    `file content: ${informationFileContent}` +
    "<br>" +
    `env variable: MESSAGE=${process.env.MESSAGE}` +
    "<br>" +
    logOutputFileContent +
    "<br>" +
    `Ping / Pongs: ${pongCounter}`;

  res.send(outputString);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
