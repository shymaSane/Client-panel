import React, { Component } from 'react';
import Client from './Client';
import {connect} from 'react-redux'
import {getClients} from '../../actions/actionCreators'

 class Dashboard extends Component {
    componentWillMount(){
        this.props.getClients()
    }
    render() {
         const {clients} = this.props
        return (
            <div className="container my-md-5 mx-md-5 ">
            <div className = "col-md-8 col-sm-11">
                <div className='row d-flex justify-content-between'>
                    <h2 className="text-danger">Clients</h2>
                    <button className="btn btn-success my-1">+ New</button>
                </div>
                <div className="row">
                    <table className="table table-striped">
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
                            />)} 
                        </tbody>
                    </table>
                
                    </div>
                </div>
            </div>
        ) 
    }
}

const mapStateToProps = (state) =>{
    return {
        clients: state.client.clients
    }
}
   


export default connect(mapStateToProps, {getClients})(Dashboard)