var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var AppContainer = require('../containers/AppContainer'); //my root-test lives in components/__tests__/, so this is how I require in my components.

describe('root', function () {
  it('renders without problems', function () {
      var root = TestUtils.renderIntoDocument(<AppContainer/>);
      expect(root).toExist();
    });
});
