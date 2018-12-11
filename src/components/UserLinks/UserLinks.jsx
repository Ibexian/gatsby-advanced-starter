import React, { Component } from "react";
import "./UserLinks.css";

class UserLinks extends Component {
  getLinkElements() {
    const { config: {userLinks}, labeled } = this.props;
    return userLinks.map(link => (
      <li keykey={link.label}>
        <a href={link.url} className={link.iconClassName}>
          {labeled ? link.label : ""}
        </a>
      </li>
    ));
  }

  render() {
    const { config: {userLinks} } = this.props;
    if (!userLinks) {
      return null;
    }
    return <ul className="sideNav">{this.getLinkElements()}</ul>;
  }
}

export default UserLinks;
