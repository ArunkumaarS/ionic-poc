# Tryllo Alpha FE Ionic
<p align="center">
  <img height="300" src="static/img/Tryllo.png" alt = "Tryllo Tech">
</p>


## Steps to start the application

### Install

```npm i```

This will install all the required dependency for the application to run. The dependency and the version of the dependency will be fetched from the `./package.json`

### Run

```npm start```

Start the application after building the required file.

### Build

```npm run build```

This will execute the below command 

1. `npm run lint` - initiates eslint tool to format the js files
2. `npm run format` - initiates prettier tool to format the svelte files
3. `sapper build` - export the build file which will be deployed in S3

## Test

### Test cases

```npm run test```

Jest will be initiates and executes the test case in the `./test` directory of the application. 
All the test case file name should be name of the component followed by test

For example:

Structure of login component

```Markdown
.
└── src
    └── routes
      └── login
          ├── index.svelte
          └── submitOtp.svelte
```

Then test structure of your component should be 
```Markdown
.
└── test
      └── login
          ├── index.test.js
          └── submitOtp.test.js
```
### Code Coverage

```npm run test -- --coverage```

Jest will execute the test and provide the code coverage in `.html` format. The coverage report can be found in `./jest-coverage/index.html`

### Automated test suite

[Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell) is an automated unit test tool - similar to selenium 

```npm run cy:open```

Opens Cypress application which lists all the test suites. Select a browser and click on run all, it opens the browser and run all the test similar to selenium.

The coverage report can be found in `./Coverage/lcov-report/index.html`


## PR Guidelines
1. Name should describe the purpose of PR
2. Proper description should be provide - feature should be explained in brief
3. Test report and code coverage report should be shared.
4. Minimal Number of commits





![Alt Text](https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif)

