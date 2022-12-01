import PropTypes from 'prop-types'
import React, { Component } from 'react'
import axios from 'axios';
import MyClassProp1 from './MyClassProp1';

export default class MyClass extends Component {


    state={
        records:[]
    }

    componentDidMount()
    {
        axios.get("https://fakestoreapi.com/products")
        .then(x=> {
            this.setState(({records: x.data}));
        })
    }
  render() {
    return (
      <div>{this.state.records.map((ele) =>{
        return(<div><MyClassProp1 dataa={ele}></MyClassProp1></div>)

      })}</div>
    )
  }
}
