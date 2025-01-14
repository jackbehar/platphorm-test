const { Settings } = require('@mui/icons-material');

module.exports = {
  components: {
    categories: [
      {
        name: 'INPUTS',
        include: ['src/javascripts/app/components/UXPinTest/Foo/Foo.jsx'],
      },
    ],
    wrapper: 'src/javascripts/app/hoc/UXPinWrapper.js',
    webpackConfig: 'uxpin-webpack.config.js',
  },
  name: 'MUI-UXPin-Merge',
  settings: { useUXPinProps: true },
};
