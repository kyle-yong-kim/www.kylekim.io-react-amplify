import React, { Component } from 'react';
import Tilt from 'react-parallax-tilt';
import cppib_logo from '../img/portfolio/CPPIB2.png';
import autoliv_logo from '../img/portfolio/autoliv5.png';
import amazon_logo from '../img/portfolio/amalogo.png';
import td_logo from '../img/portfolio/TD_logo2.png';
import resume_logo from '../img/portfolio/resume3.png';
import ml_thumbnail from '../img/portfolio/LSTM.png';
import stock_thumbnail from '../img/portfolio/tslastock2.png';
import varsity_thumbnail from '../img/portfolio/varsity-blues.png';
import './PortfolioItem.css'
import Fade from 'react-reveal/Fade';

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

export class PortfolioItem extends Component {

    // given props, need to create an obj and split back
    render() {

        const {
            data: {
                date,
                title,
                team,
                type,
                mainrole,
                techstack,
                imgsrc,
                hasDetails,
                subtitle,
                desc,
                companyName },
            onClickHandler
        } = this.props;

        function imageChooser(imgsrc) {
            switch (imgsrc) {
                case "../img/portfolio/amalogo.png":
                    return amazon_logo;
                case "../img/portfolio/TD_logo2.png":
                    return td_logo;
                case "../img/portfolio/resume3.png":
                    return resume_logo;
                case "../img/portfolio/autoliv5.png":
                    return autoliv_logo;
                case "../img/portfolio/CPPIB2.png":
                    return cppib_logo;
                case "../img/portfolio/LSTM.png":
                    return ml_thumbnail
                case "../img/portfolio/tslastock2.png":
                    return stock_thumbnail
                case "../img/portfolio/varsity-blues.png":
                    return varsity_thumbnail
            }
        }

        function getTeam(given) {
            if (given != null) {
                return (
                    <li className="portfolio-text">
                        {team}
                    </li>
                )
            }
            return null;
        }

        function getMainRole(given) {
            if (given != null) {
                return (
                    <li className="portfolio-text">
                        <span className="tech-stack">Main-role</span>{mainrole}
                    </li>)
            }
            return null;
        }

        function getTechStack(given) {
            if (given != null) {
                return (
                    <li className="portfolio-text">
                        <span className="tech-stack">Tech-stack</span>{techstack}
                    </li>)
            }
            return null;
        }

        function getResume(type) {
            if (type === "Resume.pdf") {
                return (
                    <p style={{ color: 'black', fontSize: '20px', fontWeight: 700, textAlign: 'center', paddingBottom: '10px' }}>
                        Resume.pdf</p>
                )
            }
            return null;
        }

        function getDetails(hasDetails) {
            if (hasDetails) {
                return (
                    <span className="view-box">View Details</span>
                )
            }
            else if (hasDetails === false) {
                return (
                    <span className="view-box-tbu">To be updated...</span>
                )
            }
            else {
                return null
            }
        }

        function getOnClickHandler(hasDetails, companyName) {
            if (hasDetails === false) {
                return null
            }
            return () => onClickHandler(companyName)
        }

        if (!isMobile) {
            // work experience 
            if (type === "work" || type === "Resume.pdf") {
                return (
                    <Fade bottom distance="30px" duration={650} opposite>
                        <div className="col-md-6 col-lg-4">
                            <Tilt className="parallax-effect" scale={1.1}>
                                <a data-aos="fade-up" className="workexp-item portfolio-item d-block mx-auto portfolio-outline portfolio-border" onClick={getOnClickHandler(hasDetails, companyName)}>
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                            {getDetails(hasDetails)}
                                        </div>
                                    </div>
                                    <p className="project-title">{title}</p>
                                    <p className="portfolio-date-text">{date}</p>

                                    <img className="img-fluid mb-2 portfolio-fit-amazon inner-element" src={imageChooser(imgsrc)}/>
                                    
                                    <ul>
                                        {getTeam(team)}
                                        {getMainRole(mainrole)}
                                        {getTechStack(techstack)}
                                    </ul>
                                    {getResume(type)}
                                </a>
                            </Tilt>
                        </div>
                    </Fade>
                )
            }

            // portfolio
            else {
                return (
                    <Fade bottom distance="30px" duration={650} opposite>
                        <div className="col-md-6 col-lg-4">
                            <Tilt className="parallax-effect" scale={1.1}>
                                <a data-aos="fade-up" className="project-item portfolio-item d-block mx-auto portfolio-outline portfolio-border" onClick={getOnClickHandler(hasDetails, companyName)}>
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                            {getDetails(hasDetails)}
                                        </div>
                                    </div>
                                    <p className="project-title">{title}</p>
                                    <p className="portfolio-date-text">{subtitle}</p>
                                    <img className="inner-element img-fluid mb-2 portfolio-fit-stock-trend"
                                        src={imageChooser(imgsrc)} alt="" />
                                    <ul>
                                        {desc.map(function (descItem, i) {
                                            return (
                                                <li className="portfolio-text">
                                                    {descItem}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </a>
                            </Tilt>
                        </div>
                    </Fade>
                )
            }
        } // mobile, remove Tilt parallex animation
        else {
            if (type === "work" || type === "Resume.pdf") {
                return (
                    <Fade bottom distance="30px" duration={650} opposite>
                        <div className="col-md-6 col-lg-4">
                                <a data-aos="fade-up" className="workexp-item portfolio-item d-block mx-auto portfolio-outline portfolio-border" onClick={getOnClickHandler(hasDetails, companyName)}>
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                            {getDetails(hasDetails)}
                                        </div>
                                    </div>
                                    <p className="project-title">{title}</p>
                                    <p className="portfolio-date-text">{date}</p>
                                    <img className="inner-element img-fluid mb-2 portfolio-fit-amazon"
                                        src={imageChooser(imgsrc)} />
                                    <ul>
                                        {getTeam(team)}
                                        {getMainRole(mainrole)}
                                        {getTechStack(techstack)}
                                    </ul>
                                    {getResume(type)}
                                </a>
                        </div>
                    </Fade>
                )
            }

            // portfolio
            else {
                return (
                    <Fade bottom distance="30px" duration={650} opposite>
                        <div className="col-md-6 col-lg-4">
                                <a data-aos="fade-up" className="project-item portfolio-item d-block mx-auto portfolio-outline portfolio-border" onClick={getOnClickHandler(hasDetails, companyName)}>
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                            {getDetails(hasDetails)}
                                        </div>
                                    </div>
                                    <p className="project-title">{title}</p>
                                    <p className="portfolio-date-text">{subtitle}</p>
                                    <img className="inner-element img-fluid mb-2 portfolio-fit-stock-trend"
                                        src={imageChooser(imgsrc)} alt="" />
                                    <ul>
                                        {desc.map(function (descItem, i) {
                                            return (
                                                <li className="portfolio-text">
                                                    {descItem}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </a>
                        </div>
                    </Fade>
                )
            }
        }
    }
}

export default PortfolioItem;