import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getClient} from '../../actions/actionCreators'

class Detailes extends Component {
    componentWillMount(){
        const {id} = this.props.match.params
        this.props.getClient(id)
    }
  render() {
    const {client} = this.props
    const {id} = this.props.match.params
    return (
        
      <div>
        <div className="container d-flex justify-content-center mt-5">
            <div className = "col-md-8 col-sm-11">
                <div className="card bg-light text-dark border-danger">
                    <div className="card-header bg-light text-center">
                        <h3 className= "text-secondary">{client.name}</h3>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h6> CLientID: {id} <span className="pull-right"></span></h6>
                            <h6 className="pull-right">Balance: {client.balance}</h6>
                        </div>
                        <div className="list-group">
                            <li className="list-group-item">CLient Phone: {client.phone}</li>
                            <li className="list-group-item">CLient Email: {client.email}</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    client: state.client.client
})

export default connect(mapStateToProps,{getClient})(Detailes)