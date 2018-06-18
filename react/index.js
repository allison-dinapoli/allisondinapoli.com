import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Base from './components/base.js'; 

var siteInProgress = <div style={{textSize:"30px"}}>This site is currently in progress. Please check back soon</div>; 
var page = <div>Allison DiNapoli<br/>{siteInProgress}</div>; 

ReactDOM.render(<Base content={page}/>, document.getElementById('react-base')); 
