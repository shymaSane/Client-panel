import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getClient} from '../../../actions/actionCreators';
import {Link} from 'react-router-dom';
import ClientDetailes from './ClientDetailes';
import EditClient from './EditClient';
import PropTypes from 'prop-types'

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
                <ClientDetailes client={client} id={id}/>
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

export default connect(mapStateToProps,{getClient})(Detailes)