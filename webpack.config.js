const path = require('path');

module.exports = {
  // Configuración de entrada, salida y otros ajustes de Webpack
  // ...
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      process: require.resolve('process/browser'),
      timers: require.resolve('timers-browserify'),
      net: require.resolve('net'),
      tls: require.resolve('tls'),
      zlib: require.resolve('browserify-zlib')
    }
  }
  
  },
  // Otros ajustes de Webpack
  // ...
};
