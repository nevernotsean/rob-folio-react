import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import '../assets/stylesheets/projectList.css'

class ProjectList extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        winh: null,
        listOffset: 0
      }
      this.resizeHandler = this.resizeHandler.bind(this)
      this.scrollHandler = this.scrollHandler.bind(this)
      this.createProjectListItem = this.createProjectListItem.bind(this)
    }
    componentDidMount(){
      window.addEventListener('resize', this.resizeHandler)
      window.addEventListener('scroll', this.scrollHandler)
    }
    componentWillUnmount(){
      window.removeEventListener('resize', this.resizeHandler)
      window.removeEventListener('scroll', this.scrollHandler)
    }
    resizeHandler(){
      this.setState({
        winh: window.innerHeight
      })
    }
    scrollHandler(){
      let node = ReactDOM.findDOMNode(self)
      let trigger = ( node.clientHeight / 2 ) + 50
      let scrollY = window.scrollY

      if ( scrollY > trigger ){
        window.scrollTo(0, 0)
      }
    }
    reorderList(){
      let projects = this.props.projects

      let firstArr = projects.slice(0, this.state.listOffset)
      let secondArr = projects.slice(this.state.listOffset, projects.length)

      let reorderProjects = secondArr.concat(firstArr)
      reorderProjects = reorderProjects.concat(reorderProjects)

      return reorderProjects
    }
    createProjectListItem(project, i) {
        let fields = project.fields
        let title = fields.title
        let roles = fields.roles.join(' / ')
        let thumb = fields.previewThumbnail.fields.file.url
        let slug = (!fields.projectSlug) ? this.slugify(title) : this.slugify(fields.projectSlug)
        let flipThumb = ( (i % 2) === 0 ) ? '-100%' : '0'
        let style = {
          marginBottom: window.innerHeight / 6
        }
        // console.log(project)
        return (
            <li className="project" key={project.sys.id + '-' + i} style={style}>
              <Link to={slug}>
                  <div className="project-wrapper">
                    <h1 className="outline">{ title }</h1>
                    <h2 className="subhead roles">{ roles }</h2>
                    <img style={{
                      transform: 'translate(' + flipThumb + ', -50%)'
                    }} className="thumb" src={thumb} alt="" />
                  </div>
              </Link>
            </li>
        );
    }
    slugify(text){
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
    }
    render() {
        return (
            <div className="project-list">
                <ul className="projects menu vertical">
                  { this.reorderList().map( this.createProjectListItem ) }
                </ul>
            </div>
        )
    }
}
ProjectList.propTypes = {
    projects: React.PropTypes.array
};
export default ProjectList;
