import React, { Component, useState } from 'react';
import GridCards from '../components/GridCards';
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';

export class PodcastItem extends React.Component {

    render() {

        const {
            data: {
                id,
                title,
                guestSpeaker,
                education,
                about,
                cssClassName,
                keywords,
            },
            index,
            onClickHandler,
            when
        } = this.props;

        return (
            <Fade when={when} left={(index % 2 === 0)} right={(index % 2 !== 0)} distance="30px" delay={200+index*250} duration={700}>
            <Tilt style={{"width":"100%", "height":"100%"}} scale={1.1} tiltEnable={false}>
            {/* <Tilt style={{"width":"100%", "height":"100%"}} scale={1.1}> */}
            {/* <Tilt style={{"width":"100%", "height":"100%"}} scale={1.1}> */}
            
            <div className="flex-row-container podcast-total-container" style={{height: "100%"}} onClick={() => (guestSpeaker) ? onClickHandler(guestSpeaker) : null}>
                <div className={cssClassName}>
                    {/* <img src="img/podcast2.jpg"/> */}
                    {/* <p style={{"fontFamily":"Montserrat","fontWeight":"700", "color":"black", "fontSize":"60px"}}>{id}</p> */}
                </div>
                <div className="podcast-item-container">
                    {/* <h3 style={{"fontSize":"20px","marginBottom":"10px","marginLeft":"-60px", "padding":"2px 5px 2px 5px", "fontFamily":"Montserrat", "fontWeight":"700", "color":"white", "backgroundColor":"#1419A9", "background": "linear-gradient(90deg, rgba(20,25,169,1) 0%, rgba(0,98,126,1) 100%)", "box-shadow": "5px 5px #000350"}}>{title}</h3> */}
                    <h3>{title}</h3>
                    {/* <span className="update text-white">{guestSpeaker}</span> */}
                    {/* <h2>{guestSpeaker}</h2> */}
                    <div className="podcast-item-inner-container">
                    {(guestSpeaker) &&
                        <div>
                        <span>Guest Speaker</span>
                        <p>{guestSpeaker}</p>
                        </div>
                    }
                    {(about) &&
                        <div>
                            {/* <h2>Summary</h2> */}
                            <span>Summary</span>
                        {/* <h2 style={{fontFamily: 'Montserrat', fontWeight: 700, textAlign:'left', marginBottom:"0", backgroundColor:"rgba(0,0,0,0.05)"}}>Podcast Summary</h2> */}
                        {/* <p style={{fontFamily: 'Montserrat', fontWeight: 700, textAlign:'left', marginBottom:"0", background: "linear-gradient(90deg, rgba(0,20,100,0.15) 0%, rgba(0,0,0,0) 100%)"}}>Podcast Summary</p> */}
                        <p style={{marginBottom:"0"}}>{about}</p>
                        </div>
                    }
                    </div>
                    {/* <h3 style={{ "marginTop": "50px" }}> Projected industry coverage </h3> */}
                    <div>
                    {/* <GridCards theme="transparent-simple" style={{ "marginTop": "5px", "grid-template-columns": "repeat(auto-fit, minmax(50px, 1fr))", "grid-gap":"0", "fontSize":"12px" }} list={keywords}/> */}
                    </div>
                </div>
            </div>

            </Tilt>
            </Fade>
        )
    }
}

export default PodcastItem;