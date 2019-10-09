import React from 'react';
import { Link } from "react-router-dom";


export default class UserControls extends React.Component {
  render() {
    let { currentUser } = this.props;
    return (
      <nav className="user-nav">
        <img className="profile-picture" src={ currentUser.profile_picture || window.defaultIcon } alt=""/>
        <h2>{ currentUser.username }</h2>
        <Link to="/settings"><i className="fas fa-cog"></i></Link>
      </nav>
    )
  }
}