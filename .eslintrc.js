module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['jsx-a11y'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:jsx-a11y/recommended', // Accessibility linting
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'jsx-a11y/anchor-is-valid': 'off', // when using next/link, <a> does not need an href attribute
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
