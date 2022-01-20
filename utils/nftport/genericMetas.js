const path = require("path");
const basePath = process.cwd();
const fs = require("fs");
const buildDir = path.join(basePath, "/build");

const GENERIC_TITLE = "Unknown" // Replace with what you want the generic titles to say.
const GENERIC_DESCRIPTION = "Unknown" // Replace with what you want the generic descriptions to say.

if (!fs.existsSync(path.join(buildDir, "/genericJson"))) {
  fs.mkdirSync(path.join(buildDir, "/genericJson"));
}

fs.readdirSync(`${buildDir}/json`).forEach((file) => {
  if (file === "_metadata.json" || file === "_ipfsMetas.json") return;

  const jsonFile = JSON.parse(fs.readFileSync(`${buildDir}/json/${file}`));

  jsonFile.name = `${GENERIC_TITLE} #${jsonFile.custom_fields.edition}`;
  jsonFile.description = GENERIC_DESCRIPTION;
  jsonFile.image =
    "https://ipfs.io/ipfs/QmQ3cyN6bTkFBhm7mrHetFsuTTT1cyBmUziUSpdGHmWVJo";
    // This is an example url, replace with yours.
  delete jsonFile.attributes;
  delete jsonFile.custom_fields.dna;

  fs.writeFileSync(
    `${buildDir}/genericJson/${file}`,
    JSON.stringify(jsonFile, null, 2)
  );

  console.log(`${file} copied and updated!`);
});
