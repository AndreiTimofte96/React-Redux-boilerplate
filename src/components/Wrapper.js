import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/homepageActions';




// this component throws all properties from Redux to its children components 
//Example: <Wrapper> <childrenComponent1/> <childrenComponent2/> ... </Wrapper>
//Wrapper Component will be the single component directly binded to Redux

class Wrapper extends Component{

    constructor(props){
        super(props);
    }
    
    render(){
        
        const { children } = this.props;

        let childrenArray = [];

        if (children.length === undefined){
            childrenArray.push(children);
        }
        else{
            childrenArray = children;
        }
        //console.log(childrenArray);

        const componentsWithProps = childrenArray.map( (child, index) => {
            // console.log(child);
            let result = [];

            if (typeof child.type === 'string'){
                result.push((<div key={index}>{child} </div>));
            }
            else{
                result.push((<div key={index}>{React.cloneElement(child, this.props)}</div>));
            }
            return result;
        });

//        console.log(componentsWithProps);
        return (
            <div>
                {componentsWithProps}
            </div>
       );
    }
}

function mapStateToProps(state) {
    return {
        homepage: state.homepageReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
