module.exports = [
  config => {
    // set target on webpack config to support electrong
    config.target = 'electron-renderer';
    // add support for hot reload of hooks
    config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
    return config;
  },
  [
    'use-babel-config',
    {
      presets: ['react-app'],
      plugins: [
        // adds support for live hot reload
        'react-hot-loader/babel',
      ],
    },
  ],
  config => {
    // helper function to troubleshoot webpack config issues
    RegExp.prototype.toJSON = RegExp.prototype.toString;
    Function.prototype.toJSON = () => 'function() { }'; // Function.prototype.toString;
    // uncomment the line below to log the webpack config to the console
    // console.log(JSON.stringify(config.module.rules, null, 2));
    // process.exit(1);
    return config;
  },
];
