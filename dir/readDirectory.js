import { readdirSync } from "fs";

const files = readdirSync("files/data/", { withFileTypes: true })
  .filter((item) => !item.isDirectory())
  .map((item) => item.name);

// Nested directory reads
const readAllFiles = (dir, files = []) => {
  files.push(
    readdirSync(dir, { withFileTypes: true })
      .filter((item) => !item.isDirectory())
      .map((item) => item.name)
  );

  const dirs = readdirSync(dir, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => `${dir}${item.name}/`);

  if (dirs && dirs.length > 0) {
    dirs.forEach((subDir) => readAllFiles(subDir, files));
  } else {
    return files.flat();
  }
};

console.info(readAllFiles("files/data/"));
