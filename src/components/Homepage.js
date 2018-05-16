import React, { Component } from 'react';


export default class Homepage extends Component{

    constructor(props){
        super(props);
    }

    render(){
        
        return(
           <div>{this.props.homepage.text}</div>
        );
    }
}