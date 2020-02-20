const { exec } = require("child_process");

const build = "ng build --prod --output-path docs --base-href /wiki-docs/";
const add404 = "cp docs/index.html docs/404.html";

const command = [build, add404].join(" && ");

console.log("Building WikiDocs...");

exec(command, () => console.log("Successfully built WikiDocs!"));
