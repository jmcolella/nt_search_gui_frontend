var React = require('react');
var Header = require('../components/Header');

function Menu ( props ) {
  return (
    <div id="menu-container" className="container">
      <div className="row text-center">
        <div className="panel panel-default three-quarter-width">
          <div className="panel-heading">
            <Header
              title={ "Menu" } />
          </div>

          <div className="panel-body">
            <ul className="list-group text-center three-quarter-width">
              <li className="list-group-item"><a href="#" onClick={ props.togglePartitionContainer }>New Mediation</a></li>
              <li className="list-group-item">{ props.mediationButton ? <a href="#" onClick={ props.onGoToMediation }>Go To Current Mediation</a> : "No Current Mediation in Progress" }</li>
            </ul>
          </div>
        </div>  
      </div>
    </div>
  )
};

module.exports = Menu;
