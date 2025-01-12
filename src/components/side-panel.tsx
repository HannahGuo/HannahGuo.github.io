import * as React from "react"
import { useContext } from "react"
import { SidePanelContext, SidePanelType } from "../context/SidePanelContext"
import "../styles/sidepanel.css"
export const SidePanel = ({ type }: { type: SidePanelType }) => {
	const { isOpen, handleSidePanelChange, content } =
		useContext(SidePanelContext)

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
					onClick={() => handleSidePanelChange(content, "none")}
					onKeyDown={() => handleSidePanelChange(content, "none")}
				></div>
			</div>
		</div>
	)
}
