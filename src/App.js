import './App.css';
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

function App() {
  useEffect(() => {
    document.title = "Conrad Fukuzawa"
  }, [])

  return (
    <div className="App">
      <div className="parallax p-1">
        <div className="main-info-container">
          
          <h1 className="my-name">
            Conrad Fukuzawa
          </h1>

          <div className="links-container">
            <h2 className="links-text">
              links to my stuff
            </h2>
            <a href="https://github.com/Meeeek" target="_black">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/conrad-fukuzawa/" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/conradfukuzawa/" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="more-info">
        <div className="info-container">
          <p className="info-text">
            Hi my name is Conrad Fukuzawa. I am a computer science student studying at University of Toronto Mississauga.

            <b><br></br>SITE UNDER CONSTRUCTION</b>
          </p>

          <br></br>
          <a className="resume-link" href="/resume.pdf"> {/*temporary link*/}
            <b>
              LINK TO RESUME
            </b>
          </a>
        </div>
      </div>

      <div className="parallax p-2">

      </div>
    </div>
  );
}

export default App;
