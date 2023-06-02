import { unlink, writeFile } from "fs";

const content = "File content to demo write capability. ";
writeFile("files/data/unlink-file.txt", content, (err) => {
  if (err) throw err;
  console.info("File created successfuly");

  unlink("files/data/unlink-file.txt", err => {
    if (err && err.code === "ENOENT") {
      console.debug("No file exists");
      throw err;
    }
    if (err) throw err;
    console.info("File deleted")
  });
});

unlink("files/data/unlink-file.txt", err => {
  if (err && err.code === "ENOENT") {
    console.debug("No file exists");
  }
  else if (err) throw err;
  else {
    console.info("File deleted.")
  }
});
