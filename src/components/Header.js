import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/io.jpg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Diana Carolina Navarrete Ramirez</h1>
        <p>Developer</p>
    </header>
)

export default Header
