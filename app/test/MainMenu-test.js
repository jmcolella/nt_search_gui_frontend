var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var MainMenu = require( '../containers/MainMenu' );
var PartitionContainer = require( '../containers/PartitionContainer' );
var MediationContainer = require( '../containers/MediationContainer' );
var Menu = require( '../components/Menu' );

describe ( 'Main Menu container', function () {

  var mainMeunContainer;

  beforeEach( function () {
    mainMenuContainer = shallow( <MainMenu /> );
  });

  it ( 'renders without problems', function () {
    expect( mainMenuContainer ).to.exist;
  });

  it ( 'renders with partition state = false', function () {
    expect( mainMenuContainer.state().partition ).to.equal( false );
  });

  it ( 'renders with mediation state = false', function () {
    expect( mainMenuContainer.state().mediation ).to.equal( false );
  });

  it ( 'renders child component `Menu` by default', function () {
    expect( mainMenuContainer.find( Menu ) ).to.exist;
  });

  it ( 'renders child component `PartitionContainer` with partition state true', function () {
    mainMenuContainer.setState({ partition: true });
    expect( mainMenuContainer.find( PartitionContainer ) ).to.exist;
  });

  it ( 'renders chuld component `MediationContainer` with mediation state true', function () {
    mainMenuContainer.setState( { mediation: true } );
    expect( mainMenuContainer.find( MediationContainer ) ).to.exist;
  });

});

