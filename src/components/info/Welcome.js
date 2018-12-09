import React from 'react'
import {Link} from 'react-router-dom'

function Welcome() {
  return (
    <div className="container mt-5 text-center"> 
        <div className="jumbotron">
            <h1 className="dispaly-4"> Welcome To Client Panel</h1>
            <p class="lead">This app ll help you to maintain, add, delete, save client information and use any time you need it.</p>
            <hr class="my-4"></hr>
            <p> Start the great experince here.</p>
            <Link class="btn btn-danger btn-lg mr-2" to="/user/signin" role="button">Sign In</Link>
            <Link class="btn btn-danger btn-lg" to="/users/signup" role="button">Sign Up</Link>
        </div>
    </div>
  )
}

export default Welcome