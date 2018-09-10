import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/Home-page'

const HomePagePreview = ({ entry, widgetFor }) => (
  <HomePageTemplate
    title={entry.getIn(['data', 'title'])}
    heading={entry.getIn(['data', 'heading'])}
    hero={entry.gertIn(['data', 'hero'])}
    section1={entry.getIn(['data', 'section1'])}
  />
)

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HomePagePreview
