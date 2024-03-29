import { Link } from "react-router-dom";

import { Dog, FunctionalSectionProps } from "../types";
import { ActiveComponent } from "../types";

export const FunctionalSection = ({
	coolDogs,
	uncoolDogs,
	setActiveComponent,
	activeComponent,
	children,
}: FunctionalSectionProps) => {
	const toggleActiveComponent = (target: ActiveComponent) => {
		setActiveComponent((lastVal) => (lastVal === target ? "all" : target));
	};

	const getActiveStyle = (newActiveComponent: ActiveComponent) => {
		return activeComponent === newActiveComponent
			? `selector active`
			: `selector`;
	};

	const handleClick = (target: ActiveComponent) => {
		return () => {
			toggleActiveComponent(target);
		};
	};

	const getDogCountText = (dogs: Dog[], label: string) => {
		return `${label} ( ${dogs.length} )`;
	};

	return (
		<section id="main-section">
			<div className="container-header">
				<div className="container-label">Dogs: </div>
				<Link to={"/class"} className="btn">
					Change to Class
				</Link>
				<div className="selectors">
					<div
						className={getActiveStyle("favorite")}
						onClick={handleClick("favorite")}
					>
						{getDogCountText(coolDogs, "favorite")}
					</div>

					<div
						className={getActiveStyle("notFavorite")}
						onClick={handleClick("notFavorite")}
					>
						{getDogCountText(uncoolDogs, "notFavorite")}
					</div>
					<div
						className={getActiveStyle("create")}
						onClick={handleClick("create")}
					>
						create dog
					</div>
				</div>
			</div>
			<div className="content-container">{children}</div>
		</section>
	);
};
