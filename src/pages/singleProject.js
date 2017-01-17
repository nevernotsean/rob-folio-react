import React from 'react';
// import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import ProjectRow from '../components/projectRow.js'
import '../assets/stylesheets/singleProject.css'

class SingleProject extends React.Component {
    constructor(props) {
        super(props)

        this.getProject = this.getProject.bind(this)
        this.scrollHandler = this.scrollHandler.bind(this)

        this.state = {
            activeProject: false,
            scrollY: window.innerHeight
        }
    }
    componentDidMount() {
        this.scrollHandler()
        this.getProject()
        window.addEventListener('scroll', this.scrollHandler)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler)
    }
    scrollHandler() {
        setTimeout(() => {
            this.setState({scrollY: window.scrollY})
        }, 500)
    }
    slugify = function(text) {
        return text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
    }
    getProject() {
        let self = this
        let slug = this.props.params.projectSlug
        let projects = this.props.projectData
        let activeProject = projects.filter(function(project) {
            let testSlug = project.fields.projectSlug
            if (!testSlug) {
                testSlug = self.slugify(project.fields.title)
            }
            return testSlug === slug
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
    lerp(v0, v1, t) {
        return v0 * (1 - t) + v1 * t
    }
    render() {
        if (!this.state.activeProject) {
            return false
        }
        let fields = this.state.activeProject.fields
        let {roles, title, description, projectCredits} = fields
        roles = roles.join(' / ')

        let rows = fields.assets

        return (
            <div className="single-project" style={{
                padding: '80px 0'
            }}>
                <div className="row expanded medium-collapse padded">
                    <div className="small-12 medium-4 large-3 column" ref="column">
                        <div className="content-wrapper">
                            <div className="content" style={{
                                paddingTop: this.state.scrollY + 'px',
                                transition: 'padding-top 2s ease'
                            }}>
                                <span className="roles">{roles}</span>
                                <h1 className="title">{title}</h1>
                                <div className="description">
                                    <ReactMarkdown source={description}/>
                                </div>
                                <div className="credits">
                                    {projectCredits && <ReactMarkdown source={projectCredits}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="small-12 medium-8 large-9 column end">
                        <div className="images">
                            {rows.map(function(row, i) {
                                return <ProjectRow rowData={row.fields} key={row.sys.id + '-' + i}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleProject;
