import React, { Component } from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {notifyChange} from '../../actions/NotifyCreator';
import {firebaseConnect} from 'react-redux-firebase';

class SignUp extends Component {
    state={
        name: '',
        email: '',
        password: '',
        password2: '',
    }

    onChangeField = (e) => this.setState({[e.target.name]: e.target.value})

    onSubmit = (e) => {
        e.preventDefault()

        const {name, email, password, password2} = this.state;

        if(password === password2){
            this.props.firebase.login({
                email,
                password
            })
        }
        
    }


  render() {
      const {name, email, password, password2} = this.state
    return (
    <div className="container d-flex justify-content-center mt-5">
        <div className = "col-md-5 col-sm-11">
            <div className="card bg-light text-dark">
                <div className="card-header text-center">
                <h4>SIGN UP <span className="text-warning">CLIENT PANEL</span></h4>
                </div>
                <div className="card-body">
                    <form onSubmit = {this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" value={name} onChange={this.onChangeField}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" value={email} onChange={this.onChangeField}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">password:</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" value={password} onChange={this.onChangeField}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm password">confirm password:</label>
                            <input type="password" className="form-control" id="password2" name="password2" placeholder="Confirm password" value={password2} onChange={this.onChangeField}></input>
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
)(SignUp)