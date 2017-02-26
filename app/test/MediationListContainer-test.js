var React = require( 'react' );
var mount = require( 'enzyme' ).mount;
var expect = require( 'chai' ).expect;
var MediationListContainer = require( '../containers/MediationListContainer' );
var MediationMessage = require( '../components/MediationMessage' );

describe ( 'MediationList Container', function () {

  var mediationList;

  beforeEach( function () {
    mediationList = mount( <MediationListContainer messages={ [ { name: "hello.txt", status: "0" } ] } mediation={ false } /> );
  });

  it ( 'renders without problems', function () {
    expect( mediationList ).to.exist;
  });

  it ( 'renders an unordered list', function () {
    expect( mediationList.find( 'ul' ) ).to.have.length( 1 );
  });

  it ( 'renders a `h4` node with text `Document`', function () {
    expect( mediationList.find( 'h4.dark-blue-color' ) ).to.exist;
    expect( mediationList.find( 'h4.dark-blue-color' ).text() ).to.equal( 'Document' );
  });

  it ( 'renders a `span` node with text `Status`', function () {
    expect( mediationList.find( 'span.dark-blue-color' ) ).to.exist;
    expect( mediationList.find( 'span.dark-blue-color' ).text() ).to.equal( 'Status' );
  });

  it ( 'renders a child component `MediationMessage`', function () {
    expect( mediationList.find( MediationMessage ) ).to.have.length( 1 );
  });

});
