import React, { Component } from "react";
import "./App.css";

class App extends Component {
  showContactForm = () => {
    if (document.getElementById("contact-form").style.display === "none") {
      document.getElementById("contact-form").style.display = "flex";
      document.getElementById("form-body").style.display = "initial";
    } else {
      document.getElementById("contact-form").style.display = "none";
    }
    document.getElementById("checkform").style.display = "none";
  };

  exitButton = () => {
    document.getElementById("contact-form").style.display = "none";
  };
  submitContactForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("http://localhost:3000/send", {
      method: "POST",
      body: data,
    })
      .then(() => {
        console.log("Submitted!");
        this.sentNotification();
      })
      .catch((err) => {
        throw err;
      });
  };

  sentNotification = () => {
    document.getElementById("form-body").style.display = "none";
    document.getElementById("checkform").style.display = "flex";
  };

  hiddenForm = () => {
    document.getElementById("contact-form").style.display = "none";
    window.location.reload();
  };

  render() {
    return (
      <div>
        <nav className="navbar bg-light">
          <h2 style={{ fontWeight: 750 }} className="d-none d-sm-block">
            BARNEY SHI
          </h2>
          <div id="social_media_icons">
            <a
              href="https://github.com/BarneyShi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="github_icon"
                src="data:image/svg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBAwIOTdGfZNBAAADAUlEQVRIx43VXWjVdRgH8M85euZmysgXVJo410ws2ky9jSyCIYIkEfQihdKldxXkiogVFJIkFpJihiGGEIwIvIiWiTEdOlldiKDNaOZFU/fSztnLcT5d7O9/087Z+v5vntfv8/x+/+f3+2WUwgM2e9oT6lRjQLcLTjoh739gsX3+EcnXqzeVB+21aPrknGYDQl6rV9WaA+ZY6TWtCkK/XXLl0hdoE0YdsLiM/2PDwunS/kdcETrUTttjnXPCZavudyx0RfhGlYZpKFZqUOW4cNmCe9feJhyT0SyEX21N/kaNGvPAVr8JYZeM48IPZk8SvC2cU4UeRV1C6HI13f+ria1T0Z+Yq1N4Z7L9PiPqUCH8jqd0CUXd2p12yW2hy5PodkcO9UYV1EwQ7BE+BbON+wvM8ri5aYfzPWYWuG48kfYJe2GuAYVkQLJuJRVKo8IdN2WTgRvWr4rnhe+SgB1Ch0xZgowOYXuifS88x35hR2L6w23rpp2D9cZ1J/Lrwme0Cw+DNUK7mXBWWA1WCb9k1eM6WIdTMxKcwnpwDfVZ1W4ZBpUYmJFgEBVgWJ/qrIxi4spT5hhNxaIkEsZkuaGY7PsK4fyMBJ3CcpBV9DfnhIcS5wWhadr0TUJnIi8XOjgkvJiYNgu91pRNf9QNYVOivSwc5BXhcBqyRxjwRolprPCmQWF3ajkyUbpaQd6DaDBfRosxodcRO20EG+30tRvCmPfTOV2oIG8+HBaacVa/7Wh0VEGk1XYLoeCohikdvSd8MSGuVjRkhXeNiOQqeUm4qDKZj4vCC/csqFbekGV31U+ENjlbjOv3rGrHhG1p+Dbh8ynpOSeFlklDpQ7hAN5Kb6GwIfVvEL5NtYxDwpmkvwTLXBO+lLPFjy7pE9am3rVCa1r9K6Fnsv27aNQj/KwetJYhqHdK6LlnO6d0cUYo+MCSkgRLfKggtFtabtIqtRgSRtwUmtKnrUm4aUQY9VFiLYul9hsq+bgOOaju/vDS9988mz2jMXne+13V5ScnDP039F/mhTeiiXrMyAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNC0xMlQwODo1Nzo1NSswMDowMDaiwKUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDQtMTJUMDg6NTc6NTUrMDA6MDBH/3gZAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
              />
            </a>
            <a
              href="https://www.linkedin.com/in/barneyshi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="linkedin_icon"
                src="data:image/svg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBAwIOiznNQluAAABE0lEQVRIx+2VsU4CQRCGvzNHaYyExlBIaUyE2JjwBCbWtFjQGEp6e3wEOzsKLShIfAZrOiPEBBoqMDQgx2Vo1r3lDGb3trFgmp1/LvPN3NxtJkDwshCAtU+2EGUuHyEHfi8A/w1Qp8+Qths2GeIFMYIgNCxzU0M815Ur2TooMlcdXNt3sP0flHnkiRvr4r8ArhYhoSGPaCqvyzsn3CrV4Ys7qhQY80wvfXuSDkpqAkINuNKqzof2hRdCswMbwNRIF4T7XZ9xlx2z4I2J1i1yyUMbwCdnVDnlVek8l26AB0bAiraOlNwAg9QJh26AWJ1LHQncAH/aHgDmZYqZKW8FrLX62RqiI98mYr8XAgSv5Rr4rvcNQtNv0xwLwycAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDQtMTJUMDg6NTg6NDQrMDA6MDCtdJACAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA0LTEyVDA4OjU4OjQ0KzAwOjAw3CkovgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
              />
            </a>
          </div>
        </nav>
        <div className="jumbotron text-center">
          <img
            className="rounded-circle"
            id="avator-picture"
            alt="avator"
            src="brian.jpg"
          />
          <h2 style={{ fontWeight: 750 }}>Barney Shi</h2>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-md-4 offset-md-1 text-left"
              id="introduction"
            >
              <p className="subtitle">ABOUT ME</p>
              <p>
                I'm a second-degree computer science student at the University
                of British Columbia. I graduated with a Bachelor degree in
                Economics in 2018. I'm interested in web development.
              </p>
              <p className="subtitle" style={{ paddingTop: "5px" }}>
                SKILLS
              </p>
              <ul>
                <li>Languages:</li>
                <p style={{ marginBottom: "10px" }}>Javascript, Java</p>
                <li>Web:</li>
                <p style={{ marginBottom: "10px" }}>
                  Ember.js, Node.js, React.js, Express.js, HTML/CSS, Bootsrap,
                  jQuery, SQL/NoSQL
                </p>
                <li>Tools:</li>
                <p>Git, JIRA, CircleCI, TortoiseSVN</p>
              </ul>

              <p className="subtitle">EDUCATION</p>
              <p>
                <span style={{ fontWeight: "bolder" }}>
                  University of British Columbia
                </span>{" "}
                <br /> <span className="text-left">August 2018 - Present</span> | Vancouver,
                BC, Canada <br /> Bachelor of Computer Science{" "}
              </p>
              <p>
                <span style={{ fontWeight: "bolder" }}>
                  Ocean University of China
                </span>{" "}
                <br /> <span>Sep 2013 - Sep 2018</span> | Tsingtao, China <br />
                Bachelor of Economics,
                <br />
                Awarded 3 Outstanding Scholarships
              </p>
            </div>

            <div className="col-1 d-none d-md-block" id="v1"></div>
            <div className="col-12 col-md-4 offset-md-1">
              <p className="subtitle">WORK EXPERIENCE</p>
              <p>
                <span style={{ fontWeight: "bolder" }}>
                  Front-End Engineer, Later Inc
                </span>{" "}
                <br /> <span>Jan 2021 - May 2021</span> | Vancouver <br />
                <span style={{ paddingLeft: "25px" }}>
                  &#8226;Worked on Drag&Drop feature
                </span>{" "}
                <br />
                <span style={{ paddingLeft: "25px" }}>
                  &#8226;Resolved over 35 front-end tickets
                </span>
              </p>
              <p>
                <span style={{ fontWeight: "bolder" }}>
                  Junior Web Developer, Transoft Solutions Inc
                </span>{" "}
                <br /> <span>Sep 2019 - Dec 2019</span> | Richmond <br />
                <span style={{ paddingLeft: "25px" }}>
                  &#8226;Made 3 landing pages
                </span>{" "}
                <br />
                <span style={{ paddingLeft: "25px" }}>
                  &#8226;Resolved over 20 front-end tickets
                </span>
              </p>

              <p className="subtitle">PROJECTS</p>
              <ul>
                <li>
                  <a
                    href="https://imemedb.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iMemeDB
                  </a>
                </li>
                <p>
                  CRUD full-stack website utilizing React.js, Node.js; Featuring
                  upvote/downvote, comment functions; Protected with user access
                  control/JWT
                  <br />
                  <span>React.js | Node.js | Redux | MongoDB</span>
                </p>
                <li>
                  <a
                    href="https://autoturnonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AutoTURN Online
                  </a>
                </li>
                <p>
                  Co-op work project. Responsive, user-friendly landing page for
                  AutoTURN Online, Transoft Solutions Inc. <br />
                  <span>Bootstrap | HTML | CSS | PHP</span>
                </p>
                <li>
                  <a
                    href="https://yelplakes.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YelpLakes
                  </a>
                </li>
                <p>
                  CRUD website on which users share favourite lake landscapes.{" "}
                  <br />
                  <span>Node.js | Express.js | MongoDB | Bootstrap</span>
                </p>
              </ul>
            </div>

            <div className="col-12 offset-md-1 col-md-4"></div>
          </div>
        </div>

        <div
          id="contact-form"
          style={{ display: "none" }}
          onSubmit={this.submitContactForm}
        >
          <form onSubmit={this.conTactFormSubmit} id="form-body">
            <h2 style={{ display: "inlineBlock" }}>Contact Form</h2>{" "}
            <div onClick={this.exitButton} id="exit-button">
              &times;
            </div>
            <p>Name:</p>
            <input name="name" />
            <p>Email Address:</p>
            <input type="text" name="email" />
            <p>Message:</p>
            <textarea name="message"></textarea>
            <br />
            <button className="btn btn-primary">Submit</button>
          </form>
          <div id="checkform">
            <img src="checkmark.gif" alt="checkmark" />
            <br />
            <p>
              Thank you for your message! <br />I will get back to you soon.
            </p>
            <br />

            <button className="btn btn-warning" onClick={this.hiddenForm}>
              Close
            </button>
          </div>
        </div>

        <footer id="page-footer">
          <span>&copy; 2021 Barney Shi </span>
        </footer>
      </div>
    );
  }
}

export default App;
