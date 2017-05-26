import React from 'react'

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getProjectData} from '../utils/actionCreators'

import Header from '../components/Header'
import ProjectList from '../components/ProjectsList'

import fuckMobile from '../assets/fuck_mobile.png'

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProjectData())
  }
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
  }
}

Home.propTypes = {
  projectData: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    projectData: state.projectData,
  }
}

export default connect(mapStateToProps)(Home)
