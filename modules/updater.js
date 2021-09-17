function checkForUpdate() {
    const logger = require("./logger")
    const request = require('request');
    const package = require("../package.json");
    request('https://raw.githubusercontent.com/JustinPooters/UptimeMonitor/main/version.txt', function(error, response, body) {
        const version = body;
        if (version ==  version) {
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