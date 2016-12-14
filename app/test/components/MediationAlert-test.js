var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var MediationAlert = require( '../../components/MediationAlert' );

describe ( 'MediationAlert component', function() {

  let alert;

  beforeEach( function() {
    alert = shallow( <MediationAlert incomingMsg={ { filename: 'hello.txt', status: '0' } } /> );
  });

it ( 'renders to the DOM', function() {
  expect( alert ).to.exist;
});

describe ( 'status in props is 0', function() {
  it ( 'does not render error message', function() {
    expect( alert.find( 'mediation-alert-container' ) ).to.have.length( 0 );
  });
});

describe ( 'status in props is an error code', function() {
  beforeEach( function() {
    alert.setProps( { incomingMsg: { filename: 'hello.txt', status: '1' } } );
  });

  it ( 'renders 1 div with class `mediation-alert-container`', function() {
    expect( alert.find( '.mediation-alert-container' ) ).to.have.length( 1 )''
  });

  it ( 'renders 1 p node inside the div', function() {
    expect( alert.find( '.mediation-alert-container p' ) ).to.have.length( 1 );
  });

  it ( 'renders 1 i node with class `fa-times`', function() {
    expect( alert.find( '.fa-times' ) ).to.have.length( 1 );
  });

});

});

