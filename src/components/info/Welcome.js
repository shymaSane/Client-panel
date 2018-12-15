import React from 'react'
import {Link} from 'react-router-dom'

function Welcome() {
  return (
    <div className="container mt-5 text-center"> 
        <div className="jumbotron">
            <h1 className="dispaly-4"> Welcome To <span className="text-warning">CL</span>IENT <span className="text-warning">PA</span>NEL</h1>
            <p className="lead">This app ll help you to maintain, add, delete, save client information and use any time you need it.</p>
            <hr className="my-4"></hr>
            <p> Start the great experince here.</p>
            <Link className="btn btn-warning btn-lg mr-2" to="/users/signin" role="button">Sign In</Link>
            <Link className="btn btn-warning btn-lg" to="/users/signup" role="button">Sign Up</Link>
        </div>
    </div>
  )
}

export default Welcome