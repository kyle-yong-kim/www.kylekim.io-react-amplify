import React, { Component, useEffect, useState } from 'react';
import './PortoflioModal.scss';
import ReactModal from 'react-modal';
import { getModalHTML, getPodcastModalHTML, getBeginTimeToClassName, getModalTitleBar } from '../data/modaldata';
import { podcastKeynote, beginTimeToClassName, podcastURL } from '../data/podcastData';
import AudioPlayer from 'react-h5-audio-player';
import PlayIcon from './PlayIcon';
import PauseIcon from './PauseIcon';
import ForwardIcon from './ForwardIcon';
import RewindIcon from './RewindIcon';
import moment from 'moment';
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import TimeFormat from 'hh-mm-ss';

function PortfolioModal(props) {

    const state = useSelector(state => state.podcast.modal); // modal

    const [player, setPlayer] = useState(React.createRef());
    const [currentTitle, setCurrentTitle] = useState("Currently playing section title will be displayed here...");

    const dispatch = useDispatch();

    const updateActiveClass = (payload) => {
        dispatch({type:"UpdateActiveClass", payload}) // payload going to contain event.target.value && value itself
    }

    const cleanupActiveClass = (payload) => {
        dispatch({type:"cleanupActiveClass", payload}) // payload going to contain event.target.value && value itself
    }

    const setCurrentTime = (beginTime) => {
        player.current.audio.current.currentTime = beginTime;
    }

    const onPauseCallback = (modalName) => {

        const activeClassName = getActiveClassName(modalName);

        const activeItems = document.getElementsByClassName(activeClassName);

        for (let index = 0; index < activeItems.length + 1; index++) {
            if (activeItems[index]) {
                activeItems[index].classList.remove("border-play");
            }
        }
    }

    const onPlayCallback = (modalName) => {

        const activeClassName = getActiveClassName(modalName);

        const activeItems = document.getElementsByClassName(activeClassName);

        for (let index = 0; index < activeItems.length + 1; index++) {
            if (activeItems[index]) {
                activeItems[index].classList.add(["border-play"]);
            }
        }
    }

    const getActiveClassName = (modalName) => {

        const currentTime = player.current.audio.current.currentTime;
        let activeClassName = "";

        if (state[modalName] !== undefined) {
            const beginTimeToClassName = state[modalName].beginTimeToClassName;

            for (let index = 1; index < beginTimeToClassName.length + 1; index++) {
                if (index === beginTimeToClassName.length || currentTime < beginTimeToClassName[index][0]) {
                    activeClassName = beginTimeToClassName[index - 1][1];
                    break;
                }
            }

            return activeClassName;
        }

        return "";
    }
    
    const getActiveIndex = (modalName) => {

        const currentTime = player.current.audio.current.currentTime;
        let activeIndex = 0;

        if (state[modalName] !== undefined) {
            const beginTimeToClassName = state[modalName].beginTimeToClassName;

            for (let index = 1; index < beginTimeToClassName.length + 1; index++) {
                if (index === beginTimeToClassName.length || currentTime < beginTimeToClassName[index][0]) {
                    activeIndex = index - 1;
                    break;
                }
            }

            return activeIndex;
        }

        return "";
    }

    const getRemainingTime = (currentTimeInSec, activeIndex) => {
        const endTimeStamp = podcastKeynote[modalName].keynote[activeIndex].timestamp.split("~")[1].trim();
        const endTimeInSec = moment.duration(endTimeStamp).asSeconds();
        const differenceInSec = endTimeInSec - currentTimeInSec;

        let display = TimeFormat.fromS(differenceInSec, 'mm:ss');

        if (display.length === 9) {
            display = display.split('.')[0];
        }

        return display;
    }

    // when props change, then reset shared states
    useEffect(() => {
        setCurrentTitle("Currently playing section title will be displayed here...");
    }, [props]);

    // somehow should use the useState
    const updateCurrentPodcastSection = (modalName) => {

        if (player.current) {

            const activeClassName = getActiveClassName(modalName);

            const activeIndex = getActiveIndex(modalName);

            const remainingTime = getRemainingTime(player.current.audio.current.currentTime, activeIndex);

            setCurrentTitle(`${podcastKeynote[modalName].keynote[activeIndex].section} - ${remainingTime} remaining`);

            // updateCurrentPlayingWidth()

            // updateActiveClass({"activeClassName": activeClassName});

            // prune all non-active classes
            for (let index = 0; index < podcastKeynote[modalName].keynote.length; index++) {
                if (activeClassName !== `${modalName}-${index}`) {
                    const element = document.getElementsByClassName(`${modalName}-${index}`);
                    for (let j = 0; j < element.length; j++) {
                        element[j].classList.remove("border-pause", "border-play");
                    }
                }
            }

            // now query for that class, and apply a stylec
            const activeItems = document.getElementsByClassName(activeClassName);

            if (activeItems.length) {
                for (let index = 0; index < activeItems.length; index++) {
                    activeItems[index].classList.add("border-pause");

                    // if audio is being played, then also add border-play
                    if (!player.current.audio.current.paused) {
                        activeItems[index].classList.add("border-play");
                    }
                }
            }
        }
    }

    const portfolioModalStyles = {
        content: {
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            opacity: '1',
            transform: 'translate(1,1)',
            transition: 'all 300ms',
            padding: 0,
            borderRadius: 0
        },
        "overflow-y": "scroll"
    };

    const podcastModalStyles = {
        content: {
            // top: '56px',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: (window.innerWidth > 500) ? '+40%' : '0px',
            opacity: '1',
            transform: 'translate(1,1)',
            transition: 'all 300ms',
            padding: 0,
            borderRadius: 0
        },
        "overflow-y": "scroll"
    };

    const {
        visible,
        onCloseHandler,
        modalName,
        theme,
        isPodcast
    } = props;

    const customStyles = (theme === "PortfolioModal") ? portfolioModalStyles : podcastModalStyles

    const htmlToReturn = getModalHTML(modalName, setCurrentTime);

    const modalTitleBar = getModalTitleBar(modalName);

    return (
        <ReactModal
            isOpen={visible}
            closeTimeoutMS={300}
            onRequestClose={onCloseHandler}
            OnRequestClose={onCloseHandler}
            shouldFocusAfterRender
            style={customStyles}
        >
            <div>
                <div className="portfolio-modal-dialog bg-white">
                    <div className="close-button-container" onClick={onCloseHandler}>
                        <MdClose className="close-button" />
                        <span style={{ marginLeft: "1em" }}>{modalTitleBar}</span>
                    </div>

                    {htmlToReturn}

                    {isPodcast &&
                        <div className="broski">
                        <div id="currently-being-played">
                            <div id="current-title-progressbar">
                            </div>
                            <div id="current-title-container">
                                <p style={{zIndex:"2"}}>{currentTitle}</p>
                            </div>

                        </div>
                        <AudioPlayer
                            src={podcastURL[modalName]}
                            ref={player}
                            customAdditionalControls={[]}
                            // className="broski"
                            onListen={() => {
                                updateCurrentPodcastSection(modalName)
                            }}
                            onPause={() => {
                                onPauseCallback(modalName)
                            }}
                            onPlay={() => {
                                onPlayCallback(modalName)
                            }}
                            customIcons={
                                {
                                    // play: <p>></p>
                                    // play: <PlayIcon />,
                                    // pause: <PauseIcon />,
                                    // forward: <ForwardIcon />,
                                    // rewind: <RewindIcon />
                                }
                            }
                        />
                        </div>
                    }

                </div>
            </div>

        </ReactModal>
    )
}

export default PortfolioModal;