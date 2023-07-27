import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import priestlakenorthenlights from '../images/priestlakenorthernlights.jpg'

const imagestyle = {
    height: "100%",
}

export default function Portfolio() {
    return (
        <div className='container'>
            <h1>Portfolio</h1>
            <p>
            Here is a list of my projects:
            </p>
            {/* add 6 projects with an image, link to github and a link to deployed project */}
            <div className='row'>
              <div className='col-lg-4 col-md-6 mb-4'>
                <div className='card'>
                {/* i want to access the images in my images folder and display them here */}
                 <img src={priestlakenorthenlights} alt="northern lights over Priest Lake" className="card-img-top" style={imagestyle} />
                    <div className='card-body'>
                    <a href="https://becomethebestyou.herokuapp.com/">Become</a>
                    </div>
                    <div className='card-body'>
                    <a href="https://github.com/tylermifflin/Become">Github</a>
                    </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 mb-4'>
                <div className='card'>
                 <img src="../components/images/mesaarch.jpg" alt="Mesa Arch, Canyonlands" className="card-img-top" style={imagestyle} />
                    <div className='card-body'>
                    <a href="https://dkargis.github.io/team-Inception/" class="whats-that-plant">Sherpa Trails</a>
                    </div>
                    <div className='card-body'>
                    <a href="https://github.com/Dkargis/team-Inception">Github</a>
                    </div>
                </div>
              </div>
                <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='card'>
                     <img src="../components/images/northernlightsiceland21.jpg" alt="the northern lights in Iceland" className="card-img-top" style={imagestyle} />
                      <div className='card-body'>
                      <a href="https://tylermifflin.github.io/Weather-Tracker/" class="photography-project">Weather Tracker</a>
                        </div>
                        <div className='card-body'>
                      <a href="https://github.com/tylermifflin/Weather-Tracker">Github</a>
                      </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 mb-4'>
                 <div className='card'>
                  <img src="../components/images/reflectioncanyon.jpeg" alt="reflection canyon" className="card-img-top" style={imagestyle} />
                    <div className='card-body'>
                    <a href="https://superscheduler.herokuapp.com/" class="create-the-life-of-your-dreams">Super Scheduler</a>
                    </div>
                    <div className='card-body'>
                    <a href="https://github.com/tylermifflin/Super-Scheduler">Github</a>
                    </div>
                 </div>
                </div>
             <div className='col-lg-4 col-md-6 mb-4'>
              <div className='card'>
                <img src="../components/images/montrotuiridge.jpg" alt="a mountain ridge overlooking the ocean" className="card-img-top" style={imagestyle} />
                    <div className='card-body'>
                    <a href="https://tylermifflin.github.io/Perfect-Planner/" class="travel-stoked">Perfect Planner</a>
                    </div>
                    <div className='card-body'>
                    <a href="https://github.com/tylermifflin/Perfect-Planner">Github</a>
                    </div>
              </div>
             </div>
             <div className='col-lg-4 col-md-6 mb-4'>
              <div className='card'>
            <img src="../components/images/thewave.jpg" alt="the Wave, Arizona" className="card-img-top" style={imagestyle} />
                    <div className='card-body'>
                    <a href="https://drive.google.com/file/d/17rxuHfYTDYamc2heJeu3Zq0QBeksTQWD/view" class="travel-stoked">Rapid ReadMe Producer</a>
                    </div>
                    <div className='card-body'>
                    <a href="https://github.com/tylermifflin/Rapid-README-Producer">Github</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

 
                
