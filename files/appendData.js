import { appendFile, writeFile } from "fs";

const content = "File content to demo write capability. ";
writeFile("files/data/append-file.txt", content, (err) => {
    if (err) throw err;
    console.info("File created successfuly");
});

setTimeout(() => {
    console.info("Timing out")
}, 1000);

appendFile("files/data/append-file.txt", "\nNew line content added", (err, data) => {
    if (err) throw err;
    console.info(data)
})