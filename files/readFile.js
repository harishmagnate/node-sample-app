import { readFile, readFileSync } from "fs";

//Emoty file
readFile(
  "files/data/empty-file.txt",
  { encoding: "utf-8", flag: "r" },
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

//File with content no encoding
readFile("files/data/sample-file.txt", (err, data) => {
  if (err)
    console.error(
      `Error in file processing, code - ${err.code}, msg - ${err.message}`
    );
  console.log(data);
});

//File with content no encoding
readFile("files/data/sample-file1.txt", (err, data) => {
  if (err)
    console.error(
      `Error in file processing, code - ${err.code}, msg - ${err.message}`
    );
  console.log(data);
});

//Sync File without callback. Waits for the response before processing anything else.
console.time("sync-file");
try {
  const data = readFileSync("files/data/sync-file-test.txt");
  console.info(data);
} catch (err) {
  console.error(
    `Error in file processing, code - ${err.code}, msg - ${err.message}`
  );
}
console.timeEnd("sync-file");

//Sync File error without callback. Waits for the response before processing anything else.
console.time("sync-file");
try {
  const data = readFileSync("files/data/sync-file-test2.txt");
  console.info(data);
} catch (err) {
  console.error(
    `Error in sync file processing, code - ${err.code}, msg - ${err.message}`
  );
}
console.timeEnd("sync-file");

console.info("Welcome to file processing");
