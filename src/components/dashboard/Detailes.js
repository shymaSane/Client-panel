import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getClient} from '../../actions/actionCreators'

class Detailes extends Component {
    componentWillMount(){
        const {id} = this.props.match.params
        this.props.getClient(id)
        console.log(id)
    }
  render() {
    return (
      <div>
        <div className="container d-flex justify-content-center mt-5">
            <div className = "col-md-8 col-sm-11">
                <div className="card bg-light text-dark border-danger">
                    <div className="card-header bg-light text-center">
                        <h3 className= "text-secondary"></h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default connect(null,{getClient})(Detailes)