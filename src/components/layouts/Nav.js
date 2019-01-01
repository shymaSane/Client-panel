import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'
import {firebaseConnect, firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {notifyChange} from '../../actions/NotifyCreator'
import {withRouter} from 'react-router'


class Nav extends Component{
  state = {
    isAuth: false
  }
  
  static getDerivedStateFromProps(nextProps, nextState){
    const {auth} = nextProps
    if(auth.uid){
      return {isAuth: true}
    } else{
      return {isAuth: false}
    }
 
  }

  logOut = () =>{
    const {firebase} = this.props
    firebase.logout()
    .then(() => {
      this.props.notifyChange({message: 'Logged out Successfuly!', message_type: 'success'})
      this.props.history.push('/')
    })
    .catch((err) => this.props.notifyChange({message: 'there is problem in logging out!', message_type: 'danger'}))
  }
  
  render(){
    const {auth} = this.props
    return (
      <nav className="navbar bg-dark navbar-dark navbar-expand-md">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/img/logo1.png" alt="logo" id="logo-img"></img>
          </Link>
          <button className="navbar-toggler btn btn-outline-warning mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon btn btn-outline-warning btn-sm"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
              {this.state.isAuth? <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {auth.email}
                    </a>
                    <div className="dropdown-menu bg-light text-center" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item nav-link text-dark" href="#" onClick={this.logOut}>Sign Out</a>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/settings">Settings</Link>
                    </div>
                  </li>
                </ul> :  <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link text-black " to="/users/signin"><button className="btn btn-sm btn-warning">Sign In</button></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-black " to="/users/signup"><button className="btn btn-sm btn-outline-warning">Sign  Up</button></Link>
                  </li>
                </ul>}
          </div>
        </div>
      </nav>
  )
  }
  
}

export default compose(
  firestoreConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth,
    
  }),
   {notifyChange}
  )
)(withRouter(Nav))

