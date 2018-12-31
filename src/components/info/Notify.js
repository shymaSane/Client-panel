import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';

const Notify = (props) => {
  const {message, message_type} = props.notifications

  console.log(props)
  return (
    <div className={classnames({
      'alert': true,
      'text-center': true,
      'alert-success': message_type === 'success',
      'alert-danger' : message_type === 'danger'
    })}>
      {message}
    </div>
    
  )
}

const mapStateToProps = (state) => ({
  notifications: state.notifications
})

export default connect(mapStateToProps)(Notify)