import * as React from "react"
import { useContext } from "react"
import { SidePanelContext, SidePanelType } from "../context/SidePanelContext"
import "../styles/sidepanel.css"

const AboutMeSidePanel = () => {
	return <div>About Me</div>
}

const MyProjectsSidePanel = () => {
	return <div>My Projects</div>
}

const MyWorkSidePanel = () => {
	return <div>My Work</div>
}

const SideQuestsSidePanel = () => {
	return <div>Side Quests</div>
}

export const SidePanel = () => {
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
					onKeyDown={resetSidePanel}
				>
					{choosePanelContent(panelID)}
				</div>
			</div>
		</div>
	)
}
