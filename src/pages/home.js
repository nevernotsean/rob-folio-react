import React, {Component} from 'react';
import ProjectList from '../components/projectList.js';
// import contentful from 'contentful'


class Home extends Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //       projectData: []
    //     }
    // }
    // componentWillMount(){
    //   var self = this
    // }
    render() {
        return (
            <div className="content">
                <ProjectList projects={this.props.projectData}/>
            </div>
        );
    }
}

export default Home;
