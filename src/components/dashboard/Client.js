import React, { Component } from 'react'

 class Client extends Component {
  render() {
    const {name, email, balance} = this.props
    return (
        <tr>
        <th scope="row">1</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{balance}</td>
        </tr>
)
  }
}

export default Client