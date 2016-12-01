var React = require( 'react' );
var mount = require( 'enzyme' ).mount;
var expect = require( 'chai' ).expect;
var MediationContainer = require( '../containers/MediationContainer' );
var Header = require( '../components/Header' );
var MediationListContainer = require( '../containers/MediationListContainer' );
var MediationButton = require( '../components/MediationButton' );
var MediationAlert = require( '../components/MediationAlert' );

describe ( 'Mediation Container', function () {

  var mediationContainer;

  beforeEach( function () {
    mediationContainer = mount( <MediationContainer /> );
  });

  it ( 'renders without problems', function () {
    expect( mediationContainer ).to.exist;
  });

  it ( 'renders child component `Header`', function () {
    expect( mediationContainer.find( Header ) ).to.exist;
  });

  it ( 'renders a h1 node with text `Mediation`', function () {
    expet( mediationContainer.find( 'h1' ).text() ).to.equal( 'Mediation' );
  });

  it ( 'renders child component `MediationListContaier`', function () {
    expect( mediationContainer.find( MediationListContainer ) ).to.exist;
  });

  it ( 'renders child component `MediationButton`', function () {
    expet( mediationContainer.find( MediationButton ) ).to.exist;
  });

  it ( 'renders only 1 button', function () {
    expect( mediationContainer.find( 'button' ) ).to.have.length( 1 );
  });

  it ( 'renders a button with text `Start Mediation` as default', function () {
    expect( mediationContainer.find( '#generate-mediation-button' ).text() ).to.equal( 'Start Mediation' )
   });

  it ( 'renders child component `MediationAlert`', function () {
    expect( mediationContainer.find( MediationAlert ) ).to.exist;
  });
  
});
