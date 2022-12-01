import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class MyClassProp1 extends Component {
  

  render() {
    return (
      <div>
        <table>
            <tr>
                <td>{this.props.dataa.id}</td>
                <td>{this.props.dataa.title}</td>
                <td>{this.props.dataa.price}</td>
                <td>{this.props.dataa.description}</td>
            </tr>
        </table>
      </div>
    )
  }
}
