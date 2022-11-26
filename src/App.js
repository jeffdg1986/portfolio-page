import './App.css';
import nerd from './images/computer_nerd.jpeg';
import beaker from './images/beaker_in_lab_3.jpg';
import reactPic from './images/favicon.ico'; 
import jsPic from './images/javascript_icon.png';
import d3Pic from './images/d3_icon.png';
import calculatorPic from './images/calculator_2.png';
import timerPic from './images/Pomodoro_Clock.png';
import React, { Component } from 'react';
class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return ( <>
    <nav className='navBar'>
      <div className='linkContainer'>
      <a className='homeLink' href='#home'>Home</a>
      <a className='bioLink' href='#aboutMe'>About Me</a>
      <a className='projectLink4' href='https://www.google.com'>Survey Form</a>
      <a className='projectLink3' href='https://www.google.com'>Percussion Machine</a>
      <a className='projectLink2' href='https://jeffdg1986.github.io/timer-app/index.html'>Pomodoro Clock</a>
      <a className='projectLink1' href='https://jeffdg1986.github.io/detailed_calculator/'>Calculator App</a>
      </div>
    </nav>
    <main>
    <section id='home'>
    <div className='introduction'>
    <h2>Hi, I'm Jeff!</h2>
    <p>I am a self taught software engineer with a focus on front end development. 
      Check out my projects at the top right or more about my background below.</p>
    </div>
    <div className='technologies'>
      <div style={
        {fontSize: '50px', 
        textDecorationLine: 'underline'}}>Technologies Available</div>
      <img src={reactPic} alt='React.js'/>
      <img  id='jsPic' src={jsPic} alt='JS' />
      <img src={d3Pic} alt='d3' />
      <div className='name react'>React.JS</div>
      <div className='name javascript'>JavaScript</div>
      <div className='name d3JS'>d3.JS</div>
      </div>
      <div className='scroll2AboutMe'><a href='#aboutMe'>About Me</a></div>
    </section>
    <section id='aboutMe'>
      <h1>About Me</h1>
      <div className='comparison'>
        <img className='beaker' src={beaker} alt='beaker'></img>
        <div className='about'><p>Ever since I was a child, I've always been curious. </p>
        <p>This curiousity, much to my (then) parents and (now) 
      wife's chagrin has led me to learn many topics in depth. This fascination with how things work ultimately led me to chemistry, math, economics, and now software 
      engineering.</p>
      <p>My journey into programming started a few years ago when I used python to develop my first lab data analysis program. It was just a simple filter of data within 95% CI, but I was hooked.</p>
       My reasoning for making a career change is three-fold: 
       <ol>
        <li>I found that I much prefer creating software and automation tools than working in the lab.</li>
        <li>The only roadblocks to testing / creating are a computer, internet connection, and my own drive for knowledge. Contrast that with the chemical industry and you are looking at millions of dollars for a research facility.</li>
        <li>I have begun to worry about the health risks of working with chemicals.</li>
      </ol>
      <p>When I'm not working I like to run, lift weights, and take awesome photos like the one above....</p>
      <p>Contact info: jeffdg1986@gmail.com</p>
      </div>
        <img className='nerd' src={nerd} alt='nerd'></img>
      </div>
      <div className='scroll2Resume'><a href='#resume'>Resume</a></div>
      </section>
      <section id='resume'>
        <div className='experienceType'>Work</div>
        <div className='description'>
        <div className='institution'>BYK USA Inc.</div>
        <div className='jobTitle'>Materials Chemist</div>
        <div className='dates'>July 2021 - August 2022</div>
        <ul>
          <li>Development of new thermoplastics additive packages falling within antioxidants, recycling stabilizers, adhesion promoters, fire retardants, odor reducers, and light stabilizers.</li>
          <li>Use of twin-screw extrusion, compaction, and reactive techniques to run research projects.</li>
          <li>Managed procurement and inventory for QC and R&D groups.</li>
          <li>Used Python to automate data analysis of Instron tensile stress measurements. This program saved my team 8 hours per week.</li>
        </ul>
        </div>
        <div className='description'>
        <div className='institution'>DayGlo Color Corp.</div>
        <div className='jobTitle'>Development Chemist</div>
        <div className='dates'>February 2013 - July 2021</div>
        <ul>
          <li>Development of fluorescent dye soluble oligomers with applications in inks, plastics, and coatings.</li>
          <li>Technical leader in Stage Gate Process</li>
          <li>Troubleshooting issues in manufacturing, QC, and customer applications.</li>
          <li>Used Power BI to find opportunities for projects to grow contribution margin and created an excel model to show bottlenecks in manufacturing.</li>
          <li>Gave / created technical presentations to marketing and customers.</li>
        </ul>
        </div>
        <div className='experienceType'>Education</div>
        <div className='description'>
        <div className='institution'>Cleveland State University</div>
        <div className='priceyPaper'>Masters in Business Administration</div>
        <div className='dates'>2016</div>
        <ul>
          <li>Finance Specialization</li>
          <li>NSHMBA Consulting Award</li>
        </ul>
        </div>
        <div className='description'>
          <div className='institution'>Edinboro University of Pennsylvania</div>
          <div className='priceyPaper'>Bachelor's of Science</div>
          <div className='dates'>2011</div>
        <ul>
          <li>Chemistry Major</li>
          <li>Math and Economics Minor</li>
          <li>Student Tutor and Research Assistant</li>
        </ul>
        </div>
        <div className='experienceType'>Certifications</div>
        <div className='description'>
          <div className='institution'>FreeCodeCamp.org</div>
          <div>Project based Certifications: <span className='italicBold'>You get out what you put in!</span></div>
        <ul>
          <li>Responsive Web Design</li>
          <li>JavaScript, Algorithms, and Data Structures</li>
          <li>Front End Development Libraries</li>
        </ul>
        </div>
        <div className='scroll2Projects'><a href='#projects'>Projects</a></div>
        </section>
      <section id='projects'>
      <div className='projects'> 
      <a href='https://jeffdg1986.github.io/detailed_calculator/' alt='https://github.com/jeffdg1986/detailed_calculator'><img src={calculatorPic} alt='calculator' className='calculator'/></a>
      <a href='https://jeffdg1986.github.io/timer-app/index.html' alt='https://github.com/jeffdg1986/timer-app'><img src={timerPic} alt='timer' className='timer'/></a>
      
      </div>
      </section>
      </main>
    </> );
  }
}
export default PortfolioPage ;

