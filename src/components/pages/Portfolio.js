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
            <img src="../images/priestlakenorthernlights.jpg" alt="the northern lights over Priest Lake"></img>
                    <a href="https://becomethebestyou.herokuapp.com/">Become</a>
                    <a href="https://github.com/tylermifflin/Become">Github</a>
            </div>
            <div>
            <img src="../images/mesaarch.jpg" alt="Mesa Arch, Canyonlands"></img>
                    <a href="https://dkargis.github.io/team-Inception/" class="whats-that-plant">Sherpa Trails</a>
                    <a href="https://github.com/Dkargis/team-Inception">Github</a>
            </div>
            <div>
                <img src="../images/northernlightsiceland21.jpg" alt="the northern lights in Iceland"></img>
                <a href="https://tylermifflin.github.io/Weather-Tracker/" class="photography-project">Weather Tracker</a>
                <a href="https://github.com/tylermifflin/Weather-Tracker">Github</a>
            </div>
            <div>
            <img src="../images/reflectioncanyon.jpeg" alt="reflection canyon"></img>
                    <a href="https://superscheduler.herokuapp.com/" class="create-the-life-of-your-dreams">Super Scheduler</a>
                    <a href="https://github.com/tylermifflin/Super-Scheduler">Github</a>
            </div>
            <div>
            <img src="../images/montrotuiridge.jpg" alt="a mountain ridge overlooking the ocean"></img>
                    <a href="https://tylermifflin.github.io/Perfect-Planner/" class="travel-stoked">Perfect Planner</a>
                    <a href="https://github.com/tylermifflin/Perfect-Planner">Github</a>
            </div>
            <div>
            <img src="../images/thewave.jpg" alt="the Wave, Arizona"></img>
                    <a href="https://drive.google.com/file/d/17rxuHfYTDYamc2heJeu3Zq0QBeksTQWD/view" class="travel-stoked">Rapid ReadMe Producer</a>
                    <a href="https://github.com/tylermifflin/Rapid-README-Producer">Github</a>
            </div>


        </div>
    )
}

                
