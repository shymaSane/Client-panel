import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addClient} from '../../actions/actionCreators'

class AddClient extends Component {

  state = {
    name: '',
    phone:'',
    email: '',
    balance: 0
  }

  //make the form writable
  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  //when submitting the form
  onSubmit = (e) =>{
    e.preventDefault()

    //check if all the fileds full

    //getting client info from state
    const {name, phone, email, balance} = this.state

    //object holding client info
    const client = {
      name,
      phone,
      email,
      balance
    }

    //add client to firestore
    this.props.addClient(client)
    //empty fileds
    //redirect to dashboard
    this.props.history.push('/dashboard');
  }

  render() {
    const {name, email, phone, balance} = this.state
    return (
      <div className="container d-flex justify-content-center mt-5">
        <div className = "col-md-8 col-sm-11">
            <div className="card bg-light text-dark border-danger">
                <div className="card-header bg-light text-center">
                    <h3 className= "text-secondary"> Add Client</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="client name">Client Name:</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter client name" value={name} onChange={this.handleChange}></input>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" value={email} onChange={this.handleChange}></input>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="text" className="form-control" id="phone" name="phone" placeholder="Enter phone" value={phone} onChange={this.handleChange}></input>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="balance">Balance:</label>
                            <input type="number" className="form-control" id="balance" name="balance" placeholder="Enter balance" value={balance} onChange={this.handleChange}></input>
                            
                        </div>
                        <button type="submit" className="btn btn-danger btn-block">Add Client</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default connect(null, {addClient})( AddClient)