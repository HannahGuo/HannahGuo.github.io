import * as React from "react"
import { useContext } from "react"
import { SidePanelContext, SidePanelType } from "../context/SidePanelContext"
import "../styles/sidepanel.css"

const AboutMeSidePanel = () => {
	return (
		<div className="sidePanel-content">
			<h2>About Me</h2>
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
	return <div className="sidePanel-content">Side Quests</div>
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
