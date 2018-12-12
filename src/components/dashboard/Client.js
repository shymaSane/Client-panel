import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class Client extends Component {
   state = {
     counter: 0,
   }

    Addcounter = () =>{
      this.setState({
        counter: 1
      })
   }
  render() {
    const {name, email, balance} = this.props
  
    return (
        <tr>
        <th scope="row">{this.state.counter}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{balance}</td>
        <td><button className="btn btn-secondary">Detailes</button></td>
        </tr>
)
  }
}


Client.propTypes ={
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired
}

export default Client