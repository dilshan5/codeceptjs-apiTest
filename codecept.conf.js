exports.config = {
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://gateway.marvel.com/v1/',
    },
  AssertWrapper: {
    require: "codeceptjs-assert"
  }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'codeceptjs-apiTest'
}