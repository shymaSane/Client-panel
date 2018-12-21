import React, { Component } from 'react';
import Client from './Client';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
// import {getClients} from '../../actions/actionCreators';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


 class Dashboard extends Component {
    componentWillMount(){
        // this.props.getClients()

    }
    render() {
         const {clients} = this.props
         console.log(this.props)
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
                                <th scope="col">balance $</th>
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
                                <th scope="col">#</th>
                                <td colSpan="5" className= "text-danger">
                                    <strong>TOTAL:  <span className="text-success">{clients.reduce((acc, client) => {
                                        acc += parseInt(client.balance)
                                        return acc
                                    }, 0)}$</span></strong>
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


   


export default compose(
    firestoreConnect([{collection: 'dashboard'}]), // or { collection: 'todos' }
    connect((state) => ({
      clients: state.firestore.ordered.dashboard
    }))
   )(Dashboard)