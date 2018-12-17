import React, { Component } from 'react';
import {Link} from 'react-router-dom'
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
    const {name, email, balance, id} = this.props
    
    return (
        <tr>
        <th scope="row"></th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{balance}</td>
        <td><Link className="btn btn-warning" role="button" to={`/client/detailes/${id}`}><i class="far fa-arrow-alt-circle-right mx-1"></i>Detailes</Link></td>
        </tr>
)
  }
}


Client.propTypes ={
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired
}

export default Client