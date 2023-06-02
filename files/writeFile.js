import { open, openSync } from "fs";

open("files/write-file.txt", "w+", (err, data) => {
  if (err) throw err;
  console.info(data);
});
