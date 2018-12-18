import React, { Component } from 'react';
import Client from './Client';
import {connect} from 'react-redux'
import {getClients} from '../../actions/actionCreators'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


 class Dashboard extends Component {
    componentWillMount(){
        this.props.getClients()
    }
    render() {
         const {clients} = this.props
        return (
            <div className="container my-md-5 mx-md-5 d-flex justify-content-center">
            <div className = "col-md-8 col-sm-11">
                <div className='row d-flex justify-content-between'>
                    <h2 className="text-dark"><i className="fas fa-users text-warning"></i> Clients</h2>
                    <Link className="btn btn-dark my-1 px-5" role="button" to="/client/add">+ New</Link>
                </div>
                <div className="row">
                    <table className="table table-striped table-secondary text-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">balance</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map(client => <Client 
                                key={client.id}
                                name={client.name}
                                email={client.email}
                                balance={client.balance}
                                id={client.id}
                            />)} 
                        </tbody>
                        <tbody>
                            <tr scope ="row">
                                <td colSpan="5" className= "text-danger">
                                    <strong>TOTAL:</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                    </div>
                </div>
            </div>
        ) 
    }
}

Dashboard.propTypes = {
    clients: PropTypes.array.isRequired
};

const mapStateToProps = (state) =>{
    return {
        clients: state.client.clients 
    }
}
   


export default connect(mapStateToProps, {getClients})(Dashboard)