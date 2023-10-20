const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: 'mochawesome',
  e2e: {
    baseUrl: "https://www.netflix.com/ec-en",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
