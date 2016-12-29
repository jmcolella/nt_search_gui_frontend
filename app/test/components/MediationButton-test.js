var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var MediationButton = require( '../../components/MediationButton' );
var CancelButton = require( '../../components/CancelButton' );

describe ( 'Mediation Button component', function() {

  var button;

  beforeEach( function() {
    button = shallow( <MediationButton mediation={ false } messages={ [] } /> );
  });

  it ( 'renders to the DOM', function() {
    expect( button ).to.exist;
  });

  describe ( 'mediation false', function() {
    it ( 'renders 1 `button` node', function() {
      expect( button.find( 'button' ) ).to.have.length( 1 );
    });

    it ( 'button node has id `#generate-mediation-button`', function() {
      expect( button.find( 'button #generate-mediation-button' ) ).to.have.length( 1 );
    });

    it ( 'renders button with text `Start Mediation`', function() {
      expect( button.find( 'button' ).text() ).to.equal( 'Start Mediation' );
    });
  });

  describe ( 'mediation true', function() {
    beforeEach( function() {
      button.setProps( { mediation: true  } );
    });

    it ( 'renders 1 `p` node', function() {
      expect( button.find( 'p' ) ).to.have.length( 1 );
    });

    it ( 'renders the `p` node with no text', function() {
      expect( button.find( 'p' ).text() ).to.equal( '' );
    });
  });

  describe ( 'mediation true and messages > 0', function() {
    beforeEach( function() {
      button.setProps( { mediation: true, messages: [ { filename: 'hello.txt', status: '0' } ] } );
    });

    it ( 'renders child component `CancelButton`', function() {
      expect( button.find( CancelButton ) ).to.have.length( 1 );
    });
  });

}) ;
