Mocha is a JavaScript test framework that runs on Node.js. It is simple, flexible, and fun.

Two pre-bundle function calls
  - describe() --> group into a test suite
  - it() --> to define an individual test case. It takes two arguments "string and call back function"

Example:
    describe("Test authentication", function()
    {
    it("Test to add numbers", function()
      {
        //test logic here
      }
    })

Mocha hooks - These are functions that run before or after the test. It helps to set up environment and test suites
  - before()
  - beforeEach()
  - after()
  - afterEach()
    

