import log4js from "log4js";
import fs from "fs";

// Delete old log file every run
const logFile = "logs/execution.log";
if (fs.existsSync(logFile)) {
  fs.unlinkSync(logFile);  // remove previous log file
}

log4js.configure({
  appenders: {
    console: { type: "console" },
    file: {
      type: "file",
      filename: "logs/execution.log",
      maxLogSize: 10485760,
      backups: 5,
      compress: true
    }
  },
  categories: {
    default: { appenders: ["console", "file"], level: "debug" }
  }
});

const log = log4js.getLogger("playwright-logger");

export default log;
