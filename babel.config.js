module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          actions: './src/actions',
          components: './src/components',
          containers: './src/containers',
          reducers: './src/reducers',
          screens: './src/screens',
          services: './src/services',
          store: './src/store',
          types: './src/types',
          utils: './src/utils',
        },
      },
    ],
  ],
};
