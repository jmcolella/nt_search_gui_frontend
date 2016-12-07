var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect - require( 'chai' ).expect;
var CancelButton = require( '../../components/CancelButton' );

describe ( 'Cancel Button component', function() {

  let cancelButton
  let buttonTitle = 'cancel';

  beforeEach( function() {
    cancelButton = shallow( <CancelButton id={ 1 } buttonTitle={ buttonTitle } /> );
  });

  it ( 'renders to the DOM', function() {
    expect( cancelButton ).to.exist;
  });

  it ( 'renders 1 button node', funtion() {
    expect( cancelButton.find( 'button' ) ).to.have.length( 1 );
  });

  it ( 'renders button node with text equal to buttonTitle props', function() {
    expect( cancelButton.find( 'button' ).text() ).to.equal( cancelButton.props().buttonTitle );
  });
});
