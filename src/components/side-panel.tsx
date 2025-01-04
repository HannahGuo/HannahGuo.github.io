import * as React from "react"

interface SidePanelProps {
	title: string
	body: JSX.Element
}

export const SidePanel = ({ title, body }: SidePanelProps) => {
	const [isOpen, setIsOpen] = React.useState(true)

	const closeSidePanel = () => {
		setIsOpen(false)
	}

	if (!isOpen) {
		return null
	}

	return (
		<div className="sidePanel">
			<div className="sidePanel-header">
				<div className="sidePanel-header-title">{title}</div>
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
			{body}
		</div>
	)
}
