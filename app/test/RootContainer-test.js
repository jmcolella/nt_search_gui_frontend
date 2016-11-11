var React = require('react');
var Enzyme = require('enzyme');
var Mount = Enzyme.mount;
var expect = require('expect');
var RootContainer = require('../../app/containers/RootContainer');


describe ( 'Root Container', function () {
  var root;

  beforeEach( function () {
    root = Mount( <RootContainer location={ {pathname: '/partitions/0'} }/> );
})

  it ( 'renders without problems', function () {
   expect( root ).toExist();
  });

  describe ( 'renders with initial state', function () {
    it ( 'has initial breadcrumbList with lenght equal to 1', function () {
      expect( root.state().breadcrumbList.length ).toEqual( 1 );
    });

it ( 'has initial cancelPath of blank string', function () {
    expect( root.state().cancelPath ).toEqual("");
});
    it ( 'had initial clickedDocumentNames with length 0', function () {
      expect( root.state().clickedDocumentNames.length ).toEqual( 0 );
    });

    it ( 'has initial clickedDocumentObjects with length 0', function () {
      expect( root.state().clickedDocumentObjects.length ).toEqual( 0 );
    });

    it ( 'has initial documents with length 0', function () {
      expect( root.state().documents.length ).toEqual( 0 );
    });

    it ( 'has initial folders with length 0', function () {
      expect( root.state().folders.length ).toEqual( 0 );
    });

    it ( 'has initial mediation with value false', function () {
      expect( root.state().mediation ).toEqual( false );
    });

    it ( 'has initial pathList with length 0', function () {
      expect( root.state().pathList.length ).toEqual( 0 );
    });

    it ( 'has initial submit with value false', function () {
      expect( root.state().submit ).toEqual( false );
    });

  });
});
