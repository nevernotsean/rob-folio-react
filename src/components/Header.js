import React from 'react'
import { Link } from 'react-router-dom'

const Header = function(props) {
  return (
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
  )
}

export default Header
