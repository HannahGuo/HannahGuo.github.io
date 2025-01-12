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
			icon: "",
			id: "about-me",
		},
		{
			title: "My Projects",
			icon: "",
			id: "my-projects",
		},
		{
			title: "Side Quests",
			icon: "",
			id: "side-quests",
		},
	]

	let index = boxThemes.findIndex((x) => x.id === id)

	let currentTheme = boxThemes[index]

	if (currentTheme === undefined) {
		return <div>Theme not found</div>
	}

	let { title: currentTitle, icon: currentIcon } = currentTheme

	const { handleSidePanelChange, content } =
		React.useContext(SidePanelContext)

	return (
		<div
			role="button"
			tabIndex={0}
			className="boxcard"
			onClick={() => handleSidePanelChange(content, "about-me")}
			onKeyDown={() => handleSidePanelChange(content, "about-me")}
		>
			<img
				src={currentIcon}
				alt={currentTitle}
			></img>
			{currentTitle}
		</div>
	)
}
