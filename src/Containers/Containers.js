import React, { Component } from 'react'
import Components from "../Components/Components"
import {connect} from 'react-redux'
import * as action  from '../Actions/Actions'
class  Containers  extends Component {
    componentDidMount(){
        this.props.initLoad()
    }
    render(){ 
        return(
            <Components {...this.props}/>
        )
    }
}
const mapStateToProps= (store)=>{
    return{
        listProducts: store.rootReducers.listP
    }}
//mapStateToProp
const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(action.getListProduct())
        
        },
        editProducts: (payload) => {
            dispatch(action.editProduct(payload))
        },
        deleteProducts: (id) => {
            dispatch(action.deleteProduct(id))
            console.log(id);
            
        },
        addProducts: (something) => {
            dispatch(action.addProduct(something))
            console.log("something in container "+JSON.stringify(something));
            
        },
        searchProducts: (something) => {
            dispatch(action.searchProduct(something))
        }
    }}

//mapDispatchToProps

export default connect(mapStateToProps,mapDispatchToProps)(Containers)