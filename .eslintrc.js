module.exports = {
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-underscore-dangle': 'off'
  },
  globals: {
    window: true,
    document: true,
    expect: true,
    test: true
  },
};
