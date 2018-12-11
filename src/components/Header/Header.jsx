import React, { Component } from "react";
import  { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Header.css";


class Header extends Component {
    getDisplayCategories() {
        const { config: { displayCategories } } = this.props;
        const navList = displayCategories.map(category => (
          <li key={category.name}>
            {category.name !== "Video" ?
                (
                  <Link to={category.category ? `/categories/${category.category}` : category.url} className={category.className}>
                    {category.name}
                    {category.subLinks ?
                        (<span className="dropArrow">&#9660;</span>) : ""}
                  </Link>) :
                (
                  <a href={category.url}>
                    {category.name}
                  </a>
                )
            }
            {this.displaySubLinks(category.subLinks)}
          </li>
        ));

        return navList;
    }

    displaySubLinks(sublinks) {
        const {config: {recipeTags}} = this.props;
        const tagList = recipeTags.map(tag => (
          <li key={tag.tag}>
            <Link to={`/tags/${tag.tag}`} key={tag.tag}>
              {tag.name}
            </Link>
          </li>
        ));
        if (!sublinks) {
            return null;
        }
        return (
          <ul className="subnav"> 
            {tagList}
          </ul>
        );
    }

    render() {
        const { config } = this.props;
        return (
          <header className="siteHeader">
            <div className="navigation-wrapper">
              <div className="top-navigation">
                <nav role="navigation" id="site-nav" className="nav">
                  <ul>
                    {this.getDisplayCategories()}
                  </ul>
                </nav>
                <UserLinks config={config} />
              </div>
              <div className="site-name">
                <Link to="/">East Meets Kitchen</Link>
              </div>
            </div>
          </header>
        );
    }
}

export default Header;