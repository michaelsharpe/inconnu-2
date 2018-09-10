import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export const HomePageTemplate = ({
  title,
  heading,
  hero,
  section1
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <h1>{title}</h1>
        <h2>{heading}</h2>
      </div>
    </div>
  </section>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  hero: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  section1: PropTypes.shape({
    content: PropTypes.string
  })
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        hero={frontmatter.hero}
        section1={frontmatter.section1}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        hero {
          title,
          content
        }
        section1 {
          content
        }
      }
    }
  }
`