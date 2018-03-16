Typescript
==========

Linting
-------

```
npm install -g tslint
tslint --init
```

> Note: this command may be necessary if dependecies are not met.

`npm install -g tslint typescript`

Run the linting process with this command:

`tslint -c tslint.json 'src/**/*.{ts,tsx}'`

Instructions to install linting tools are [here](https://rjzaworski.com/2016/12/testing-typescript-with-jest)

Automatically fix simple errors:

`tslint --fix -c ./config/tslint.json 'src/**/*{.ts,.tsx}'`

Testing with Jest
-----------------

I had a little trouble setting up Jest with Typescript so I recommend following this procedure in the future.

> Note: When installing on a Windows system, make sure to use the administrator command prompt.  Using a bash terminal on Windows just didn't seem to work right.

### Installation ###

Run this command to install ts-jest:
`npm install --save-dev ts-jest @types/jest`

Use this command if jest is not already installed:
`npm install --save-dev jest ts-jest @types/jest`

### package.json ###

Add a 'jest' section to the _package.json_ file.

Also, set the "test" attribute in the "scripts" section to "jest" so that testing can be run with `npm test`.

```json
{
  "...": "...",
  "jest": {
    "transform": {
      "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "/__tests__/.*\\.(ts|tsx|js)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  },
  "...": "...",
  "scripts": {
    "test": "jest"
  },
  "...": "...",
}
```

**__test__ folder**

Create a `__test__` directory in the `src` folder.

Inside that folder create a test file (with the `.test.ts` extension for organization) and insert the test code.  Here is an example of what the testing code might look like:

```ts
import { StringExpressionParser } from '../StringParser';

const parser = new StringExpressionParser();

test('parse simple formatted string', () => {
    expect(parser.parseExpression("'abc'").contents).toBe('abc');
});
```

The resulting file structure will look something like this:

```
├── src
│   ├── StringParser.ts
│   └── __tests__
│       └── StringParser.test.ts
├── tsconfig.json
└── tslint.json
```

### Useful Links for Setting Up Jest with Typescript ###

* [Testing TypeScript with Jest](https://rjzaworski.com/2016/12/testing-typescript-with-jest)
* [NPM ts-jest](https://www.npmjs.com/package/ts-jest)
* [Getting Started with Jest](https://facebook.github.io/jest/docs/en/getting-started.html)
