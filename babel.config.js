module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module:react-native-dotenv"],
    ["@babel/plugin-proposal-private-methods", { "loose": true }]
  ]
};