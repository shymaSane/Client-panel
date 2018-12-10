import React, { Component } from 'react';
import Client from './Client'

 class Dashboard extends Component {
    state = {
        clients: [
          {
              id: 1,
              name: "shyam abed alaziz",
              phone: '22-222-222',
              email: "noshima100@gmail.com",
              balance: 14
          },
          {
          id: 2,
          name: "jomana abed alaziz",
          phone: '22-222-222',
          email: "jomana100@gmail.com",
          balance: 500
          },
          {
              id: 3,
              name: "rahmah abed alaziz",
              phone: '22-222-222',
              email: "rahmah100@gmail.com",
              balance: 4030
          }

        ]

    }
    render() {
         const {clients} = this.state
        return (
            <div className="container my-md-5 mx-md-5 ">
            <div className = "col-md-8 col-sm-11">
                <div className='row d-flex justify-content-between'>
                    <h2 className="text-danger">Clients</h2>
                    <button className="btn btn-success">+ New</button>
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

export default Dashboard