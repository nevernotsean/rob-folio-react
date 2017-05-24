import React from 'react'
import contentful from 'contentful'
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
    const client = contentful.createClient({
      accessToken: '751eb90638512801ed48bcb8c431c20874c2edd067426e3e19428720a0d2ae7f',
      space: 'a72w7g4zs2xs',
    })

    client
      .getEntries({ content_type: 'projectList', include: 2 })
      .then(response => {
        this.setState({
          projectData: response.items[0].fields.projectsReference,
          client: client,
        })
        // console.log(response)
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
