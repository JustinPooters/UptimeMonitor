function checkForUpdate() {
    const logger = require("./logger")
    const request = require('request');
    const package = require("../package.json");
    request('https://justinp.dev/uptimemonitor.html', function(error, response, body) {
        const version = body;
        if (version == package.version) {
            logger.log("You are running the latest version of Uptime Monitor");
        } else {
            logger.warn("Update Available!");
            logger.warn("Current Version: " + package.version);
            logger.warn("New Version: " + version);
            logger.warn("Download: https://github.com/justinpooters/uptimemonitor");
        };
    });
}

module.exports = {
    checkForUpdate: checkForUpdate,
};