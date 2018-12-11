import React, { Component } from 'react'

class SignIn extends Component {
  render() {
    return (
    <div className="container d-flex justify-content-center mt-5">
        <div className = "col-md-5 col-sm-11">
            <div className="card bg-secondary border-danger">
                <div className="card-header bg-light text-center">
                    <img src="/img/logo.png"  alt="logo" id="logo1-img"></img>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email" className="text-white">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="text-white">password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Enter password"></input>
                        </div>
                        <button type="submit" className="btn btn-danger btn-block">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default SignIn