import * as React from "react"
import "../styles/boxcard.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const LinkLi = (title: string, link: string) => {
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
		width={8}
	/>
)
const arrowbicsImage = (
	<StaticImage
		src="../images/arrowbics.png"
		alt="arrowbics-screenshot"
		placeholder="blurred"
		layout="constrained"
		width={8}
	/>
)
const rankedRecordsImage = (
	<StaticImage
		src="../images/rankedrecords.JPG"
		alt="ranked-records-screenshot"
		placeholder="blurred"
		layout="constrained"
		width={8}
	/>
)

type BoxCardProps = {
	boxTheme: string
}

export const BoxCard: React.FC<BoxCardProps> = ({ boxTheme }) => {
	const boxThemes = [
		{
			title: "About Me",
			image: "",
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
							My name is Hannah, and I’m a Software Engineering
							student at the{" "}
							<OutboundLink
								href="https://uwaterloo.ca/"
								target="_blank"
								rel="noreferrer"
							>
								University of Waterloo.
							</OutboundLink>
						</p>
						<p>
							I’ve been writing code since I was twelve, and I’m
							still fascinated that lines of text on a computer
							screen can create tools that can shape the future.
						</p>
						<p>
							I'm passionate about engineering software that has a
							positive impact on the world, and I like designing
							that software to have the best UX possible.
						</p>
						<p>
							In my free time, I enjoy crocheting, geocaching,
							solving puzzles, skating, reading and surfing the
							Internet.
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
			title: "My Projects",
			image: "",
			content: (
				<div>
					<div>
						Here are my project highlights - things I’ve built that
						I’m the most proud of{" "}
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
									Website (might take time to load due to free
									hosting tier)
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
								Ranked Records is my largest project yet - it's
								an app that I wanted to use when I first got
								Spotify, so I finally built it.
								<br /> <br /> The site allows users to create
								playlists with all an artist's Spotify songs
								(not easily possible in the app), which can be
								sorted in ascending/descending popularity or
								chronology. It had over 200 users in the first
								launch week, and continues to receive traffic
								today!
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
								Idol Recognition was a fun side project I
								experimented with Python OpenCV and Facial
								Recognition for the first time. It's a Python
								application that uses facial recognition to
								identify K-Pop idols from an image.
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
								Arrowbics was my final project during Google
								CSSI:Online. It's a fun mini-game inspired by
								one I used to play when I was little, called
								Fantage.
							</p>
						</div>
					</div>
					<div className="rightAlign">
						<em>
							For more projects, see my{" "}
							<OutboundLink
								target="_blank"
								href="/HannahGuoResume.pdf"
							>
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
			title: "My Tech Stack",
			image: "",
			content: (
				<div>
					<div>
						<em>Dots are hoverable to show more data.</em>
					</div>
					<div id="techCategories">
						<span className="red">
							<FontAwesomeIcon
								className="sidePanelDot"
								icon={faCircle}
							/>{" "}
							Work
						</span>
						<span className="orange">
							<FontAwesomeIcon
								className="sidePanelDot"
								icon={faCircle}
							/>{" "}
							Side Projects{" "}
						</span>
						<span className="green">
							<FontAwesomeIcon
								className="sidePanelDot"
								icon={faCircle}
							/>{" "}
							Volunteering/Extracurriculars
						</span>
						<span className="blue">
							<FontAwesomeIcon
								className="sidePanelDot"
								icon={faCircle}
							/>{" "}
							Hackathons
						</span>
						<span className="purple">
							<FontAwesomeIcon
								className="sidePanelDot"
								icon={faCircle}
							/>{" "}
							Competitions/Contests
						</span>
						<span className="pink">
							<FontAwesomeIcon
								className="sidePanelDot"
								icon={faCircle}
							/>{" "}
							CS Classes
						</span>
					</div>
					<div className="fourSquareGrid">
						<div>
							<h4>Web Development</h4>
						</div>
						<div>
							<h4>Programming</h4>
						</div>
						<div>
							<h4>Tools</h4>
						</div>
						<div>
							<h4>Miscellaneous</h4>
						</div>
					</div>
					<div className="rightAlign">
						<em>
							For more details, see my{" "}
							<OutboundLink
								target="_blank"
								href="/HannahGuoResume.pdf"
							>
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
			title: "Site Details",
			image: "",
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
							As a side project, it took about 2 weeks to build
							(during my first co-op term).
						</p>

						<p>
							<span role="img" aria-label="books">
								📚{" "}
							</span>
							<strong>Fun fact:</strong> Each book displayed is
							colored based off of one of my favourites:
						</p>
						<ul>
							{LinkLi(
								"Six of Crows Duology",
								"https://www.goodreads.com/series/131836-six-of-crows",
							)}
							{LinkLi(
								"The Illuminae Files Trilogy and Prequel",
								"https://www.goodreads.com/series/116078-the-illuminae-files",
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
								"https://www.goodreads.com/book/show/1796941.I_Robot",
							)}
							{LinkLi(
								"The Martian",
								"https://www.goodreads.com/book/show/18007564-the-martian",
							)}
							{LinkLi(
								"The Last Hours Trilogy",
								"https://www.goodreads.com/series/104049-the-last-hours",
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
								"https://iconscout.com/icon/find-person-1896565",
							)}
							{LinkLi(
								"Tech Stack Icon",
								"https://iconscout.com/icons/code?price=free&styles[]=colored-outline",
							)}
							{LinkLi(
								"Projects Icon",
								"https://iconscout.com/icon/idea-design-2",
							)}
							{LinkLi(
								"Site Details Icon",
								"https://icons8.com/icon/68247/website",
							)}
							{LinkLi(
								"E-mail Icon",
								"https://870bdbfcf2.nxcli.net/home/mail-icon-white/",
							)}
							{LinkLi(
								"Github Icon",
								"https://www.flaticon.com/free-icon/github-logo_25231",
							)}
							{LinkLi(
								"Devpost Icon",
								"https://iconscout.com/icon/devpost",
							)}
							{LinkLi(
								"Linkedin Icon",
								"https://www.iconfinder.com/icons/771370/circle_linkedin_logo_media_network_social_share_icon",
							)}
							{LinkLi(
								"Flickr Icon",
								"https://www.flaticon.com/free-icon/flickr_179321",
							)}
							{LinkLi(
								"Potted Plant",
								"https://www.fotor.com/stickers/t_potted-plant-plum-blossom_8708f9",
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
								"react-sidePanel",
								"https://www.npmjs.com/package/react-sidePanel",
							)}
							{LinkLi(
								"react-tooltip",
								"https://www.npmjs.com/package/react-tooltip",
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

	const sidePanelStyle = {
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

	let index = boxThemes.findIndex((x) => x.title === boxTheme)
	let currentTheme = boxThemes[index]
	let currentIcon = currentTheme.image
	let currentTitle = currentTheme.title
	let currentContent = currentTheme.content

	const [showSidePanel, setSidePanel] = React.useState(false)

	function openSidePanel() {
		setSidePanel(true)
	}

	function closeSidePanel() {
		setSidePanel(false)
	}

	return (
		<>
			{/* <SidePanel
        isOpen={showSidePanel}
        onRequestClose={closeSidePanel}
        ariaHideApp={false}
        style={sidePanelStyle}
        contentLabel={`${currentTitle} SidePanel`}
      >
        <div className="sidePanel-header">
          <div className="sidePanel-header-title">
            <img src={currentIcon} alt={currentTitle}></img>
            {currentTitle}
          </div>
          <div
            className="close-sidePanel"
            role="button"
            tabIndex={0}
            onClick={closeSidePanel}
            onKeyDown={closeSidePanel}
          >
            x
          </div>
        </div>
        {currentContent}
      </SidePanel>
      */}

			<div
				role="button"
				tabIndex={0}
				className="boxcard"
				onClick={openSidePanel}
				onKeyDown={openSidePanel}
			>
				<img src={currentIcon} alt={currentTitle}></img>
				{currentTitle}
			</div>
		</>
	)
}
