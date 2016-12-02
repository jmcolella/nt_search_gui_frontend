var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var RenderDirectoryContainer = require( '../containers/RenderDirectoryContainer' );
var DirectoryContainer = require( '../containers/DirectoryContainer' );
var DocumentsToSubmitListContainer = require( '../containers/DocumentsToSubmitListContainer' );

describe ( 'RenderDirectory Container', function () {

  var renderDirectory;

  beforeEach( function () {
    renderDirectory = shallow( <RenderDirectoryContainer /> );
  });

  it ( 'renders without problems', function () {
    expect( renderDirectory ).to.exist;
  });

  it ( 'renders with a top div with class `row`', function () {
    expect( renderDirectory.find( '.row' ) ).to.have.length( 1 );
  });

  it ( 'renders child component `DirectoryContainer`', function () {
    expect( renderDirectory.find( DirectoryContainer ) ).to.exist;
  });

  it ( 'renders child component `DocumentsToSubmitListContainer`', function () {
    expect( renderDirectory.find( DocumentsToSubmitListContainer ) ).to.exist;
  });

});
