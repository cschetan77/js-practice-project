module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
        'no-var': 'error',
        'quotes': ['error', 'single'],
        'prefer-const': 'error',
        'no-unused-vars': 'error',
        'no-array-constructor': 'error',
        'no-new-object': 'error',
        'no-multi-assign': 'error',
  },
};
