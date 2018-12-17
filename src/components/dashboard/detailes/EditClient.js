import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateClient} from '../../../actions/actionCreators'

 class EditClient extends Component {
    state ={
      name: '',
      phone: '',
      email: '',
      balance: '',
      id: ''
    }

   componentWillReceiveProps(nextProps){

      //submit previous information to the form
      const {name, phone, email, balance, id} = nextProps.client
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
    this.props.updateClient(updatedClient, id)
    //clean fields 
    this.setState({
      name: '',
      phone: '',
      email: '',
      balance: '',
      id: ''
    })
    //redirect
    this.context.history.push('/')
   }

  render() {
      const {name, phone, email, balance, id} = this.state
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
                        <input type="text" className="form-control" name="id" value={id}></input>
                      </div>
                      <div className="col-3 form-group">
                        <label htmlFor="balance">Balance:</label>
                        <input type="text" className="form-control" name="balance" value={balance} onChange={this.onChange}></input>
                      </div>
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

export default connect(null, {updateClient})(EditClient)