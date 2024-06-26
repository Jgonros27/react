module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended',
    'standard-with.typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion:"latest",
    sourceType:'module',
    project:'./tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope':'off',
    'react/prop-types':'off'
  },
}
