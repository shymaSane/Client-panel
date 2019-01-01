import React, { Component } from 'react'

export default class Settings extends Component {
  render() {
    return (
    <div className="container d-flex justify-content-center">
        <div className="col-sm-11 col-md-8 ">
            <div className="card card-body">
                <div className="form-check my-2">
                    <input className="form-check-input" type="checkbox" value="" id="balance"></input>
                        <label className="form-check-label-lg d-block" htmlFor="balance">
                            Disable Balance
                        </label>
                </div>
                <div className="form-check my-2">
                    <input className="form-check-input" type="checkbox" value="" id="register"></input>
                        <label className="form-check-label-lg d-block" htmlFor="register">
                            Disable Register
                        </label>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

