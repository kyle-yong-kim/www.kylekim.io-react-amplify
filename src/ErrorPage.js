import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import 'react-h5-audio-player/lib/styles.css';
import './Podcast.scss';
import PodcastItem from './components/PodcastItem';
import { PortfolioModal } from './components/PortfolioModal';
import { podcastData } from './data/podcastData';
import noScroll from 'no-scroll';
import { Navbar } from './components/Navbar/Navbar';

function ErrorPage() {

    return (
        <div>
            <Navbar id="start" visible={true} from={"Podcast"}/>
            {/* // show modal all the time for this one */}

            <section id="podcast-page">
                <div className="container">
                    <h1 style={{"fontWeight":"300", "textAlign":"center"}}>
                    404 Error, couldn't find the page you were looking for.
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default ErrorPage;