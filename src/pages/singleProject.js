import React from 'react';
// import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import ProjectRow from '../components/projectRow.js'
import '../assets/stylesheets/singleProject.css'

class SingleProject extends React.Component {
    constructor(props) {
        super(props)

        this.getProject = this.getProject.bind(this)
        this.createRowNodes = this.createRowNodes.bind(this)

        this.state = {
            activeProject: false
        }
    }
    componentDidMount() {
        this.getProject()
    }
    getProject() {
        let slug = this.props.params.projectSlug
        let projects = this.props.projectData
        let activeProject = projects.filter(function(project) {
            return project.fields.projectSlug === slug
        })

        this.setState({activeProject: activeProject[0]})
    }

    createCredits(row, i) {
        return (
            <li key={'credit-' + i}>
                <h6 className="credit">{row.name}<br/>
                    <span className="role">{row.role}</span>
                </h6>
            </li>
        )
    }
    createRowNodes(rows){
      rows.map(function(row, i) {
          return (
            row.fields && <ProjectRow rowData={row.fields} key={row.sys.id + '-' + i}/>
          )
      })
    }
    render() {
        if (!this.state.activeProject) {
            return false
        }
        let fields = this.state.activeProject.fields
        let rows = fields.assets
        let {roles, title, description, projectCredits} = fields
        roles = roles.join(' / ')
        return (
            <div className="single-project">
                <div className="row expanded medium-collapse padded">
                    <div className="small-12 medium-4 large-3 column">
                        <div className="content-wrapper">
                            <div className="content" style={{
                                width: window.innerWidth / 3 + 'px'
                            }}>
                                <span className="roles">{roles}</span>
                                <h1 className="title">{title}</h1>
                                <div className="description">
                                    <ReactMarkdown source={description}/>
                                </div>
                                <div className="credits">
                                    <ReactMarkdown source={projectCredits}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="small-12 medium-8 large-9 column end">
                        <div className="images">{ this.createRowNodes(rows) }</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleProject;
