import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import escudo from '../assets/images/escudo.png'
import cplus from '../assets/images/cplus.png'
import csharp from '../assets/images/csharp.png'
import java from '../assets/images/java.png'
import python from '../assets/images/python.png'
import ruby from '../assets/images/ruby.png'
import html from '../assets/images/html.png'
import js from '../assets/images/js.png'
import angular from '../assets/images/angular.png'
import sql from '../assets/images/sql.png'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p>
                  Systems and Computing Engineering Student - National University of Colombia.
                  23 years old.
                </p>
                 <p>

                </p>
              </div>
              <span className="image"><img src={escudo} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Skills</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon  "><img src={csharp} alt="" /></span>
                <h3>C#</h3>
               </li>
                <li>
                    <span className="icon  "><img src={cplus} alt="" /></span>
                    <h3>C++</h3>
                </li>
                <li>
                    <span className="icon  "><img src={java} alt="" /></span>
                    <h3>Java</h3>
                </li>
                <li>
                    <span className="icon  "><img src={python} alt="" /></span>
                    <h3>Python</h3>
                </li>
                <li>
                    <span className="icon  "><img src={html} alt="" /></span>
                    <h3>html</h3>
                </li>
                <li>
                    <span className="icon  "><img src={js} alt="" /></span>
                    <h3>Javascript</h3>
                </li>
                <li>
                    <span className="icon  "><img src={ruby} alt="" /></span>
                    <h3>Ruby</h3>
                </li>
                <li>
                    <span className="icon  "><img src={angular} alt="" /></span>
                    <h3>Angular</h3>
                </li>

                <li>
                    <span className="icon  "><img src={sql} alt="" /></span>
                    <h3>SQL</h3>
                </li>
              
            </ul>
          </section>

          

          <section id="cta" className="main special">
            <header className="major">
               <h2>Experience</h2>
                <p>Developer 2018 ~ : Siemens<br />
              </p>
            </header>
           
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

/*
    < section id = "second" className = "main special" >
        <header className="major">
            <h2>Ipsum consequat</h2>
            <p>Do.</p>
        </header>

        <p className="content">while....</p>
     
          </section >


 < footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer >
              */
