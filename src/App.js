import './App.css';
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
      <a className='homeLink' href='https://www.google.com'>Home</a>
      <a className='bioLink' href='https://www.google.com'>About Me</a>
      <a className='projectLink4' href='https://www.google.com'>Survey Form</a>
      <a className='projectLink3' href='https://www.google.com'>Percussion Machine</a>
      <a className='projectLink2' href='https://jeffdg1986.github.io/timer-app/index.html'>Pomodoro Clock</a>
      <a className='projectLink1' href='https://jeffdg1986.github.io/detailed_calculator/'>Calculator App</a>
      </div>
    </nav>
    <section className='bioSection'>
    <div className='welcome'>
    <h2>Hi, I'm Jeff!</h2>
    <p>I am a self taught software engineer with a focus on front end development. 
      Check out my projects at the top right or more about my background below.</p>
    </div>
    <div className='technologies'>Technologies Available</div>
    </section>
      <div className='about'>an area where I tell me chemistry to software story and provide a pdf copy of my resume</div>
      <div className='projects'>a place where I have screenshot images of my projects with links to github io </div>
    </> );
  }
}
export default PortfolioPage ;

