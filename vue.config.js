const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // Configurar las banderas de características de Vue
    config.plugin('define').tap(definitions => {
      definitions[0]['__VUE_PROD_DEVTOOLS__'] = false;
      definitions[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = false;
      return definitions;
    });
  } 
});
