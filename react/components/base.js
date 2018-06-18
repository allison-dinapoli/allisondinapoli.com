import React from 'react'; 



export default class Base extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {}; 
    }

    render() {
        var linkedIn = <a href="https://www.linkedin.com/in/allison-dinapoli"><img src="./assets/img/linkedin.svg" style={{width:"35px", maxWidth: "10%", maxHeight: "10%"}}/></a>;
        var email = <a href="mailto:adinapol@asu.edu"><img src="./assets/img/email.svg" style={{width:"35px", maxWidth: "10%", maxHeight: "10%"}}/></a>;
        var github = <a href="https://github.com/allison-dinapoli"><img src="./assets/img/github.svg" style={{width:"35px", maxWidth: "10%", maxHeight: "10%"}}/></a>;
        var socialMedia = <div style={{textAlign: "right", fontSize: "10px"}}>{linkedIn}&nbsp;{github}&nbsp;{email}</div>;
        var page = <div style={{fontSize: "60px"}}>{socialMedia}{this.props.content}</div>;
        return (page); 
    }
};
