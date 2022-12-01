import PropTypes from 'prop-types'
import React, { Component } from 'react'
import axios from 'axios';

export default class MyClass extends Component {


    state={
        records:[]
    }

    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(x=> {
            this.setState(({records: x.data}));
        })
    }
  render() {
    return (
      <div>{this.state.records.map((ele) =>{
        return(<div>{ele.email}</div>)

      })}</div>
    )
  }
}
