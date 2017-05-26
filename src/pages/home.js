import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Header from '../components/Header'

import ProjectList from '../components/ProjectsList'

const Home = React.createClass({
  propTypes: {
    projectData: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
  },
  render() {
    return (
      <div className="content">
        <Header />
        <ProjectList projects={this.props.projectData} />
      </div>
    )
  },
})
const mapStateToProps = state => {
  return {
    projectData: state.projectData,
  }
}

export default connect(mapStateToProps)(Home)
