import { Component } from "react";
import { Link } from "react-router-dom";

import { ClassSectionProps, ActiveComponent } from "../types";

export class ClassSection extends Component<ClassSectionProps> {
	render() {
		const {
			coolDogs,
			uncoolDogs,
			setActiveComponent,
			activeComponent,
			children,
		} = this.props;

		const toggleActiveComponent = (target: ActiveComponent) => {
			if (target === activeComponent) {
				setActiveComponent("all");
			} else {
				setActiveComponent(target);
			}
		};
		const getActiveStyle = (newActiveComponent: ActiveComponent) => {
			return activeComponent === newActiveComponent
				? `selector active`
				: `selector`;
		};

		return (
			<section id="main-section">
				<div className="container-header">
					<div className="container-label">Dogs: </div>

					<Link to={"/functional"} className="btn">
						Change to Functional
					</Link>

					<div className="selectors">
						<div
							className={getActiveStyle("favorite")}
							onClick={() => {
								toggleActiveComponent("favorite");
							}}
						>
							favorite ( {coolDogs.length} )
						</div>
						<div
							className={getActiveStyle("notFavorite")}
							onClick={() => {
								toggleActiveComponent("notFavorite");
							}}
						>
							notFavorite ( {uncoolDogs.length} )
						</div>
						<div
							className={getActiveStyle("create")}
							onClick={() => {
								toggleActiveComponent("create");
							}}
						>
							create dog
						</div>
					</div>
				</div>
				<div className="content-container">{children}</div>
			</section>
		);
	}
}
