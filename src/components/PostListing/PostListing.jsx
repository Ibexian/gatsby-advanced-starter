import React from "react";
import { Link } from "gatsby";
import Img from 'gatsby-image';
import "./PostListing.css";


class PostListing extends React.Component {

  getPostList() {
    const postList = [];
    // eslint-disable-next-line
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.path || postEdge.node.fields.slug,
        tags: postEdge.tags || postEdge.node.frontmatter.tags,
        cover: postEdge.cover || postEdge.node.frontmatter.image.feature.childImageSharp.fluid,
        title: postEdge.title || postEdge.node.frontmatter.title,
        date: postEdge.date || postEdge.node.fields.date,
        src: postEdge.src
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();


    return (
      <div className="postContainer">
        {postList.map(post => (
          <Link to={post.path} key={post.title}>
            <div className="postBox">
              { post.src ?
                (<div className="postImage" style={{background: `url(${post.src}) center center`}} />)
                :
                (<Img fluid={post.cover} className="postImage" />)
              }
              <h2>{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;
