import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hey there - thanks for clicking around!
          </p>
          <p>
            I'm what people call a software engineer. Basically, I drink coffee, eat snacks, and write code. 
          </p>
          <p>
            I'm familiar with Swift, Python, Java, Go, Javascript, HTML, and CSS.
          </p>
          <p>
            And I'm willing to learn whatever it takes to get things working.
          </p>
          <p>
            Some tools I like to use are AWS, ElasticSearch, React, Grafana, Jenkins, Django, Postgres, REST,
            GraphQL, Nginx, Firebase, the Facebook Graph API, Heroku, and MongoDB.
          </p>
          <p>
            I love to chat about the newest tech, so feel free to reach out if you have any questions!
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            I'm currently a Software Engineer at Viasat. I started as an intern in 2017.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I graduated with a degree in Biochemistry and Molecular Biology from UMass Amherst. 
            I had always wanted to be an eye doctor until I developed my first app during sophomore year of college.
            That was back in 2016. 
          </p>
          <p>
            After getting an internship at Viasat, I decided to try out software engineering - 
            it was awesome.
          </p>
          <p>
            In fact, it was so awesome I decided to become a software engineer instead!
          </p>
          <p>
            Even though I put a career in medicine on hold (sorry mom), one day I hope to apply the skills I learn as a software engineer to healthcare. 
          </p>
          <p>
            But for now, I've got some new Javascript frameworks to learn. Gatsby is pretty cool!
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            Send me an email at petertao95@gmail.com
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/poeticpeet"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/poeticpete/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/PoeticPete"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/petertao/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
