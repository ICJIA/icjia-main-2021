module.exports = {
  transpileDependencies: ["vuetify"],

  configureWebpack: (config) => {
    config.entry.app = "./src/entry.js";
  },

  pluginOptions: {
    moment: {
      locales: ["en"],
    },
  },
};
