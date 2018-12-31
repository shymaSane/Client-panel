import React, { Component } from 'react';
import {firebaseConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux'
import {notifyChange} from '../../actions/NotifyCreator'

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit = e =>{ 
        e.preventDefault()

        const {email, password} = this.state
        const {firebase} = this.props
        firebase.login({
            email,
            password
        }).then(() => {
            this.props.notifyChange({message: 'Logged In Successfuly!', message_type: 'success'})
            this.props.history.push('/dashboard')
        }).catch((err) => this.props.notifyChange({message: 'password or email wrong!', message_type: 'danger'}))
    }

  render() {
      
    return (
    <div className="container d-flex justify-content-center mt-5">
        <div className = "col-md-5 col-sm-11">
            <div className="card bg-light text-dark">
                <div className="card-header text-center">
                    <h4>SIGN IN <span className="text-warning">CLIENT PANEL</span></h4>
                </div>
                <div className="card-body">
                    <form onSubmit = {this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">password:</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Enter password"  value={this.state.password} onChange={this.onChange}></input>
                        </div>
                        <button type="submit" className="btn btn-outline-dark btn-block">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default compose(
    firebaseConnect(),
    connect(null, {notifyChange})
)(SignIn)