import React, { Component } from 'react';
import {connect} from 'react-redux';
import {disableBalance, disableRegister} from '../../actions/SettingsCreator'
 
class Settings extends Component {
    onAllowBalanceChange = () =>{
        this.props.disableBalance()
    }

    onAllowRegisterChange= () =>{
        this.props.disableRegister()
    }
  render() {
      const {disable_balance, disable_register} = this.props.settings
    return (
    <div className="container d-flex justify-content-center">
        <div className="col-sm-11 col-md-8 card">
        <div className="card-header">Change settings</div>
            <div className="card-body">
                <form>
                    <div className="form-group my-2">
                        <label htmlFor="balance">Disable Balance On Edit</label> {' '}   <input type="checkbox" name="disable_balance" checked={!!disable_balance} onChange={this.onAllowBalanceChange}></input>  
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="register">Disable Register</label> {' '} <input  type="checkbox" name="disable_register" checked={!!disable_register} onChange={this.onAllowRegisterChange}></input>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
  }
}

export default connect((state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
}),{disableRegister, disableBalance})
(Settings)