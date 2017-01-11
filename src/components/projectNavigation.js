import React from 'react';
import {Link} from 'react-router';

class ProjectNavigation extends React.Component {

    // constructor(props){
    //   super(props)
    // }

    // TODO: match the pagination to the data model, possible use react-pagination
    // getProjects(){
    //   let activeID = this.props.activeProject.id
    //   let nextProject = this.props.projects[activeID + 1]
    //   let prevProject = this.props.projects[activeID - 1]
    //   return {
    //     prev: prevProject,
    //     next: nextProject
    //   }
    // }

    renderPrev() {
        return (
            <ul className="menu simple float-left">
                <li>
                    <Link to={"/projects/"}>Previous</Link>
                </li>
            </ul>
        )
    }

    renderNext() {
        return (
            <ul className="menu simple float-right">
                <li>
                    <Link to={"/projects/"}>Next</Link>
                </li>
            </ul>
        )
    }

    render() {
        return (
            <div className="project-nav">
                <nav>
                    {this.renderPrev()}
                    {this.renderNext()}
                </nav>
            </div>
        );
    }
}
ProjectNavigation.propTypes = {};
export default ProjectNavigation;
