const fs = require("fs");
const path = require("path");

const dataDirectory = path.resolve(__dirname, "..", "public", "data");
const outputDirectory = path.join(dataDirectory, "search-index");
const collections = ["aratis", "stotras"];

fs.mkdirSync(outputDirectory, { recursive: true });

collections.forEach((collection) => {
  const entriesPath = path.join(dataDirectory, `${collection}.json`);
  const entries = JSON.parse(fs.readFileSync(entriesPath, "utf8"));
  const contentByCode = {};

  entries.forEach((entry) => {
    if (
      typeof entry.code !== "string" ||
      typeof entry.filename !== "string" ||
      path.basename(entry.filename) !== entry.filename
    ) {
      throw new Error(`Invalid content entry in ${entriesPath}.`);
    }

    if (Object.prototype.hasOwnProperty.call(contentByCode, entry.code)) {
      throw new Error(`Duplicate content code "${entry.code}" in ${entriesPath}.`);
    }

    const contentPath = path.join(
      dataDirectory,
      collection,
      entry.filename
    );
    contentByCode[entry.code] = fs.readFileSync(contentPath, "utf8");
  });

  const outputPath = path.join(outputDirectory, `${collection}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(contentByCode), "utf8");
});
