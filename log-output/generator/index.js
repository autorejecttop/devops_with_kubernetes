const crypto = require("crypto");
const {
  appendFileSync,
  readFileSync,
  existsSync,
  mkdirSync,
} = require("node:fs");

function createRandomStringWithTimestamp() {
  const randomString = crypto.randomUUID();
  return `${new Date().toISOString()}: ${randomString}`;
}

function appendRandomStringToFile(randomString) {
  if (!existsSync("files")) {
    mkdirSync("files");
  }

  try {
    appendFileSync("files/log-output.txt", `${randomString}\n`);
  } catch (err) {
    console.error(err);
  }
}

function readLogOutputFileToString() {
  try {
    const data = readFileSync("files/log-output.txt");

    return data.toString();
  } catch (err) {
    console.error(err);
  }
}

appendRandomStringToFile(createRandomStringWithTimestamp());
console.log(readLogOutputFileToString());

setInterval(() => {
  appendRandomStringToFile(createRandomStringWithTimestamp());
  console.log(readLogOutputFileToString());
}, 5000);
