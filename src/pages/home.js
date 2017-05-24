import React from 'react'
import client from '../utils/contentfulClient.js'
// import PropTypes from 'prop-types'

import ProjectList from '../components/ProjectsList'

const Home = React.createClass({
  getInitialState() {
    return {
      projectData: [],
      client: {},
    }
  },
  componentWillMount() {
    this.getProjectList()
  },
  getProjectList() {
    client
      .getEntries({ content_type: 'projectList', include: 1 })
      .then(response => {
        this.setState({
          projectData: response.items[0].fields.projectsReference,
          client: client,
        })
        console.log(response)
      })
  },
  render() {
    return (
      <div className="content">
        {this.state.projectData &&
          <ProjectList projects={this.state.projectData} />}
      </div>
    )
  },
})

export default Home
