import React, { Component } from 'react'
import ProjectList from '../components/projectList.js'
// import contentful from 'contentful'

class Home extends Component {
  render() {
    return (
      <div className="content">
        <ProjectList projects={this.props.projectData} />
      </div>
    )
  }
}

export default Home
