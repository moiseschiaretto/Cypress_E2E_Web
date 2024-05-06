const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/*.feature",
    testIsolation: false,
    /*
    testIsolation: false,
    *** Resolve o problema abaixo!!! ***
    Default blank page
    This page was cleared by navigating to about:blank.
    All active session data (cookies, localStorage and sessionStorage) across all domains are cleared.
    */
    "trashAssetsBeforeRuns": true,
    "video": false,
    "viewportWidth": 1024,
    "viewportHeight": 768,
    "defaultCommandTimeout": 10000
  },
})
