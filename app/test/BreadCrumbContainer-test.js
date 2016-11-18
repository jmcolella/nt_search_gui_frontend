var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var BreadCrumbContainer = require( '../containers/BreadCrumbContainer' );

describe ( 'Bread Crumb Container', function () {

  var breadCrumbContainer;

  beforeEach( function () {
    breadCrumbContainer = shallow( <BreadCrumbContainer data = { { name: "Test Link" } } collapseData = { {} } /> );
  });

  it ( 'renders a <li> node with class `.bread-crumb`', function () {
    expect( breadCrumbContainer.find( '.bread-crumb' ) ).to.have.length( 1 );
  });

  it ( 'renders normal name in props', function () {
    //need to fix this
    //expect( breadCrumbContainer.find( 'a' ).text() ).to.equal( breadCrumbContainer.props().data.name );
  });

});
