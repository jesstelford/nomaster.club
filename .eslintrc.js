module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['react', 'react-hooks', 'import'],
  rules: {
    curly: ['error', 'multi-line'],
    'jsx-quotes': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-unused-expressions': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__tests__/**/*.js',
          '**/*test.js',
          '**/tests/**/*.js',
          '**/test/**/*.js',
          '**/build/**/*.js',
          '**/cypress/**/*.js',
        ],
      },
    ],
    'import/no-unresolved': 'error',
    'object-curly-spacing': ['error', 'always'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'react/jsx-boolean-value': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'warn',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-unknown-property': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/self-closing-comp': 'warn',
    'react/sort-prop-types': 'off',
    semi: 'error',
    strict: 'off',
  },
  settings: {
    react: {
      version: '16.8',
    },
  },
};
