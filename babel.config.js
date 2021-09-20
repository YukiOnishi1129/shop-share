module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@Component': './src/components',
            '@Screen': './src/screens',
            '@Route': './src/routes',
            '@Interface': './src/interfaces',
            '@Hook': './src/hooks',
            '@Logic': './src/logic',
            '@Api': './src/apis',
            '@Service': './src/services',
            '@Context': './src/contexts',
            '@Storage': './src/storages',
            '@Constant': './src/constants',
            '@Config': './src/config',
            '@Style': './src/styles',
          },
        },
      ],
    ],
  }
}
