const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportHeight:1080,
  // viewportWidth:10920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
