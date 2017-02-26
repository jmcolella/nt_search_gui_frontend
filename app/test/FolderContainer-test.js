var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var FolderContainer = require( '../containers/FolderContainer' );
var Folder = require( '../components/Folder' );

describe ( 'Folder Container', function () {

  let folderContainer;

  beforeEach( function () {
    folderContainer = shallow( <FolderContainer /> );
  });

  it ( 'renders a child folder component', function () {
    expect( folderContainer.find( Folder ) ).to.have.length( 1 );
  });

});
