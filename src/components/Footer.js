import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Contact</h2>
            <dl className="alt">
                <dt>Email</dt>
                <dd><a href="mailto:dcnavarreter@unal.edu.co">dcnavarreter@unal.edu.co</a></dd>
            </dl>
        </section>
        <section>
            <h2></h2>
            <ul className="icons">
                <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="https://github.com/DiaNavarrete" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; 2018. Design: <a href="https://www.gatsbyjs.org/">Gatsby</a>.</p>
    </footer>
)

export default Footer
