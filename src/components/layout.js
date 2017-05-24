import React from 'react'
import { Link } from 'react-router'
// import classNames from 'classnames';
import fuckMobile from '../assets/fuck_mobile.png'
import contentful from 'contentful'

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projectData: [],
      client: {},
    }
  }
  componentWillMount() {
    let self = this
    let client = contentful.createClient({
      accessToken: '751eb90638512801ed48bcb8c431c20874c2edd067426e3e19428720a0d2ae7f',
      space: 'a72w7g4zs2xs',
    })

    client
      .getEntries({ content_type: 'projectList', include: 2 })
      .then(function(response) {
        self.setState({
          projectData: response.items[0].fields.projectsReference,
          client: client,
        })
      })
  }
  hideForLarge() {
    if (window.innerWidth < 768) {
      return 'block'
    } else {
      return 'none'
    }
  }
  render() {
    return (
      <div className="site">
        <div className="header">
          <nav>
            <ul className="corners">
              <li className="menu-item home">
                <Link to="/">Robin Major</Link>
              </li>
              <li className="menu-item has-submenu">
                <a>Brands</a>
                <ul className="sub-menu">
                  <li>Google</li>
                  <li>Supra Footwear</li>
                  <li>The Guggenheim</li>
                  <li>Bank Simple</li>
                  <li>Spotify</li>
                  <li>Venue Skateboards</li>
                  <li>Palladium Boots</li>
                  <li>10.Deep</li>
                  <li>Ted Talks</li>
                  <li>300 Records</li>
                  <li>UCLA Anderson</li>
                  <li>Temple University</li>
                  <li>Adriano Goldschmied</li>
                  <li>MNMNT Snowboards</li>
                  <li>The Macallan</li>
                  <li>Black Tux</li>
                  <li>LeEco</li>
                  <li>The Boardwalk</li>
                </ul>
              </li>
              <li className="menu-item has-submenu">
                <ul className="sub-menu">
                  <li>
                    <a className="underline" href="mailto:Hello@robinmajor.us">
                      Email
                    </a>
                  </li>
                  <li>Full Portfolio on request</li>
                </ul>
                <div className="wrapper">
                  <a className="rotate">Contact</a>
                </div>
              </li>
              <li className="menu-item has-submenu">
                <ul className="sub-menu">
                  <li>Surfer</li>
                  <li>Skateboarder</li>
                  <li>Designer</li>
                  <li>Art Director</li>
                  <li>VCU basketball fan</li>
                  <li>Hip Hop enthusiest</li>
                  <li>Snowboarder</li>
                  <li>Soccer player</li>
                  <li>(in that order)</li>
                </ul>
                <a className="rotate">About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="page row expanded">
          {this.props.children &&
            this.state.projectData.length > 0 &&
            React.cloneElement(this.props.children, {
              projectData: this.state.projectData,
              client: this.state.client,
            })}
        </div>
        <div
          className="small-screen"
          style={{
            top: 0,
            position: 'absolute',
            zIndex: '9999',
            display: this.hideForLarge(),
          }}
        >
          <a href="mailto:robin@robinmajor.us">
            <img
              role="presentation"
              style={{ width: '100%', maxWidth: 'none' }}
              src={fuckMobile}
            />
          </a>
        </div>
      </div>
    )
  }
}

export default Layout
