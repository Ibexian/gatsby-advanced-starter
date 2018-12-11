import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import Layout from "../layout";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";
import $ from 'jquery';
window.jQuery = $;
require("../components/Video/fitVids.js");

export default class PostTemplate extends React.Component {
  componentDidMount() {
    $("#main").fitVids();
  }

  componentWillUnmount() {
    $("#main").fitVids('destroy');
  }

  displayPhotoOrVideo() {
    const { data: { markdownRemark: frontmatter } } = this.props;
    const {frontmatter: {feature_video}} = frontmatter;
    if (feature_video) {
      return (
        <div className="youtube">
          <iframe className="youtube-player" type="text/html" width="640" height="385" src={feature_video} allowFullScreen frameBorder="0"></iframe>
        </div>
      )
    }

    return (
      <Img fluid={frontmatter.frontmatter.image.feature.childImageSharp.fluid} className="headerImage" />
    )
  }

  render() {
    const { pageContext: {slug}, data: {markdownRemark: postNode } } = this.props;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div>
            {this.displayPhotoOrVideo()}
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        image {
          feature {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        feature_video
        date
        categories
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
