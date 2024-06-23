const core = require("@actions/core");
const parseToml = require("@iarna/toml/parse-string");
const stringifyToml = require("@iarna/toml/stringify");
const fs = require("fs");

try {
    const pathToToml = core.getInput("path");
    const targetVersion = core.getInput("version");

    const toml = fs.readFileSync(pathToToml, { encoding: "utf-8" });

    const data = parseToml(toml);

    const previousVersion = data.package.version;

    console.log(`Updating "${pathToToml}": "${previousVersion}" -> "${targetVersion}"`);

    data.package.version = targetVersion;

    const updatedToml = stringifyToml(data);

    fs.writeFileSync(pathToToml, updatedToml, { encoding: "utf-8" });
} catch (error) {
    core.setFailed(error.message);
}