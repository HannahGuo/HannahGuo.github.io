import * as React from "react"
import { SidePanelContext, SidePanelType } from "../context/SidePanelContext"
import "../styles/layout.css"
import Bookshelf from "./bookshelf"
import Floor from "./floor"
import FloorCase from "./floorcase"
import Plant from "./plant"
import Poster from "./poster"
import { SidePanel } from "./sidepanel"

export const Layout = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const [content, setContent] = React.useState<SidePanelType>("none")

	const handleSidePanelChange = (
		lastState: SidePanelType,
		nextState: SidePanelType,
	) => {
		if (lastState === "none") {
			setIsOpen(true)
			setContent(nextState)
		}

		if (lastState === nextState) {
			setIsOpen(false)
			setTimeout(() => {
				setContent("none")
			}, 500)
		}

		if (nextState === "none") {
			setIsOpen(false)
		}

		if (lastState !== nextState) {
			setContent(nextState)
		}
	}

	return (
		<div id="holder">
			<SidePanelContext.Provider
				value={{ isOpen, handleSidePanelChange, panelID: content }}
			>
				<SidePanel />
				<div id="room">
					<div id="right-room">
						<div id="right-room-shelf-col-left">
							<Bookshelf
								shelfWidth="12em"
								books={[
									{
										width: "1.8em",
										height: "6.4em",
										backgroundColor: "#6F7F8C",
									},
									{
										width: "1.8em",
										height: "5em",
										backgroundColor: "#9F9069",
									},
								]}
								boxCardPos={1}
								boxId={"about-me"}
							/>
							<Bookshelf
								shelfWidth="18em"
								books={[
									{
										width: "1.8em",
										height: "5.7em",
										backgroundColor: "#C3231F",
									},
									{
										width: "1.8em",
										height: "7.4em",
										backgroundColor: "#1E716C",
									},
									{
										width: "1.8em",
										height: "4.2em",
										backgroundColor: "#8D556E",
									},
									{
										width: "1.8em",
										height: "5.2em",
										backgroundColor: "#EA6B1F",
									},
								]}
								boxCardPos={2}
								boxId={"my-work"}
							/>
						</div>
						<div id="right-room-shelf-col-right">
							<Bookshelf
								shelfWidth="18em"
								books={[
									{
										width: "1.8em",
										height: "5.5em",
										backgroundColor: "#F26154",
									},
									{
										width: "1.8em",
										height: "4em",
										backgroundColor: "#C2B69C",
									},
									{
										width: "1.8em",
										height: "6em",
										backgroundColor: "#60A6D7",
									},
									{
										width: "1.8em",
										height: "6.8em",
										backgroundColor: "#9C6FB2",
									},
								]}
								boxCardPos={2}
								boxId={"my-projects"}
							/>
							<Bookshelf
								shelfWidth="15em"
								books={[
									{
										width: "1.8em",
										height: "6.7em",
										backgroundColor: "#B75932",
									},
									{
										width: "1.8em",
										height: "4.2em",
										backgroundColor: "#7897C1",
									},
									{
										width: "1.8em",
										height: "5em",
										backgroundColor: "#939667",
									},
								]}
								boxCardPos={2}
								boxId={"side-quests"}
							/>
						</div>
					</div>
					<div id="left-room">
						<Poster />
						<FloorCase />
					</div>
				</div>
				<Plant />
				<Floor />
			</SidePanelContext.Provider>
		</div>
	)
}
