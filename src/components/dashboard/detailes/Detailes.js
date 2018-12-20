import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {getClient, deleteClient} from '../../../actions/actionCreators';
import {Link} from 'react-router-dom';
import ClientDetailes from './ClientDetailes';
import EditClient from './EditClient';
import PropTypes from 'prop-types';


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
  }
}

Detailes.propTypes = {
    client: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    client: state.client.client
})

export default connect(mapStateToProps)(Detailes)