import { OutboundLink } from "gatsby-plugin-google-gtag"
import * as React from "react"
import { useContext } from "react"
import Switch from "react-switch"
import { SidePanelContext, SidePanelType } from "../context/SidePanelContext"
import PFP from "../images/pfp4.jpeg"
import PFPNotion from "../images/pfpNotion.png"

import "../styles/sidepanel.css"

interface CurrentSideQuestsProps {
	forHome?: boolean
}

const CurrentSideQuests: React.FC<CurrentSideQuestsProps> = ({
	forHome = true,
}) => {
	return (
		<>
			{!forHome && (
				<>
					<span className="list-indent">
						🧶 I'm crocheting bolero sleeves.
					</span>
					<span className="list-indent">
						🪡 I'm learning how to needle-felt by making a chicken.
					</span>
					<span className="list-indent">
						⛸️ I'm trying to do backwards crossovers and lunges
						while skating.
					</span>
					<span className="list-indent">
						🥑 I'm experimenting with toppings to add to avocado
						toast. Lately it's been a combination of olive oil,
						lemon juice, chili powder, and grated cheese.
					</span>
					<span className="list-indent">
						💻 I'm doing web development for{" "}
						<OutboundLink
							target="_blank"
							href="https://www.uwwistem.com/"
						>
							UW WiSTEM
						</OutboundLink>
						{" and "}
						<OutboundLink
							target="_blank"
							href="https://www.instagram.com/uw_ux/"
						>
							UW/UX
						</OutboundLink>
						.
					</span>
				</>
			)}
			<span className="list-indent">
				🧋 {!forHome ? "I'm building a" : "My latest code project is"} a
				boba discount tracker for Waterloo,{" "}
				<OutboundLink
					target="_blank"
					href="https://so-boba-after.web.app/"
					className="outboundLink"
				>
					...so, boba after?
				</OutboundLink>
			</span>
			<span className="list-indent">
				💸 I've recently taken an interest in event organizing,
				logistics and finances, and am the VP Finance for the{" "}
				<OutboundLink
					href="https://www.instagram.com/uwsesoc/"
					target="_blank"
					className="outboundLink"
				>
					Software Engineering Society
				</OutboundLink>{" "}
				at Waterloo this winter.
			</span>
			<span className="list-indent">
				🎓 Finally, I'm leading a wonderful team to build our university
				program cohort's class profile, which will be releasing in April
				2025.
			</span>
		</>
	)
}

const AboutMeSidePanel = () => {
	// Unchecked = Notion Avatar, Checked = Photo
	const [checked, setChecked] = React.useState(false)

	const handleChange = (nextChecked: boolean) => {
		setChecked(nextChecked)
	}

	return (
		<div className="sidePanel-content">
			<h2>About Me</h2>
			{checked ? (
				<img
					src={PFP}
					className="pfp"
				/>
			) : (
				<img
					src={PFPNotion}
					className="pfpNotion"
				/>
			)}
			<div id="pfpSwitcher">
				<div>Notion Avatar</div>
				<Switch
					onChange={handleChange}
					checked={checked}
					checkedIcon={false}
					uncheckedIcon={false}
					onColor="#C1783C"
					offColor="#000000"
				/>
				<div>A Real Photo</div>
			</div>
			<div className="sidePanel-content-divider" />
			<span>👋 Hi, I'm Hannah!</span>
			<span>
				I'm currently a 4th year Software Engineering student at the
				University of Waterloo.
			</span>
			<span>
				I like making long-lasting high-impact projects (both with code
				and without) and learning a bunch along the way.
			</span>
			<CurrentSideQuests forHome={true} />
			<span>
				When I don't have pressing deadlines, you can find me
				sidequesting. Most commonly, I'll be crocheting, bouldering,
				writing, or meandering around a city.
			</span>
			<span>
				Professionally, I'll be returning to Notion as a SWE later this
				year, where I formally interned. Previous to that, I also
				interned at Figma and Stripe (x2).
			</span>
		</div>
	)
}

const MyProjectsSidePanel = () => {
	return <div className="sidePanel-content">My Projects</div>
}

const MyWorkSidePanel = () => {
	return <div className="sidePanel-content">My Work</div>
}

const SideQuestsSidePanel = () => {
	return (
		<div className="sidePanel-content">
			<h2>Side Quests</h2>
			<span>
				My main quest tends to be either academics or work, and I define
				a side quest as "things I'm working on apart from my main
				quest".
			</span>
			<span>As of February 2025:</span>
			<CurrentSideQuests forHome={false} />
			<div className="sidePanel-content-divider" />
			{/* <span>
				My writing goes on my Substack, but I wanted to put a few of my
				favourite side-quest posts here too.
			</span> */}
			{/* <div className="substack-post-embed">
				<iframe
					className="substack-frame"
					src="https://musingfromhannah.substack.com/embed/p/crochet-1"
					sandbox="allow-scripts allow-same-origin allow-top-navigation allow-popups"
					allow="clipboard-read clipboard-write allow-top-navigation allow-scripts allow-same-origin allow-popups"
				/>
			</div> */}
		</div>
	)
}

export const SidePanel = React.forwardRef<HTMLDivElement>((props, ref) => {
	const { isOpen, handleSidePanelChange, panelID } =
		useContext(SidePanelContext)

	const choosePanelContent = (type: SidePanelType) => {
		switch (type) {
			case "about-me":
				return <AboutMeSidePanel />
			case "my-projects":
				return <MyProjectsSidePanel />
			case "my-work":
				return <MyWorkSidePanel />
			case "side-quests":
				return <SideQuestsSidePanel />
			default:
				return <div>Unknown Panel</div>
		}
	}

	const resetSidePanel = () => {
		handleSidePanelChange(panelID, "none")
	}

	return (
		<div
			ref={ref}
			className={`sidePanel ${
				isOpen ? "sidePanel-open" : "sidePanel-closed"
			}`}
		>
			<div className="sidePanel-header">
				<div
					className="close-sidePanel"
					role="button"
					tabIndex={0}
					onClick={resetSidePanel}
				/>
				{choosePanelContent(panelID)}
			</div>
		</div>
	)
})
