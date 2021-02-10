import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import 'react-h5-audio-player/lib/styles.css';
import './Podcast.scss';
import PodcastItem from './components/PodcastItem';
import { PortfolioModal } from './components/PortfolioModal';
import { podcastData } from './data/podcastData';
import noScroll from 'no-scroll';
import { Navbar } from './components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import GridCards from './components/GridCards';

function ErrorPage() {

    return (
        <div>
            <Navbar id="start" visible={true} from={"Error"} />
            {/* // show modal all the time for this one */}

            <section id="podcast-page">
                <div className="container">
                    <h1 style={{ "fontWeight": "300", "textAlign": "center" }}>
                        Sorry, this page doesn't exist.
                    </h1>

                    <Link to="/" className="link">
                        <GridCards theme="blue" list={["Redirect back to home page"]} />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default ErrorPage;