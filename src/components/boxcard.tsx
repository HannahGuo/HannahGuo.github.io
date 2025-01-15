import * as React from "react"
import "../styles/boxcard.css"

import { SidePanelContext, SidePanelType } from "../context/SidePanelContext"

type BoxCardProps = {
	id: SidePanelType
}

type BoxTheme = {
	title: string
	icon: string
	id: SidePanelType
}

export const BoxCard: React.FC<BoxCardProps> = ({ id }) => {
	const boxThemes: BoxTheme[] = [
		{
			title: "About Me",
			icon: "../images/find-person.png",
			id: "about-me",
		},
		{
			title: "My Projects",
			icon: "../images/idea-design.png",
			id: "my-projects",
		},
		{
			title: "My Work",
			icon: "../images/code-document.png",
			id: "my-work",
		},
		{
			title: "Side Quests",
			icon: "../images/sideQuests.png",
			id: "side-quests",
		},
	]

	let index = boxThemes.findIndex((x) => x.id === id)

	let currentTheme = boxThemes[index]

	let { title: currentTitle, icon: currentIcon } = currentTheme

	const { handleSidePanelChange, panelID } =
		React.useContext(SidePanelContext)

	return (
		<div
			role="button"
			tabIndex={0}
			className="boxcard"
			onClick={() => handleSidePanelChange(panelID, id)}
		>
			<img
				src={currentIcon}
				alt={currentTitle}
			/>
			{currentTitle}
		</div>
	)
}
