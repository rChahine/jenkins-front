module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': ["off", { "typeof": true }],
    semi: ['error', 'always'],
    camelcase: 'off',
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'multi-line'],
    'dot-notation': 'off',
    'key-spacing': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-var': 'off',
    'quote-props': 'off',
    quotes: 'off',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always',
    }],
    'vue/attribute-hyphenation': 'off',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'always',
        component: 'always',
      },
      svg: 'any',
      math: 'any',
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 10,
    }],
    'vue/no-v-html': 'off',
    'vue/prop-name-casing': 'off',
    'vue/require-v-for-key': 'off',
    'vue/singleline-html-element-content-newline': 'off',

  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
