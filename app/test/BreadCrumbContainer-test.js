var React = require( 'react' );
var mount = require( 'enzyme' ).mount;
var expect = require( 'chai' ).expect;
var BreadCrumbContainer = require( '../containers/BreadCrumbContainer' );

describe ( 'Bread Crumb Container', function () {

  var breadCrumbContainer;

  beforeEach( function () {
    breadCrumbContainer = mount( <BreadCrumbContainer data = { { name: "Test Link" } } /> );
  });

  it ( 'renders a <li> node with class `.bread-crumb`', function () {
    expect( breadCrumbContainer.find( '.bread-crumb' ) ).to.have.length( 1 );
  });

  it ( 'renders normal name in props if no collapseData', function () {
    expect( breadCrumbContainer.find( 'a' ).text() ).to.equal( breadCrumbContainer.props().data.name );
  });

  it ( 'renders `root` in link if name props is `.`', function () {
    breadCrumbContainer.setProps( { data: {name: "."} } );
    expect( breadCrumbContainer.find( 'a' ).text() ).to.equal( "root" );
  });

  it ( 'renders `..` in link if collapseData in props', function () {
    breadCrumbContainer.setProps( { collapseData: {} } );
    expect( breadCrumbContainer.find( 'a' ).text() ).to.equal( ".." );
  });

});
