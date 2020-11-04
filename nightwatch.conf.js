const chromedriver = require('chromedriver');

module.exports = {
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      },
    },
    desiredCapabilities: {
      "chromeOptions": {
          "args": [
              "window-size=850,650"
          ]
      }
    }
  }
};