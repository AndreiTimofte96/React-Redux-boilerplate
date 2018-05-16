import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import Homepage from '../components/Homepage';


export default class HomepageWrapper extends Component{

    render(){
        return(
            <Wrapper>
                <Homepage/>
            </Wrapper>
        );
    }
}