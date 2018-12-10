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
            <div>
                {clients.map(client => <Client 
                    key={client.id}
                    name={client.name}
                    email={client.email}
                    balance={client.balance}
                />)}
            </div>
        ) 
    }
}

export default Dashboard