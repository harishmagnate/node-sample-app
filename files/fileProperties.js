import { statSync } from "fs";

const properties = statSync("files/sample-file.txt");
const fileSize = (properties.size / 1024).toFixed(4);

console.log(`Properties - ${JSON.stringify(properties)}`);
console.log(`File Size - ${fileSize} KB`);
