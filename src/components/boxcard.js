import * as React from "react"
import Modal from "react-modal"
import "../styles/boxcard.css"

import findPerson from "../images/find-person.png"
import codeDocument from "../images/code-document.png"
import ideaDesign from "../images/idea-design.png"
import siteDetails from "../images/website.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import ReactTooltip from "react-tooltip"
import expObj from "../components/boxcard-content"

const generateExpDots = currentSkill => {
  let currentObj = expObj.find(x => x.skill === currentSkill)
  let returnMe = []

  currentObj.experiences.forEach((element, index) => {
    let currentCat = ""
    switch (element.dotColor) {
      case "red":
        currentCat = "Work"
        break
      case "orange":
        currentCat = "Side Projects"
        break
      case "green":
        currentCat = "Volunteering/Extracurriculars"
        break
      case "blue":
        currentCat = "Hackathons"
        break
      case "purple":
        currentCat = "Competitions/Contests"
        break
      case "pink":
        currentCat = "CS Class"
        break
      default:
        currentCat = "Work"
        console.log(`Invalid color ${element.dotColor}`)
        break
    }

    returnMe.push(
      <span key={`key${currentSkill}${currentCat}`}>
        <FontAwesomeIcon
          key={`fai${currentSkill}${currentCat}`}
          data-tip
          data-for={`${currentSkill}${currentCat}`}
          className={`modalDot ${element.dotColor}`}
          icon={faCircle}
        />
        <ReactTooltip
          key={`rtt${currentSkill}${currentCat}`}
          id={`${currentSkill}${currentCat}`}
        >
          {currentCat}
          <ul key={`ul${currentObj.skill}${element.dotColor}`}>
            {element.content.map((x, index) => {
              return (
                <li
                  key={`${index}x${currentSkill}x${element.content.length}x${element.dotColor}x${x}`}
                >
                  {x}
                </li>
              )
            })}
          </ul>
        </ReactTooltip>
      </span>
    )
  })

  return returnMe
}

const skillDot = name => {
  return (
    <li key={name}>
      {" "}
      {name} {generateExpDots(name)}{" "}
    </li>
  )
}

const LinkLi = (title, link) => {
  return (
    <li key={title}>
      <OutboundLink href={link} target="_blank" rel="noreferrer">
        {title}
      </OutboundLink>
    </li>
  )
}

const pfpImage = (
  <StaticImage
    src="../images/pfp3.jpg"
    alt="Me"
    placeholder="blurred"
    className="myPhoto"
  />
)
const idolRecognitionImage = (
  <StaticImage
    src="../images/idolrecognition.png"
    alt="idolrecognition-screenshot"
    placeholder="blurred"
    layout="constrained"
    width="8em"
  />
)
const arrowbicsImage = (
  <StaticImage
    src="../images/arrowbics.png"
    alt="arrowbics-screenshot"
    placeholder="blurred"
    layout="constrained"
    width="8em"
  />
)
const rankedRecordsImage = (
  <StaticImage
    src="../images/rankedrecords.JPG"
    alt="ranked-records-screenshot"
    placeholder="blurred"
    layout="constrained"
    width="8em"
  />
)

const BoxCard = ({ boxTheme }) => {
  const boxThemes = [
    {
      title: "About Me",
      image: findPerson,
      content: (
        <div className="splitHalf">
          <div>
            <p>
              <strong>
                Hi!{" "}
                <span role="img" aria-label="wave">
                  👋
                </span>
              </strong>
            </p>
            <p>
              My name is Hannah, and I’m a Software Engineering student at the{" "}
              <OutboundLink
                href="https://uwaterloo.ca/"
                target="_blank"
                rel="noreferrer"
              >
                University of Waterloo.
              </OutboundLink>
            </p>
            <p>
              I’ve been writing code since I was twelve, and I’m still
              fascinated that lines of text on a computer screen can create
              tools that can shape the future.
            </p>
            <p>
              I'm passionate about engineering software that has a positive
              impact on the world, and I like designing that software to have
              the best UX possible.
            </p>
            <p>
              In my free time, I enjoy crocheting, geocaching, solving puzzles,
              skating, reading and surfing the Internet.
            </p>
            <p>I also think sea otters are very cute 🦦</p>
          </div>
          <div className="centerJust">
            {pfpImage}
            <span role="img" aria-label="camera">
              📸 taken at Big Sur in California!
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "My Tech Stack",
      image: codeDocument,
      content: (
        <div>
          <div>
            <em>Dots are hoverable to show more data.</em>
          </div>
          <div id="techCategories">
            <span className="red">
              <FontAwesomeIcon className="modalDot" icon={faCircle} /> Work
            </span>
            <span className="orange">
              <FontAwesomeIcon className="modalDot" icon={faCircle} /> Side
              Projects{" "}
            </span>
            <span className="green">
              <FontAwesomeIcon className="modalDot" icon={faCircle} />{" "}
              Volunteering/Extracurriculars
            </span>
            <span className="blue">
              <FontAwesomeIcon className="modalDot" icon={faCircle} />{" "}
              Hackathons
            </span>
            <span className="purple">
              <FontAwesomeIcon className="modalDot" icon={faCircle} />{" "}
              Competitions/Contests
            </span>
            <span className="pink">
              <FontAwesomeIcon className="modalDot" icon={faCircle} /> CS
              Classes
            </span>
          </div>
          <div className="fourSquareGrid">
            <div>
              <h4>Web Development</h4>
              <ul>
                {skillDot("React")}
                {skillDot("Redux")}
                {skillDot("Angular")}
                {skillDot("Express")}
                {skillDot("Gatsby")}
              </ul>
            </div>
            <div>
              <h4>Programming</h4>
              <ul>
                {skillDot("TypeScript/JavaScript/jQuery")}
                {skillDot("Java")}
                {skillDot("Ruby")}
                {skillDot("C++")}
                {skillDot("C")}
              </ul>
            </div>
            <div>
              <h4>Tools</h4>
              <ul>
                {skillDot("Git/GitHub/GitLab")}
                {skillDot("Figma")}
              </ul>
            </div>
            <div>
              <h4>Miscellaneous</h4>
              <ul>
                {skillDot("Firebase")}
                {skillDot("Android and Kotlin")}
              </ul>
            </div>
          </div>
          <div className="rightAlign">
            <em>
              For more details, see my{" "}
              <OutboundLink target="_blank" href="/HannahGuoResume.pdf">
                Resume
              </OutboundLink>
              ,{" "}
              <OutboundLink
                href="https://github.com/HannahGuo"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </OutboundLink>
              <span> or </span>
              <OutboundLink
                href="https://www.linkedin.com/in/hannah-guo/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn.
              </OutboundLink>
            </em>
          </div>
        </div>
      ),
    },
    {
      title: "My Projects",
      image: ideaDesign,
      content: (
        <div>
          <div>
            Here are my project highlights - things I’ve built that I’m the most
            proud of{" "}
            <span role="img" aria-label="smile">
              🙂
            </span>
          </div>
          <div className="gridRow">
            <div className="projectCard">
              {rankedRecordsImage}
              <h4>Ranked Records</h4>
              <h5>
                <OutboundLink
                  href="https://ranked-records.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website (might take time to load due to free hosting tier)
                </OutboundLink>
                <span> | </span>
                <OutboundLink
                  href="https://github.com/HannahGuo/RankedRecords"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Link
                </OutboundLink>
              </h5>
              <br />
              <p>
                Ranked Records is my largest project yet - it's an app that I
                wanted to use when I first got Spotify, so I finally built it.
                <br /> <br /> The site allows users to create playlists with all
                an artist's Spotify songs (not easily possible in the app),
                which can be sorted in ascending/descending popularity or
                chronology. It had over 200 users in the first launch week, and
                continues to receive traffic today!
              </p>
            </div>
            <div className="projectCard">
              {idolRecognitionImage}
              <h4>Idol Recognition</h4>
              <h5>
                <OutboundLink
                  href="https://github.com/HannahGuo/Idol-Recognition"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Link
                </OutboundLink>
              </h5>
              <br />
              <p>
                Idol Recognition was a fun side project I experimented with
                Python OpenCV and Facial Recognition for the first time. It's a
                Python application that uses facial recognition to identify
                K-Pop idols from an image.
              </p>
            </div>
            <div className="projectCard">
              {arrowbicsImage}
              <h4>Arrowbics</h4>
              <h5>
                <OutboundLink
                  href="https://cssi2020-culminating.glitch.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo Link
                </OutboundLink>
                <span> | </span>
                <OutboundLink
                  href="https://glitch.com/edit/#!/cssi2020-culminating"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Link
                </OutboundLink>
              </h5>
              <br />
              <p>
                Arrowbics was my final project during Google CSSI:Online. It's a
                fun mini-game inspired by one I used to play when I was little,
                called Fantage.
              </p>
            </div>
          </div>
          <div className="rightAlign">
            <em>
              For more projects, see my{" "}
              <OutboundLink target="_blank" href="/HannahGuoResume.pdf">
                Resume
              </OutboundLink>
              ,{" "}
              <OutboundLink
                href="https://github.com/HannahGuo"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </OutboundLink>
              <span> or </span>
              <OutboundLink
                href="https://devpost.com/HannahGuo"
                target="_blank"
                rel="noreferrer"
              >
                Devpost.
              </OutboundLink>
            </em>
          </div>
        </div>
      ),
    },
    {
      title: "Site Details",
      image: siteDetails,
      content: (
        <div className="splitHalf">
          <div>
            <p>
              Thie site was designed using{" "}
              <OutboundLink
                href="https://www.figma.com/"
                target="_blank"
                rel="noreferrer"
              >
                Figma
              </OutboundLink>
              , and built using{" "}
              <OutboundLink
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noreferrer"
              >
                Gatsby
              </OutboundLink>
              , and{" "}
              <OutboundLink
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                React
              </OutboundLink>
              .
            </p>

            <p>
              As a side project, it took about 2 weeks to build (during my first
              co-op term).
            </p>

            <p>
              <span role="img" aria-label="books">
                📚{" "}
              </span>
              <strong>Fun fact:</strong> Each book displayed is colored based
              off of one of my favourites:
            </p>
            <ul>
              {LinkLi(
                "Six of Crows Duology",
                "https://www.goodreads.com/series/131836-six-of-crows"
              )}
              {LinkLi(
                "The Illuminae Files Trilogy and Prequel",
                "https://www.goodreads.com/series/116078-the-illuminae-files"
              )}
              <li key={"Scythe/Thunderhead"}>
                <OutboundLink
                  href="https://goodreads.com/book/show/28954189-scythe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Scythe
                </OutboundLink>
                <span> and </span>
                <OutboundLink
                  href="https://www.goodreads.com/book/show/33555224-thunderhead"
                  target="_blank"
                  rel="noreferrer"
                >
                  Thunderhead
                </OutboundLink>
              </li>
              {LinkLi(
                "I, Robot",
                "https://www.goodreads.com/book/show/1796941.I_Robot"
              )}
              {LinkLi(
                "The Martian",
                "https://www.goodreads.com/book/show/18007564-the-martian"
              )}
              {LinkLi(
                "The Last Hours Trilogy",
                "https://www.goodreads.com/series/104049-the-last-hours"
              )}
            </ul>
          </div>
          <div>
            <h4>
              <span role="img" aria-label="picture">
                🖼️{" "}
              </span>
              Picture Credits
            </h4>
            <ul>
              {LinkLi("Programmer", "https://undraw.co/")}
              {LinkLi(
                "About Me Icon",
                "https://iconscout.com/icon/find-person-1896565"
              )}
              {LinkLi(
                "Tech Stack Icon",
                "https://iconscout.com/icons/code?price=free&styles[]=colored-outline"
              )}
              {LinkLi(
                "Projects Icon",
                "https://iconscout.com/icon/idea-design-2"
              )}
              {LinkLi(
                "Site Details Icon",
                "https://icons8.com/icon/68247/website"
              )}
              {LinkLi(
                "E-mail Icon",
                "https://870bdbfcf2.nxcli.net/home/mail-icon-white/"
              )}
              {LinkLi(
                "Github Icon",
                "https://www.flaticon.com/free-icon/github-logo_25231"
              )}
              {LinkLi("Devpost Icon", "https://iconscout.com/icon/devpost")}
              {LinkLi(
                "Linkedin Icon",
                "https://www.iconfinder.com/icons/771370/circle_linkedin_logo_media_network_social_share_icon"
              )}
              {LinkLi(
                "Flickr Icon",
                "https://www.flaticon.com/free-icon/flickr_179321"
              )}
              {LinkLi(
                "Potted Plant",
                "https://www.fotor.com/stickers/t_potted-plant-plum-blossom_8708f9"
              )}
            </ul>
            <br />
            <h4>
              <span role="img" aria-label="toolbox">
                🧰{" "}
              </span>
              Premade Components Used
            </h4>
            <ul>
              {LinkLi(
                "react-modal",
                "https://www.npmjs.com/package/react-modal"
              )}
              {LinkLi(
                "react-tooltip",
                "https://www.npmjs.com/package/react-tooltip"
              )}
            </ul>
            <div id="checkGithub">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              <OutboundLink
                href="https://github.com/HannahGuo/HannahGuo.github.io.git"
                target="_blank"
                rel="noreferrer"
              >
                Check out the code on GitHub!
              </OutboundLink>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      borderRadius: "0",
      backgroundColor: "#E5E5E5",
      width: "50%",
      height: "70%",
      margin: "auto",
      inset: "0",
      color: "black",
      display: "flex",
      padding: "3em",
      flexDirection: "column",
    },
  }

  let index = boxThemes.findIndex(x => x.title === boxTheme)
  let currentTheme = boxThemes[index]
  let currentIcon = currentTheme.image
  let currentTitle = currentTheme.title
  let currentContent = currentTheme.content

  const [showModal, setModal] = React.useState(false)

  function openModal() {
    setModal(true)
  }

  function closeModal() {
    setModal(false)
  }

  return (
    <>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={modalStyle}
        contentLabel={`${currentTitle} Modal`}
      >
        <div className="modal-header">
          <div className="modal-header-title">
            <img src={currentIcon} alt={currentTitle}></img>
            {currentTitle}
          </div>
          <div
            className="close-modal"
            role="button"
            tabIndex={0}
            onClick={closeModal}
            onKeyDown={closeModal}
          >
            x
          </div>
        </div>
        {currentContent}
      </Modal>

      <div
        role="button"
        tabIndex={0}
        className="boxcard"
        onClick={openModal}
        onKeyDown={openModal}
      >
        <img src={currentIcon} alt={currentTitle}></img>
        {currentTitle}
      </div>
    </>
  )
}

export default BoxCard
