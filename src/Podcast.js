import React, { useEffect, useState, useReducer } from 'react';
import Fade from 'react-reveal/Fade';
import 'react-h5-audio-player/lib/styles.css';
import './Podcast.scss';
import PodcastItem from './components/PodcastItem';
import PortfolioModal from './components/PortfolioModal';
import { podcastData, fillerPodcastData } from './data/podcastData';
import noScroll from 'no-scroll';
import { Navbar } from './components/Navbar/Navbar';
import GridCards from './components/GridCards';
import { useSelector, useDispatch } from 'react-redux';
import { getBeginTimeToClassName } from './data/modaldata';
import { TextField } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CountUp, { useCountUp } from 'react-countup';
import { emailSchema } from './validations/EmailValidation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from './components/Button';
import * as yup from 'yup';
import Amplify, { API } from 'aws-amplify';
import config from './aws-exports';
import ReactGa from 'react-ga';

Amplify.configure(config);

const podcastPerPage = 4;

function getContentLength(podcastItems) {
    let z = 0;
    for (let i = 0; i < podcastItems.length; i++) {
        for (let j = 0; j < podcastItems[i].length; j++) {
            z = z + podcastItems[i][j].contentLength;
        }
    }
    return z;
}

function getPodcastNumber(podcastItems) {
    let z = 0;
    for (let i = 0; i < podcastItems.length; i++) {
        for (let j = 0; j < podcastItems[i].length; j++) {
            if (podcastItems[i][j].id === null) {
                break;
            }
            z = z + 1
        }
    }
    return z;
}

function getPodcastItems(state) {

    // state is hashset of true false
    let filterPodcastData = [];

    const name = state.name;
    const cloneState = { ...state, "name": (state.name) ? true : false };
    const userKeywordList = (state.name) ? state.name.toLowerCase().split(" ") : [];

    // 4 scenario,
    // 1. no category, no name
    // 2. category + no name
    // 3. category + name
    // 4. no category + name
    // filter by name first --> then append filter by category.
    // if name / categorical filter doesn't exist, then do nothing.

    // first filter by name
    // update, change from name to title
    // outter loop is each podcastItem

    if (name) {

        // for each podcast item
        for (let i = 0; i < podcastData.length; i++) {
            const keywordList = podcastData[i].keywordList;

            for (let x = 0; x < keywordList.length; x++) {
                if (userKeywordList.includes(keywordList[x])) {
                    filterPodcastData.push(podcastData[i]);
                    break;
                }
            }
        }
    }
    else {
        filterPodcastData = [...podcastData];
    }

    // then filter by category
    let filterPodcastData2 = [];
    delete cloneState["name"];
    let isFilterCategoryRequired = (Object.values(cloneState).includes(true));

    if (isFilterCategoryRequired) {
        for (let i = 0; i < filterPodcastData.length; i++) {

            for (let j = 0; j < filterPodcastData[i].keywords.length; j++) {
                if (state[filterPodcastData[i].keywords[j]]) {
                    filterPodcastData2.push(filterPodcastData[i]);
                    break;
                }
            }
        }
    }
    else {
        filterPodcastData2 = [...filterPodcastData];
    }

    // for filling up remaining if filtered data has less than 4 items
    // modulo, then 4 - that result
    if ((filterPodcastData2.length%podcastPerPage) !== 0 || filterPodcastData2.length == 0) {
        const fillerPodcastsToAdd = podcastPerPage - filterPodcastData2.length%podcastPerPage;
        for (let z = 0; z < fillerPodcastsToAdd; z++) {
            filterPodcastData2.push({ ...fillerPodcastData });
        }
    }

    // finally, make it into list within list for pagination
    let filterPodcastData3 = [];
    for (let a = 0; a < filterPodcastData2.length/podcastPerPage; a++) {
        filterPodcastData3.push(filterPodcastData2.slice(a*podcastPerPage, (a+1)*podcastPerPage))
    }

    return filterPodcastData3;
}

function Podcast() {

    const state = useSelector(state => state.podcast.filter);
    const [modalState, setModalState] = useState(false);
    const [modalName, setModalName] = useState("");
    const [navbarWithColor, setNavbarWithColor] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [contentLength, setContentLength] = useState(0);
    const [previousContentLength, setPreviousContentLength] = useState(0);
    const [swiperIndex, setSwiperIndex] = useState(0);
    const [successMessage, setSuccessMessage] = useState(null);
    const [inputEnabled, setInputEnabled] = useState(true);

    const { register, handleSubmit, errors, formState } = useForm({
        resolver: yupResolver(emailSchema),
    });

    const onSubmit = (data) => {

        const payload = 
        {
            "body": data,
            "headers": {
                'x-api-key': process.env.REACT_APP_API_KEY
            }
        }

        const emailResponse = API.post('emailapi', '/email/add-email', payload);
        setSuccessMessage("Email has been received. New podcast should be up soon!")
        setInputEnabled(false);
    }

    const companyImgRootDirectory = "/img/companylogo/";
    // const companyImgSrc_master = ["hyundai_logo.png", "bloomberg_logo.jpg", "accenture_logo.png", "deloitte_logo.png", "cibc_logo.png", "stanford_logo.png", "tesla_logo.png", "microsoft_logo.png", "google_logo.png"];
    const companyImgSrc = ["cibc_logo.png"];

    const addNewPodcastModal = (payload) => {
        dispatch({ type: "NewModal", payload }) // payload going to contain event.target.value && value itself
    }

    const filterTags = ["Engineering", "Consulting", "Data Analytics", "Academic Research", "Media Production", "Business", "Banking", "Entrepreneurship"];

    const [filteredPodcastItems, setFilteredPodcastItems] = useState(getPodcastItems(state));
    const dispatch = useDispatch();

    const { countUp, start, pauseResume, reset, update } = useCountUp({
        start: 0,
        end: 0,
        delay: 1000,
        duration: 2.5
    });

    let initialState = {}
    for (let i = 0; i < filterTags.length; i++) {
        initialState[filterTags[i]] = false;
    }

    const [showFade, setShowFade] = useState(true);

    const toggleFilterItem = (payload) => {
        setSwiperIndex(0); // swiperIndex needs to reset to 0
        dispatch({ type: "Toggle", payload }) // payload going to contain event.target.value && value itself
    }
    const changeNameAction = (payload) => {
        dispatch({ type: "NameChange", payload }) // payload going to contain event.target.value && value itself
    }

    const updateFilterVisuals = () => {
        for (let filter in state) {
            const filterId = `${filter}-filter`;
            const element = document.getElementById(filterId);

            // change the CSS styling
            if (state[filter]) {
                element.classList.add("active-filter");
                element.classList.remove("deactive-filter");
            }
            else {
                element.classList.add("deactive-filter");
                element.classList.remove("active-filter");
            }
        }
    }

    const onClickHandler = (guestSpeaker) => {
        setModalState(true);
        setModalName(guestSpeaker);
        noScroll.on();
    }

    const onCloseHandler = () => {
        setModalState(false);
        noScroll.off();
    }

    const onTextChangeHandler = () => {
        const value = document.getElementById("text-input").value;
        changeNameAction(value);
    }

    const sectionOne = document.getElementById("podcast-page");
    const sectionOneOptions = {
        rootMargin: "-50px 0px 0px 0px"
    }
    const sectionOneObserver = new IntersectionObserver(function (
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                setNavbarWithColor(true);
            }
            else {
                setNavbarWithColor(false);
            }
        });
    }, sectionOneOptions);

    useEffect(() => {
        sectionOneObserver.observe(document.getElementById("podcast-page"));
    }, [document.getElementById("podcast-page")])

    useEffect(() => {
        updateFilterVisuals();
        const response = API.get('analyticsapi', '/initialize');
        ReactGa.initialize(process.env.REACT_APP_GA_TRACKING_ID);
        ReactGa.pageview(window.location.pathname + window.location.search);
    }, [])

    useEffect(() => {
        setShowFade(false);
        setFilteredPodcastItems(getPodcastItems(state));
    }, [state])

    const onCompleteCallback = () => {
        setPreviousContentLength(contentLength);
    }

    useEffect(() => {
        // when filteredPodcastItems changes, update the content length
        // setContentLength(getContentLength(filteredPodcastItems));
        update(getContentLength(filteredPodcastItems));
    }, [filteredPodcastItems])

    useEffect(() => {
        if (!showFade) {
            setShowFade(true);
        }
    }, [showFade])

    useEffect(() => {
        if (modalName) {
            addNewPodcastModal({ "modalName": modalName, "beginTimeToClassName": getBeginTimeToClassName(modalName) });
        }
    }, [modalName]);

    // useEffect(() => {
    //     console.log(formState);
    // }, [formState])

    return (

        <div>
            <Navbar id="start" visible={!modalState} from={"Podcast"} navbarWithColor={navbarWithColor} theme={'light'} />

            {/* // show modal all the time for this one */}
            <PortfolioModal
                visible={modalState}
                onCloseHandler={onCloseHandler}
                modalName={modalName} //guestSpeaker
                showMusicPlayer={true}
                isPodcast={true}
                theme={"PodcastModal"} />

            <Fade bottom distance="30px" duration={650}>
                <section id="podcast-page">
                    <div className="container">

                    </div>
                    <div className="container podcast-container grid-container-menu-and-content">
                        <div className="podcast-side-menu">
                            {/* <div style={{ "fontFamily": "Georgia", "fontWeight": "700", "fontSize": "18px", "marginBottom": "30px" }}>
                            <span className="update text-white" style={{"fontSize":"18px", "backgroundColor":"rgb(150,10,0)"}}>New</span> Podcast is available now!
                        </div> */}
                            <div className="podcast-name-title">
                                <h2 data-aos="fade-up" className="text-left section-title" style={{ lineHeight: "0.8em" }}>
                                    {/* The Kaizen Podcast */}
                                The Millennial Podcast
                            </h2>

                                {/* <p>이 시대의. 청춘을. 위로하다.</p> */}
                                {/* <p>청춘이. 청춘에게. 위로하다.</p> */}

                                <div id="count-up-container">
                                    {/* <p> 이시대의. 청춘을. 위로하다. </p> */}
                                    <div id="count-up-content-container">
                                        <div id="count-up-number">
                                            {countUp}
                                        </div>
                                        <p> minutes of content available</p>
                                    </div>
                                </div>

                                {/* <p style={{"backgroundColor": "black", "color":"white", "textAlign":"center"}}>Students' initiative against covid crisis. </p> */}
                                {/* <p style={{}}>Students' initiative against covid crisis. </p> */}
                                {/* <p>청춘이. 청춘에게. 위로하다.</p> */}
                            </div>

                            <span className="about-section" style={{ "color": "black" }}>Update Note</span>
                            <p style={{ "margin": "0", "color": "black", "marginBottom": "20px" }}>
                                Currently, we have 7 projected guest speakers, with 5 uploaded podcast.
                                The overall objective is to provide general educational and career guidance for students and recent graduates.
                                {/* Currently, we have 7 projected guest speakers, with 2 uploaded podcast.
                                The ultimate goal is to build an interview coverage of the entire S&P 500, 
                                to represent the vast diversity of career options available, 
                                and to provide general educational and career guidance for students and recent graduates. */}
                            </p>

                            <div style={{ "marginBottom": "20px" }}>
                                <span className="about-section" style={{ "color": "black" }}>Filter by Keyword</span>
                                <TextField id="text-input" style={{ "width": "100%" }} label="Input keyword here:" variant="standard" onChange={() => { onTextChangeHandler() }}></TextField>
                            </div>

                            <span className="about-section" style={{ "color": "black" }}>Filter by Tags</span>
                            <GridCards attachUniqueID={true} theme="white" col="2" onClickHandler={toggleFilterItem}
                                list={filterTags} />
                            {/* <p style={{ "margin": "0", "color": "black", "marginBottom": "30px" }}>
                                Upcoming feature.
                            </p> */}

                            {/* <span className="about-section" style={{ "color": "black" }}>Company Coverage</span>

                            {companyImgSrc.map(function (item, i) {
                                return (
                                    <Fade bottom distance="30px" duration={650} delay={i * 200} opposite>
                                        <div style={{ "borderBottom": "1px solid rgb(210,210,210)", "width": "100%" }}>
                                            <img style={{ "height": "40px", "bottomMargin": "10px", "padding": "7px" }} src={`${companyImgRootDirectory}${item}`}>
                                            </img>
                                        </div>
                                    </Fade>
                                )
                            })} */}

                        </div>

                        {/* <div class="swiper-container"> */}
                        <div class="podcast-card-container">
                            <div class="podcast-pagination-container">
                                <div style={{"margin-right":"10px", "margin-top":"1px", "font-weight":"300", "font-family":"Lato"}}>
                                    {getPodcastNumber(filteredPodcastItems)} Episodes Available
                                </div>
                                <div className="podcast-pagination-navigator" onClick={() => setSwiperIndex(Math.max(0, swiperIndex-1))}>
                                    <ChevronLeftIcon />
                                    {/* <ArrowLeftIcon /> */}
                                    {/* <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg> */}
                                </div>
                                <div className="podcast-pagination-navigator" onClick={() => setSwiperIndex(Math.min(filteredPodcastItems.length-1, swiperIndex+1))}>
                                    <ChevronRightIcon />
                                    {/* <ArrowRightIcon />     */}
                                    {/* <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg> */}
                                </div>
                            </div>
                            <div class="grid-container-wide">
                                {filteredPodcastItems[swiperIndex].map(function (item, i) {
                                    return <PodcastItem data={item} when={showFade} index={i} onClickHandler={onClickHandler} />
                                })}
                                {/* {filteredPodcastItems.map(function (item, i) {
                                    return <PodcastItem data={item} when={showFade} index={i} onClickHandler={onClickHandler} />
                                })} */}
                            </div>
                        </div>

                    </div>

                </section>
            </Fade>
            <section id="help" class="brooo">
                <div className="container">
                    <div className="flex-row-container" style={{ alignItems: "center" }}>

                        <Fade bottom distance="40px" duration={650} delay={250}>
                            <picture><img src="/img/feedback_card.png" className="podcast-sneakpeak-image feedback-card" /></picture>
                        </Fade>

                        {/* <div className="feedback-img-container">
                        </div> */}
                        <div className="feedback-content-wrapper">

                            <Fade bottom distance="30px" duration={650} opposite>
                                <h2 data-aos="fade-up" style={{ lineHeight: "0.8em" }} className="text-left text-black section-title podcast-title">How Can I Help?</h2>
                            </Fade>

                            <h3>Feedback is greatly appreciated</h3>
                            <p>If you find the material helpful, you could also support the project by sharing with others
                                and providing feedback in both technical (web-design) and non technical (podcast content) terms.</p>

                            <h3>Can I participate?</h3>
                            <p>Absolutely, my connections have a limit in similar background, mostly of STEM fields. If you'd like to become a guest speaker for the podcast, feel free to reach out at kyle-yong-kim@outlook.com</p>

                            <h3>Mailing list signup</h3>
                            <p style={{"margin":"0"}}> If you'd like to get updated with newest episodes.</p>

                            <form onSubmit={handleSubmit(onSubmit)}>
                            <div style={{"display":"flex"}}>
                                {/* 
                                https://www.youtube.com/watch?v=OqO3cbflTD8
                                */}
                                <TextField
                                    style={{ "width": "90%", "margin-right":"10px" }} 
                                    label="Email:"
                                    variant="standard"
                                    inputRef={register}
                                    name="email"
                                    type="text"
                                    disabled={!inputEnabled}
                                >
                                </TextField>
                                {/* <input name="email" type="text" ref={register} /> */}
                                {/* <button type="submit"></button> */}
                                <Button type="submit" theme="blue" value="Submit" disabled={!inputEnabled}/>
                                {/* <GridCards theme="blue" style={{ "marginTop": "0px" }} list={["Submit"]} /> */}
                            </div>
                            {errors["email"] && <p class="error-message">{errors["email"]?.message}</p>}
                            {!errors["email"] && <p class="success-message">{successMessage}</p>}
                            </form>

                            {/* <h3 style={{}}> Projected industry coverage </h3>
                            <GridCards theme="white" style={{ "marginTop": "20px" }} list={["Engineering", "Consulting", "Data Analytics", "Academic Research", "Media Production", "Arts & Design", "Drama & Acting", "Entrepreneurship"]} /> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Podcast;