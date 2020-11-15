const { spawn } = require("child_process");

spawn("yarn", ["dev"], {
    stdio: "inherit",
    env: {
      ...process.env,
      YARN_SILENT: "1",
      npm_config_loglevel: "silent",
    },
  });