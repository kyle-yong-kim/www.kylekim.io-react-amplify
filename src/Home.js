import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.scss';
import './js/dynamicActions'; // to run dynamicActions js
import './js/freelancer';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import portrait from './img/myface6.jpg';
import PortfolioModal from './components/PortfolioModal';
import PortfolioItem from './components/PortfolioItem';
import workexperiences from './data/workexperiences.json';
import noScroll from 'no-scroll';
import { Navbar } from './components/Navbar/Navbar';
// import { Navbar } from './components/Navbar/Navbar';
// import { Redirect } from 'react-router'; // delete this package
// import { useHistory } from "react-router-dom"; // delete this package
import Fade from 'react-reveal/Fade';
// import Globe from 'react-globe.gl'; // delete this package
// import Podcast from './Podcast';
import GridCards from './components/GridCards';

// for animation, https://www.youtube.com/watch?v=9pQf5tOKtmA&t=50s
import anime from 'animejs/lib/anime.es.js';
import { TweenMax, TweenLite } from 'gsap/all';
import Amplify, { API } from 'aws-amplify';
import config from './aws-exports';

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import { rgbToHex } from '@material-ui/core';

Amplify.configure(config);

function Home() {

    const [modalState, setModalState] = useState(false);
    const [navbarWithColor, setNavbarWithColor] = useState(false);
    const [modalName, setModalName] = useState("");

    const onClickHandler = (companyName) => {
        setModalState(true);
        setModalName(companyName);
        noScroll.on();
    }

    const onClickHandlerResume = () => {
        window.location.href = "/KKim_Resume.pdf";
    }

    const onCloseHandler = () => {
        setModalState(false);
        noScroll.off();
    }

    const changeNavbarColor = () => {
        if (window.scrollY >= 120) {
            setNavbarWithColor(true);
        }
        else {
            setNavbarWithColor(false);
        }
    }

    useEffect(() => {
        const response = API.get('analyticsapi', '/initialize');
    }, [])

    // useEffect(() => {
    //     var textWrapper = document.querySelector('.welcome-text');
    //     textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    //     // anime.timeline().add(
    //     //     {
    //     //         targets: '.welcome-text .letter',
    //     //         traslateY: [200, 0],
    //     //         translateZ: 0,
    //     //         opacity: [0, 1],
    //     //         easing: "easeOutExpo",
    //     //         duration: 2000,
    //     //         delay: (el, i) => 4800 + 50 * i
    //     //     }
    //     // );

    //     TweenLite.to(".welcome-text", 1, {
    //         background: 'grey',
    //         y: 200,
    //         ease: 'easeOutExpo'
    //     })
    // }, []);

    window.addEventListener('scroll', changeNavbarColor);

    const educationAndTech = <><div className="overview-item">
        <span className="about-section">Education</span>
        <div className="overview-desc">
            <table>
                <tbody><tr>
                    <th>University of Toronto</th>
                    <td>BASc in Mechatronics Engineering, Class of 2020 <br /> Minor in Business </td>
                </tr>
                    <tr>
                        <th>Relevant Coursework</th>
                        <td>
                            <table className="table-css-fix" style={{ 'margin-bottom': '0 !important' }}>
                                <tbody><tr>
                                    <th style={{ width: '300px' }}>Artificial Intelligence Fundamentals</th>
                                    <td>90% A+</td>
                                </tr>
                                    <tr>
                                        <th>Data Structure &amp; Algorithms</th>
                                        <td>89% A</td>
                                    </tr>
                                    <tr>
                                        <th>Numerical Methods &amp; Algorithms</th>
                                        <td>88% A</td>
                                    </tr>
                                    <tr>
                                        <th>Analog and Digital Electronics</th>
                                        <td>98% A+</td>
                                    </tr>
                                    <tr style={{ borderBottom: '0px' }}>
                                        <th>Calculus II</th>
                                        <td>88% A</td>
                                    </tr>
                                </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
        </div>
    </div>
        <div className="overview-item">
            <span className="about-section">Technical Skills</span>
            <div className="overview-desc">
                <table>
                    <tbody>
                        <tr>
                            <th>Back-End</th>
                            <td>Python, Java, C#, Spring Boot</td>
                        </tr>
                        <tr>
                            <th>Front-End</th>
                            <td>React, Redux, Next.js, HTML/CSS/JS/TS</td>
                        </tr>
                        <tr>
                            <th>Data Analytics</th>
                            <td>Power BI, Tableau, SQL, Excel, Origin, R</td>
                        </tr>
                        <tr>
                            <th>Machine Learning</th>
                            <td>TensorFlow, PyTorch, CNN, RNN, GAN Architecture</td>
                        </tr>
                        <tr>
                            <th>Cloud / Data ETL</th>
                            <td>Apache Spark, Docker, AWS, Terraform, ElasticSearch, Jenkins</td>
                        </tr>
                    </tbody></table>
            </div>
        </div></>

    const banner =
        <div className="container">
            <div className="flex-row-container">
                <div className="landing-page-img-container">
                </div>
                <div className="landing-page-popup-container">
                    <h3>Lest we forget</h3>
                    <p>Remembrance Day</p>
                    <p>November 11th, 2020</p>
                    <p> We thank you for your service.</p>
                </div>
            </div>
        </div>

    const briefOverviewContent = (isMobile) ? null : educationAndTech;

    return (
        <>
            <Navbar id="start" visible={!modalState} from={"Home"} navbarWithColor={navbarWithColor} theme={'light'} />
            <PortfolioModal
                visible={modalState}
                onCloseHandler={onCloseHandler}
                modalName={modalName}
                showMusicPlayer={false}
                isPodcast={false}
                theme={"PortfolioModal"} />
            <div>

                {/* <Globe
      // globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      globaImageUrl="https://raw.githubusercontent.com/dataarts/webgl-globe/2d24ba30/globe/world.jpg"
      pointAltitude="size"
      pointColor="color"
    />, */}

                <link rel="icon" href="img/kk_title_logo.png" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content />
                <meta name="author" content />
                <title>Kyle Kim: Software Engineer</title>

                <div id="my-div" style={{ display: 'none' }}>
                    {/* <header id="page-top"></header> */}

                    <header className="bg-primary text-white text-center">

                        <Fade bottom distance="30px" duration={650} opposite>

                            <div className="wrapper">

                                <div class="video-wrap">
                                    <video autoPlay muted loop id="myVideo" className="video-wrap">
                                        {/* <source src="/img/bg.mp4" type="video/mp4" /> */}
                                        <source src="https://s3.us-east-2.amazonaws.com/kylekim.io.podcast/bg.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div class="landing-text">
                                    {/* <h1 className="passion-text" style={{margin: 0, padding: 0}}>Passion. In. Programming.</h1> */}
                                    <h1 id="welcome-text" className="welcome-text">Welcome.
                                        
                                        <span id="welcome-text-korean">환영합니다.</span>
                                    
                                    </h1>

                                    {/* <h1 className="passion-text notification-text" style={{ "color": "black" }}>
                                        <Link to="/podcast" style={{ "color": "black" }}>
                                            <span className="update">Update</span> Podcast is now available!</Link>
                                    </h1> */}

                                    {/* <div id="podcast" className="container"> */}
                                    {/* {bannerJSX} */}

                                    <div className="container">
                                        <div className="flex-row-container">
                                            <div className="landing-page-img-container">
                                            </div>
                                            <div className="landing-page-popup-container">
                                                <h3>Lest we forget</h3>
                                                <p>Remembrance Day</p>
                                                <p>November 11th, 2020</p>
                                                <p>We thank you for your service.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div id="landing-page-subtext-wrapper" className="landing-page-subtext-wrapper">

                    <h1 className="passion-text">Name is Kyle, currently working as SDE at Amazon.</h1>

                    <h1 className="passion-text">I usually put my side-projects on this website.</h1>

                    <h1 className="passion-text notification-text" style={{ "marginBottom": "20px" }}>
                      <span className="update">Update</span> Career podcast coming shortly.
                    </h1>
                    <a className="landing-page-button" href="#about">View More</a>

                  </div> */}
                                </div>
                            </div>
                        </Fade>
                    </header>

                    <section className="bg-about text-black mb-0" id="about">
                        <Fade bottom distance="30px" duration={650} opposite delay={150}>
                            <div className="container">
                                <h2 data-aos="fade-up" className="text-black section-title brief-margin-bottom z-index">Brief Overview</h2>
                                <div className="row row-wrapper">

                                    <div className="col-lg-3">
                                        <div data-aos="fade-up" className="current-status-wrapper">
                                            <span className="about-section-brief">Current Status</span>
                                            <p>
                                                <i>"Officially graduated." 2020-10-01</i>
                                            </p>
                                        </div>
                                        <img id="myFace" data-aos="fade-up" className="copy-block img-fluid mb-5 d-block mx-auto myFace" src={portrait} height="auto" alt="" style={{ marginBottom: '20px !important' }} />

                                    </div>

                                    <div data-aos="fade-up" className="col-lg-9 about-subsection">
                                        <div className="overview-wrapper">
                                            <div className="overview-item">
                                                <span className="about-section">Summary</span>
                                                <div className="overview-desc">
                                                    <p style={{ 'margin-bottom': '0' }}>
                                                        Kyle is an experienced software engineer, with background in <span className="border-bot-1">cloud, back-end, front-end and NLP machine learning.  </span>
                    Currently, he is a <span className="border-bot-1">Software Development Engineer</span> at <span className="border-bot-1">Amazon Web Services</span>, RDS (Relational Database Service) team.

                    Previously, he was at <span className="border-bot-1">TD Research Division</span> as an engineering capstone project member.
                  </p>
                                                </div>
                                            </div>

                                            {briefOverviewContent}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </section>

                    <section className="portfolio" id="portfolio">
                        <div className="container">
                            <Fade bottom distance="30px" duration={650} opposite>
                                <h2 data-aos="fade-up" className="text-left text-black section-title" style={{marginBottom: "30px"}}>Portfolio</h2>
                                {/* <span className="korean-text">실무경험</span> */}
                            </Fade>
                            {/* <hr_b /> */}

                            <h3 data-aos="fade-up" className="text-left text-black section-subtitle">Work Experience</h3>

                            <div className="row">
                                {workexperiences.work.map(function (item, i) {
                                    return <PortfolioItem data={item} onClickHandler={item.companyName !== "resume" ? onClickHandler : onClickHandlerResume} />
                                })}
                            </div>

                            <h3 data-aos="fade-up" className="text-left text-black section-subtitle">Projects / Extracurricular</h3>

                            <div className="row">
                                {workexperiences.project.map(function (item, i) {
                                    return <PortfolioItem data={item} onClickHandler={onClickHandler} />
                                })}
                            </div>

                        </div>
                    </section>

                    <section id="podcast">
                        <div className="container">
                            <div className="flex-row-container" style={{alignItems:"center"}}>
                                {/* <div className="podcast-img-container">
                                </div> */}
                                <div className="podcast-sneakpeak-image-container" style={{position:"relative"}}>
                                    <Fade bottom distance="40px" duration={650} delay={250}>
                                        <img src="/img/podcast3.png" className="podcast-sneakpeak-image-primary" />
                                    </Fade>
                                    <Fade bottom distance="40px" duration={650} delay={500}>
                                        <img src="/img/podcast_player.png" className="podcast-sneakpeak-image-secondary" />
                                    </Fade>
                                </div>
                                <div className="podcast-content-wrapper">
                                    <Fade bottom distance="30px" duration={650} opposite>
                                        <h2 data-aos="fade-up" className="text-left text-black section-title podcast-title">Podcast</h2>
                                    </Fade>
                                    <h3>Podcast is available now!</h3>

                                    <Link to="/podcast" className="link" onUpdate={() => window.scrollTo(0, 0)}>
                                        <GridCards theme="blue" list={["Click here to check out the newest podcasts!"]} />
                                    </Link>

                                    <p></p>

                                    {/* <p> So far 3 guest speakers, with background in engineering, law and business</p> */}

                                    <p>The overall objective is to enrich students and recent graduates with their education and career progressions,
                                    through a seris of discussions with recent graduates and industry professionals.</p>
                                    <h3>Can I participate?</h3>
                                    <p style={{ marginBottom: '0' }}>Absolutely, my connections have a limit in similar background, mostly of STEM fields. If you'd like to become a guest speaker for the podcast, feel free to reach out at kyle-yong-kim@outlook.com</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div id="contact-and-developer-note" className="flex-row-contact-developer-container">
                        <section id="contact">
                            <div className="container">
                                    {/* <div className="contact-img-container">
                                    </div> */}
                                    <Fade bottom distance="30px" duration={650} opposite>
                                        <h2 data-aos="fade-up" className="text-left text-black section-title podcast-title" style={{lineHeight:"0.8em", marginBottom:"10px"}} >Contact Info</h2>
                                    </Fade>
                                    <div className="contact-content-wrapper">
                                    {/* <Fade bottom distance="30px" duration={650} opposite>
                                        <h2 data-aos="fade-up" className="text-left text-black section-title podcast-title" style={{lineHeight:"0.8em"}} >Contact Info</h2>
                                    </Fade> */}
                                        <h3>Let's connect!</h3>
                                        <p style={{margin: 0}}>And for those affected by Covid-19, stay strong.</p>
                                        <p>We will get through this together.</p>

                                        <h3>Email</h3>
                                        {/* <p>kyle-yong-kim [at] outlook.com</p> */}
                                        <GridCards theme="white" style={{marginBottom:"20px"}} list={["kyle-yong-kim [at] outlook.com"]} />

                                        <h3>Linkedin</h3>
                                        <GridCards theme="white" list={["Kyle Kim @ linkedIn"]} />
                            </div>
                            </div>
                        </section>
                        <section id="developer-note">
                            <div className="container">
                                <Fade bottom distance="30px" duration={650} opposite>
                                    <h2 data-aos="fade-up" className="text-left section-title podcast-title" style={{lineHeight:"0.8em", marginBottom:"10px", color:"black"}}>Developer's Note</h2>
                                </Fade>
                                <div className="developer-content-wrapper">
                                {/* <Fade bottom distance="30px" duration={650} opposite>
                                    <h2 data-aos="fade-up" className="text-left section-title podcast-title" style={{lineHeight:"0.8em", color:"white"}}>Developer's Note</h2>
                                </Fade> */}
                                    <h3>I'll be leaving some development notes here</h3>
                                    <p>If you're interested in that kinda stuff.</p>

                                    <h3>Bug fixes</h3>
                                    <p>[Done] Fix filter tag behaviour between page routes.</p>

                                    <h3>UX/UI Updates</h3>
                                    <p style={{margin:0}}>[Done] Podcast page UI update, include pagination for 4+ podcast entries.</p>
                                    <p>Refactor navbar from Bootstrap to React.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
