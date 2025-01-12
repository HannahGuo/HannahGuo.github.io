import React from "react"

export type SidePanelType =
	| "about-me"
	| "my-projects"
	| "my-work"
	| "side-quests"
	| "none"

export const SidePanelContext = React.createContext<{
	isOpen: boolean
	handleSidePanelChange: (
		lastState: SidePanelType,
		nextState: SidePanelType,
	) => void
	content: SidePanelType
}>({
	isOpen: false,
	handleSidePanelChange: () => {},
	content: "none",
})
