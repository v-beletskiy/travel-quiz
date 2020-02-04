module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      // 'prettier/@typescript-eslint',
      // 'plugin:prettier/recommended',
    ],
   parserOptions:  {
      ecmaVersion:  2019,  // Allows for the parsing of modern ECMAScript features
      sourceType:  'module',  // Allows for the use of imports
      project: "./server/tsconfig.json",
    },
    rules:  {
      '@typescript-eslint/no-var-requires': 0,
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
    env: {
      node: true,
      es6: true,
    }
  };