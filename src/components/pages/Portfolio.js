import React from 'react';

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <p>
            Here is a list of my projects:
            </p>
            {/* add 6 projects with an image, link to github and a link to deployed project */}
            <div>
            <img src="../images/priestlakenorthernlights.jpg" alt="a picture of the northern lights over Priest Lake"></img>
                    <a href="https://becomethebestyou.herokuapp.com/">Become</a>
                    <a href="https://github.com/tylermifflin/Become">Github</a>
            </div>
            <div>
            <img src="../images/mesaarch.jpg" alt="a picture or Mesa Arch, Canyonlands"></img>
                    <a href="https://dkargis.github.io/team-Inception/" class="whats-that-plant">Sherpa Trails</a>
                    <a href="https://github.com/Dkargis/team-Inception">Github</a>
            </div>
            <div>
                <img src="../northernlightsiceland21.jpg" alt="a picture of the northern lights in Iceland"></img>
                <a href="https://tylermifflin.github.io/Weather-Tracker/" class="photography-project">Weather Tracker</a>
                <a href="https://github.com/tylermifflin/Weather-Tracker">Github</a>
            </div>
                
