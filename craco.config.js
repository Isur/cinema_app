const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#7e2111",
              "@layout-header-background": "#4d0000",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
