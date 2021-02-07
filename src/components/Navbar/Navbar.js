import React, { Component } from 'react';
import { NavItems } from '../../data/NavItems';
import './Navbar.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom'; // remove
import { HashLink } from 'react-router-hash-link'; // remove
import { Router } from "react-router"; // remove

// import Pdf from '../../../src/KKim_Resume.pdf';
// import Pdf from '../../../src/KKim_Resume.pdf';

// https://www.youtube.com/watch?v=fL8cFqhTHwA

export class Navbar extends Component {

    render() {

        const {
            visible,
            from,
            navbarWithColor,
            theme // either 'light' or 'dark'
        } = this.props;

        var navClass = classNames({
            'navbar': true,
            'navbar-expand-lg': true,
            'fixed-top': true,
            'invisible': visible === false,
            'navbar-shrink': navbarWithColor,
            'dark-mode': theme === 'dark',
            'light-mode': theme === 'light'
        })

        var navbrandColorClass = classNames({
            'navbar-brand': true,
            'js-scroll-trigger': true,
            'dark-mode': theme === 'dark',
            'light-mode': theme === 'light'
        })

        var navlinkColorClass = classNames({
            'nav-link': true,
            'smooth-scroll': true,
            'py-3': true,
            'px-0': true,
            'px-lg-3': true,
            'rounded': true,
            'js-scroll-trigger': true,
            'dark-mode': theme === 'dark',
            'light-mode': theme === 'light'
        })

        var resumelinkColorClass = classNames({
            'cv_link_software': true,
            'nav-link': true,
            'py-3': true,
            'px-0': true,
            'px-lg-3': true,
            'rounded': true,
            'dark-mode': theme === 'dark',
            'light-mode': theme === 'light'
        })

        var podcastlinkColorClass = classNames({
            'nav-link': true,
            'smooth-scroll': true,
            'py-3': true,
            'px-0': true,
            'px-lg-3': true,
            'rounded': true,
            'dark-mode': theme === 'dark',
            'light-mode': theme === 'light'
        })

        var homeClass = classNames({
            'nav-link': true,
            'py-3': true,
            'px-0': true,
            'px-lg-3': true,
            'dark-mode': theme === 'dark',
            'light-mode': theme === 'light'
        })

        switch (from) {
            case "Home":
                return (
                    <nav className={navClass} style={{ "fontFamily": "Lato", "fontWeight": "300" }} id="mainNav">
                    <div className="container">
                        <div style={{ verticalAlign: 'middle', display: 'inline-block', margin: 0, padding: 0 }}>
                            {/* <img src="img/kk_title_logo.png" style={{"height":"25px"}}/> */}
                            <a style={{ verticalAlign: 'middle', paddingLeft: '6px' }} className={navbrandColorClass} href="#page-top">
                                kylekim.io</a>
                        </div>

                        <button className="navbar-toggler navbar-toggler-right text-uppercase text-black rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars" />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                {/* <Link offset={-57} activeClass="link-active" className="linkClass nav-item mx-0 mx-lg-1 nav-link py-3 px-0 px-lg-3 rounded" to="about" spy={true} smooth={true} delay={50} duration={300}> Overview </Link>
                            <Link offset={-57} activeClass="link-active" className="linkClass nav-item mx-0 mx-lg-1 nav-link py-3 px-0 px-lg-3 rounded" to="portfolio" spy={true} smooth={true} delay={50} duration={300}> Portfolio </Link>
                            <Link offset={-57} activeClass="link-active" className="linkClass nav-item mx-0 mx-lg-1 nav-link py-3 px-0 px-lg-3 rounded" to="contact" spy={true} smooth={true} delay={50} duration={300}> Contact </Link> */}
                                <li className="nav-item mx-0 mx-lg-1">
                                    <a className={navlinkColorClass} href="#about"> Overview</a>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <a className={navlinkColorClass} href="#portfolio"> Portfolio</a>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <a className={podcastlinkColorClass} href="#podcast"> Podcast</a>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <a className={navlinkColorClass} href="#contact-and-developer-note"> Contact</a>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    {/* <Link to="/KKim_Resume.pdf" style={{ "margin": "0", "padding": "0", "background-color":"rgba(0,0,0,0)" }}>
                                        <a className={resumelinkColorClass}> Resume/CV</a>
                                    </Link> */}
                                    <a className={resumelinkColorClass} href="/KKim_Resume.pdf"> Resume/CV</a>
                                    {/* <a href={Pdf} without rel="noopener noreferrer" target="_blank"> Resume</a> */}

                                    {/* <a className={resumelinkColorClass} href="https://s3.us-east-2.amazonaws.com/kylekim.io/KKim_Resume.pdf"> Resume/CV</a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                )
            case "Podcast":
                return (
                    <nav className={navClass} style={{ "fontFamily": "Lato", "fontWeight": "300" }} id="mainNav">
                        <div className="container">
                            <div style={{ verticalAlign: 'middle', display: 'inline-block', margin: 0, padding: 0 }}>
                                {/* <img src="img/kk_title_logo.png" style={{"height":"25px"}}/> */}
    
                                <a style={{ verticalAlign: 'middle', paddingLeft: '6px' }} className={navbrandColorClass} href="#page-top">
                                    kylekim.io / podcast</a>
                            </div>
    
                            <button className="navbar-toggler navbar-toggler-right text-uppercase text-black rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
                            <i className="fas fa-bars" />
                            </button>
    
                            <div className="collapse navbar-collapse" id="navbarResponsive">
    
                                <ul className="navbar-nav ml-auto">
    
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <a className={navlinkColorClass} href="#help"> How Can I Help?</a>
                                    </li>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <Link to="/" style={{ "margin": "0", "padding": "0" }}>
                                            {/* <a className="nav-link smooth-scroll py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a> */}
                                            <a className={navlinkColorClass} href="#contact">Contact</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <Link to="/" style={{ "margin": "0", "padding": "0", "background-color": "rgba(0,0,0,0)" }}>
                                            <a className={homeClass}> Home</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                )
            default:
                return (
                    <nav className={navClass} style={{ "fontFamily": "Lato", "fontWeight": "300" }} id="mainNav">
                        <div className="container">
                            <div style={{ verticalAlign: 'middle', display: 'inline-block', margin: 0, padding: 0 }}>
                                {/* <img src="img/kk_title_logo.png" style={{"height":"25px"}}/> */}
    
                                <a style={{ verticalAlign: 'middle', paddingLeft: '6px' }} className={navbrandColorClass} href="#page-top">
                                    kylekim.io / podcast</a>
                            </div>
    
                            <button className="navbar-toggler navbar-toggler-right text-uppercase text-black rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
                            <i className="fas fa-bars" />
                            </button>
    
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <Link to="/" style={{ "margin": "0", "padding": "0", "background-color": "rgba(0,0,0,0)" }}>
                                            <a className={homeClass}> Home</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                )
        }
    }
}