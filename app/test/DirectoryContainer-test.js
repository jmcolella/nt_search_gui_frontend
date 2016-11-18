var React = require('react');
var Enzyme = require('enzyme');
var Mount = Enzyme.mount;
var Shallow = Enzyme.shallow;
var expect = require( 'chai' ).expect;
//var expect = require('expect');
var DirectoryContainer = require('../../app/containers/DirectoryContainer');
var Header = require( '../../app/components/Header' );


describe ( 'Directory Container', function () {

  var directory;

  beforeEach( function () {
    directory = Shallow( <DirectoryContainer partition={ 'partition-0' } breadcrumbList={ [{ path: ".", name: "." }] } folders={ ["hello-1"] } documents={ ["hello-2", "hello-3"] } /> );
  });

  it ( 'renders without problems', function () {
    expect( directory ).to.exist;
  });

  it ( 'renders with top div with #directory-list', function () {
    expect( directory.find( '#directory-list' ) ).to.have.length( 1 );
  });

  it ( 'renders with a div .default-document-list', function () {
    expect( directory.find( '.default-document-list' ) ).to.have.length( 1 );
  });
  
  it ( 'renders with child component Header', function () {
    //expect( directory.find( "h1" ).text() ).toEqual( 'partition-0' );

    expect( directory.find( 'Header' ) ).to.have.length( 1 );
  });

});
