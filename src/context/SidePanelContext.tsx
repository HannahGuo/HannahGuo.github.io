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
	panelID: SidePanelType
}>({
	isOpen: false,
	handleSidePanelChange: () => {},
	panelID: "none",
})
