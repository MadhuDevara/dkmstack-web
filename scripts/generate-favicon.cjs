const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public", "brand", "favicon-source.svg");

(async () => {
  const svg = fs.readFileSync(svgPath);
  await sharp(svg).resize(512, 512).png().toFile(path.join(root, "app", "icon.png"));
  await sharp(svg).resize(180, 180).png().toFile(path.join(root, "app", "apple-icon.png"));
  console.log("Generated app/icon.png and app/apple-icon.png from favicon-source.svg");
})();
