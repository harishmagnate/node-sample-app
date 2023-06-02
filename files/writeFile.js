import { open, openSync, write, writeFile, writeFileSync, close } from "fs";

let content = "File content to demo write capability. ";

// Async file write to create and write a file. The directory must exist else it will error
writeFile("files/data/write-file.txt", content, (err) => {
  if (err) throw err;
  console.info("File created successfuly");

  // Async file open to append data to existing file.
  open("files/data/write-file.txt", "a+", (err, fileDescriptor) => {
    if (err) throw err;
    console.info(fileDescriptor);
    write(fileDescriptor, "New File data from Node Code", (error, response) => {
      if (error) throw error;
      console.info(response);
    });
    // At the end close the file, use file Descriptor as arg.
    close(fileDescriptor);
  });
});


content = "File content to demo write sync capability.";
writeFileSync("files/data/write-file-sync.txt", content);