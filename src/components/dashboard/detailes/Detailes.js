import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

// import {getClient, deleteClient} from '../../../actions/actionCreators';
import {Link} from 'react-router-dom';
import ClientDetailes from './ClientDetailes';
import EditClient from './EditClient';
import PropTypes from 'prop-types';
import Spinner from '../Spinner'


class Detailes extends Component {
    state = {
        toggle: true
    }

    componentWillMount(){
        const {id} = this.props.match.params
        // this.props.getClient(id)
    }

    deleteCurrentClient = () =>{
        const {id} = this.props.match.params
        // this.props.deleteClient(id)
        this.props.history.push('/dashboard')
    }

    onToggle = () =>{
        this.setState((state) => ({
            toggle: !state.toggle
        }))
    }

  render() {
    const {client} = this.props
    const {id} = this.props.match.params
   
    if(client){
        
        return (
        
            <div>
              <div className="container d-flex justify-content-center mt-5">
                  <div className = "col-md-8 col-sm-11">
                      <div className="my-3 d-flex justify-content-between">
                          <Link to="/dashboard" className="text-dark"><i className="fas fa-backward text-warning"></i> <strong>Back</strong></Link>
                          <div>
                              <button className="btn btn-dark" onClick={this.onToggle}>EDIT</button>
                              <button className="btn btn-warning" onClick={this.deleteCurrentClient}>DELETE</button>
                          </div>
                      </div>
                      {this.state.toggle? <ClientDetailes client={client} id={id}/> : <EditClient client = {{...client, id}}/>}
                      
                      
                  </div>
              </div>
            </div>
          )
    } else {
        
        return <Spinner />
    }
    
  }
}




export default compose(
    firestoreConnect((props) => [
      { collection: 'dashboard', storeAs : 'client', doc: props.match.params.id } // or `todos/${props.todoId}`
    ]),
    connect(({ firestore: { ordered } }, props) => ({
      client: ordered.client && ordered.client[0]
    }))
   )(Detailes)