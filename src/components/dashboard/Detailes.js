import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getClient} from '../../actions/actionCreators'
import {Link} from 'react-router-dom'

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
                <div className="my-3 d-flex justify-content-between">
                    <Link to="/dashboard" className="text-dark"><i className="fas fa-backward text-warning"></i> <strong>Back</strong></Link>
                    <div>
                        <Link className="btn btn-dark" role="button" to="/client/edit">EDIT</Link>
                        <button className="btn btn-warning ">DELETE</button>
                    </div>
                    
                </div>
                <div className="card bg-light">
                    <div className="card-header bg-light text-center">
                        <h3 className= "text-warning">{client.name}</h3>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center my-3">
                            <h5> CLientID: {id}</h5>
                            <h5 >Balance: {client.balance}$<button className=" btn btn-link btn-inline mb-2 btn-lg"><i className="fas fa-edit text-warning"></i></button></h5>
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