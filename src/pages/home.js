import React from 'react'
import ReactCreateClass from 'create-react-class'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getProjectData} from '../utils/actionCreators'

import Header from '../components/Header'
import ProjectList from '../components/ProjectsList'

import fuckMobile from '../assets/fuck_mobile.png'

const Home = ReactCreateClass({
  propTypes: {
    projectData: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
  },

  componentDidMount() {
    this.props.dispatch(getProjectData())
  },
  render() {
    return (
      <div className="page row expanded">
        <Header />
        <div className="content">
          <ProjectList projects={this.props.projectData} />
        </div>
        <div className="small-screen">
          <a href="mailto:robin@robinmajor.us">
            <img
              alt="This site is not mobile friendly"
              style={{width: '100%', maxWidth: 'none'}}
              src={fuckMobile}
            />
          </a>
        </div>
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
