var React = require('react');
var Enzyme = require('enzyme');
var Mount = Enzyme.mount;
var expect = require( 'chai' ).expect;
var RootContainer = require('../../app/containers/RootContainer');


describe ( 'Root Container', function () {
  var root;
  var pathnameStr = '/partitions/0';

  beforeEach( function () {
    root = Mount( <RootContainer location={ {pathname: pathnameStr} }/> );
  });

  it ( 'renders without problems', function () {
   expect( root ).to.exist;
  });

  describe ( 'renders with initial state', function () {
    it ( 'has initial breadcrumbList with lenght equal to 1', function () {
      expect( root.state().breadcrumbList.length ).to.equal( 1 );
    });

    it ( 'has initial cancelPath of blank string', function () {
       expect( root.state().cancelPath ).to.equal("");
    });
    it ( 'had initial clickedDocumentNames with length 0', function () {
      expect( root.state().clickedDocumentNames.length ).to.equal( 0 );
    });

    it ( 'has initial clickedDocumentObjects with length 0', function () {
      expect( root.state().clickedDocumentObjects.length ).to.equal( 0 );
    });

    it ( 'has initial documents with length 0', function () {
      expect( root.state().documents.length ).to.equal( 0 );
    });

    it ( 'has initial folders with length 0', function () {
      expect( root.state().folders.length ).to.equal( 0 );
    });

    it ( 'has initial mediation with value false', function () {
      expect( root.state().mediation ).to.equal( false );
    });

    it ( 'has initial pathList with length 0', function () {
      expect( root.state().pathList.length ).to.equal( 0 );
    });

    it ( 'has initial partition string with value of partition number in pathname props', function () {
      var partitionNum = pathnameStr.split("/")[2];
      expect( root.state().partition ).to.equal( 'partition-'+ partitionNum );
     
    });

    it ( 'has initial submit with value false', function () {
      expect( root.state().submit ).to.equal( false );
    });

  });

  it ( "renders with top-level container with id 'root-container'", function () {
    expect( root.find( "#root-container" ) ).to.exist;
  });


});
