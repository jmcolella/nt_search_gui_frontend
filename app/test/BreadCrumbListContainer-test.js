var React = require( 'react' );
var mount = require( 'enzyme' ).mount;
var expect = require( 'chai' ).expect;
var BreadCrumbsListContainer = require( '../containers/BreadCrumbsListContainer' );
var BreadCrumbContainer = require( '../containers/BreadCrumbContainer' );

describe ( 'BreadCrumb List Container', function () { 
  let breadcrumbList;

  beforeEach( function() {
    breadcrumbList = mount( <BreadCrumbsListContainer 
                              breadcrumbList={ [ {name: 'hello'} ] }/> );
   
  });

  it ( 'renders without problems', function () {
    expect( breadcrumbList ).to.exist;
  });

  it ( 'renders with an ordered-list with class `bread-crumb-list`', function () {
    expect( breadcrumbList.find( '.bread-crumb-list' ) ).to.have.length( 1 );
  });
  
  it ( 'renders child component BreadCrumbContainer', function ()  {
    expect( breadcrumbList.find( BreadCrumbContainer ) ).to.exist;
  });

});
