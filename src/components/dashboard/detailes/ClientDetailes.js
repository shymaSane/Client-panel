import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ClientDetailes extends Component {

  render() {
    const {name, phone, email, balance} = this.props.client
    const {id} = this.props
    return (
      <div className="card bg-light">
        <div className="card-header bg-light text-center">
            <h3 className= "text-warning">{name}</h3>
        </div>
        <div className="card-body">
            <div className="d-flex justify-content-between align-items-center my-3">
                <h5> CLientID: {id} </h5>
                <h5 >Balance: {balance}$<button className=" btn btn-link btn-inline mb-2 btn-lg"><i className="fas fa-edit text-warning"></i></button></h5>
            </div>
            <div className="list-group">
                <li className="list-group-item">CLient Phone: {phone}</li>
                <li className="list-group-item">CLient Email: {email}</li>
            </div>
        </div>
    </div>
)
  }
}

ClientDetailes.proptypes = {
  client: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
}

export default ClientDetailes