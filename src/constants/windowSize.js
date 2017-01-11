import { Component } from 'react'

class WindowDimensions extends Component {
  constructor(props){
    super(props)

    this.updateDimensions = this.updateDimensions.bind(this)

    this.state = {
      width: null,
      height: null
    }
  }
  render() {
      return null
  }
  updateDimensions() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
  }
  componentWillMount() {
      this.updateDimensions();
  }
  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }
}

export default WindowDimensions
