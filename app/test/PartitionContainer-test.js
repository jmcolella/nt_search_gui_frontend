var React = require('react');
var ReactDOM = require('react-dom');
var Enzyme = require('enzyme');
var Mount = Enzyme.mount;
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var PartitionContainer = require('../../app/containers/PartitionContainer');

describe( 'Partition Container', function () {

  var partition;

  beforeEach( function () {
    partition = Mount( <PartitionContainer/> );
  });

  it ( 'renders without problems', function () {
    expect( partition ).toExist();
  });

  it ( 'renders with loading state true', function () {
    expect( partition.state().loading ).toEqual( true );
  });

  it ( 'renders with partitions state as a blank array', function () {
    expect( partition.state().partitions.length ).toEqual( 0 );
  });

});
