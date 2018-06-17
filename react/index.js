import React from 'react'; 
import ReactDOM from 'react-dom'; 


var linkedIn = <img src="./assets/img/linkedin.svg" style={{width:"40px", maxWidth: "10%"}}/>;
var email = <img src="./assets/img/email.svg" style={{width:"40px", maxWidth: "10%"}}/>;
var github = <img src="./assets/img/github.svg" style={{width:"40px", maxWidth: "10%"}}/>;
var socialMedia = <div style={{textAlign: "right", fontSize: "10px"}}>{linkedIn}&nbsp;{github}&nbsp;{email}</div>;
var test = <div style={{fontSize: "60px"}}>{socialMedia}<br/>Allison DiNapoli </div>;

ReactDOM.render(test, document.getElementById('react-base')); 
