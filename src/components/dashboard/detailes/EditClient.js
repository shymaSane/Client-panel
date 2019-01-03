import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux'
import {compose} from 'redux'
import {notifyChange} from '../../../actions/NotifyCreator'

 class EditClient extends Component {
    state ={
      name: '',
      phone: '',
      email: '',
      balance: '',
      id: ''
    }

    componentDidMount () {
      //submit previous information to the form
      const {name, phone, email, balance, id} = this.props.client
      this.setState({
        name,
        phone,
        email,
        balance,
        id
      })
    }

   onChange = (e) =>{
      //make form writable
      this.setState({
        [e.target.name] : e.target.value
      })
   }

   onSubmit = (e) =>{
     e.preventDefault()
     
    //get updates from form
    const {name, phone, email, balance, id} = this.state
     console.log(id)
     const updatedClient = {
      name,
      phone,
      email,
      balance,
     
    }

    //update firstore
    this.props.firestore.update({collection: 'dashboard', doc: id}, updatedClient)
    .then(() => {
      this.props.notifyChange({message: 'client updated successfuly', message_type: 'success'})
      this.props.history.push('/dashboard')
    }).catch((err) => this.props.notifyChange({message: 'unable to update client', message_type: 'danger'}))
   }

  render() {
      const {name, phone, email, balance, id} = this.state
      const {disable_balance} = this.props.settings
    return (
            <div className="card bg-light text-dark">
              <div className="card-body">
                <form onSubmit = {this.onSubmit}>
                  <div className="form-group">
                      <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.onChange}></input>
                  </div>
                  <div className="form-row">
                      <div className="col-9 form-group">
                        <label htmlFor="id">ClientID:</label>
                        <input type="text" className="form-control" name="id" value={id} readOnly></input>
                      </div>
                      {disable_balance ? 
                        <div className="col-3 form-group">
                          <label htmlFor="balance">Balance:</label>
                          <input type="text" className="form-control" name="balance" value={balance} readOnly></input>
                        </div>
                        :
                        <div className="col-3 form-group">
                          <label htmlFor="balance">Balance:</label>
                          <input type="text" className="form-control" name="balance" value={balance} onChange={this.onChange}></input>
                        </div>
                      }
                      
                  </div>
                      <div className="form-group">
                          <label htmlFor="phone">Client Phone:</label>
                          <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={this.onChange}></input>
                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Client email:</label>
                          <input type="email" className="form-control" id="email" name="email" value={email} onChange={this.onChange}></input>
                      </div>
                      <button type="submit" className="btn btn-outline-dark btn-block">Update</button>
                    </form>
                </div>
            </div>
        
    )
  }
}



export default compose(
  firestoreConnect(),
  connect( (state, props) => ({
    settings: state.settings
  }),
  {notifyChange})
)
(withRouter(EditClient))