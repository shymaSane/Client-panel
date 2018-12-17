import React, { Component } from 'react'


 class EditClient extends Component {
    state ={
      name: '',
      phone: '',
      email: '',
      balance: '',
      id: ''
    }

   componentWillReceiveProps(nextProps){
      const {name, phone, email, balance, id} = nextProps.client
      this.setState({
        name,
        phone,
        email,
        balance,
        id
      })
   }

  render() {
      const {name, phone, email, balance, id} = this.state
    return (
          <form>
            <div className="card bg-light text-dark">
                <div className="card-header text-center form-group">
                <input type="text" className="form-control" id="name" name="name" value={name}></input>
                </div>
                <div className="card-body">
                  <div className="form-row">
                      <div className="col-9">
                        <label htmlFor="id">ClientID:</label>
                        <input type="text" className="form-control" value={id}></input>
                      </div>
                      <div className="col-3">
                        <label htmlFor="balance">Balance:</label>
                        <input type="text" className="form-control" value={balance}></input>
                      </div>
                  </div>
                      <div className="form-group">
                          <label htmlFor="phone">Client Phone:</label>
                          <input type="text" className="form-control" id="phone" name="phone" value={phone}></input>
                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Client email:</label>
                          <input type="email" className="form-control" id="email" name="email" value={email}></input>
                      </div>
                      <button type="submit" className="btn btn-outline-dark btn-block">Update</button>
                </div>
            </div>
        </form>
    )
  }
}

export default (EditClient)