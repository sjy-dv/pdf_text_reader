const pdfText = require("pdf-text");
const fs = require("fs");
const buffer = fs.readFileSync("./test.pdf");
const translate = require("@vitalets/google-translate-api");

pdfText(buffer, (err, chunks) => {
  if (err) console.log(err);
  let readText = chunks.join();
  let pureText = readText.replace(/\,/g, "");
  translate(pureText, { to: "ko" }).then((res) => {
    console.log(res.text);
  });
});
