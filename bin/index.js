#!/usr/bin/env node
const makeCli = require("make-cli");
const pk = require("../package.json");
const fs = require("fs");
const path = require("path");
const filemono = require("../../package.json");
var logger = require("terminal-log");
makeCli({
  version: pk.version,
  name: pk.name,
  usage: pk.name,
  arguments: "<options> [extra]",
  options: [
    {
      name: "bump",
      description:
        "Update all package json version in the current working directory using the specified version number in the package.json file.",
    },
    {
      name: "init",
      description: "Create a config file",
    },
  ],
  action: (extra, options) => {
    // options.value and options.yes
    // contain the options.
    if (extra === "bump") {
      const arr = require("../../kgmono.config.js");
      arr.map((arrF) => {
        const file = path.join(__dirname, "..", "..", arrF);
        const f = require(file);
        f.version = filemono.version;
        fs.writeFile(file, JSON.stringify(f, null, 2), function writeJSON(err) {
          if (err) return logger.error("An error has been ocurred.", err);
          logger.ok("The versions of these files have been updated", file);
        });
      });
    } else if (extra === "init") {
      const file = path.join(__dirname, "..", "..", "kgmono.config.js");
      const temp = `/*
Include a list of package.json, for example:
* Important, don't add "../../"
[
      "packages/test/package.json",
      "packages/test2/package.json"
]
*/
module.exports = [];
      `;
      fs.writeFile(file, temp, function writeConfig(err) {
        if (err) return logger.error("An error has been ocurred.", err);
        logger.info("The configuration file was created");
      });
    }
  },
});
