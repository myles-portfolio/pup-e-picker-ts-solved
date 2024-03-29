import { Component } from "react";
import { ClassSection } from "./ClassSection";
import { ClassDogs } from "./ClassDogs";
import { ClassCreateDogForm } from "./ClassCreateDogForm";
import { Requests } from "../api";
import { Dog, ActiveComponent } from "../types";
import { switchDogsShown } from "../util";

type ClassAppState = {
	allDogs: Dog[];
	activeComponent: ActiveComponent;
	isLoading: boolean;
};
export class ClassApp extends Component {
	state: ClassAppState = {
		allDogs: [],
		activeComponent: "all",
		isLoading: false,
	};

	componentDidMount = () => {
		Requests.getAllDogs().then((res) => {
			return this.setState({ allDogs: res });
		});
	};

	render() {
		const { allDogs, isLoading, activeComponent } = this.state;

		const coolDogs = allDogs.filter((dog) => dog.isFavorite);
		const uncoolDogs = allDogs.filter((dog) => !dog.isFavorite);

		const refetch = () => {
			this.setState({ isLoading: true });
			Requests.getAllDogs()
				.then((res) => this.setState({ allDogs: res }))
				.finally(() => {
					this.setState({ isLoading: false });
				});
		};
		const deleteDog = (id: number) => {
			this.setState({ isLoading: true });
			Requests.deleteDog(id)
				.then(refetch)
				.finally(() => {
					this.setState({ isLoading: false });
				});
		};
		const postDog = (newDog: Omit<Dog, "id">) => {
			this.setState({ isLoading: true });
			return Requests.postDog(newDog)
				.then(refetch)
				.finally(() => {
					this.setState({ isLoading: false });
				});
		};
		const favoriteDog = (id: number) => {
			this.setState({ isLoading: true });
			Requests.updateDog(id, { isFavorite: true })
				.then(refetch)
				.finally(() => {
					this.setState({ isLoading: false });
				});
		};
		const unFavoriteDog = (id: number) => {
			this.setState({ isLoading: true });
			Requests.updateDog(id, { isFavorite: false })
				.then(refetch)
				.finally(() => {
					this.setState({ isLoading: false });
				});
		};

		const filteredDogs = switchDogsShown({
			allDogs: allDogs,
			favoriteDogs: coolDogs,
			notFavoriteDogs: uncoolDogs,
			activeComponent: activeComponent,
		});
		const shouldShowDogs = activeComponent !== "create";

		return (
			<div className="App" style={{ backgroundColor: "skyblue" }}>
				<header>
					<h1>pup-e-picker (Class)</h1>
				</header>
				<ClassSection
					coolDogs={coolDogs}
					uncoolDogs={uncoolDogs}
					setActiveComponent={(active: ActiveComponent) =>
						this.setState({
							activeComponent: active,
						})
					}
					activeComponent={activeComponent}
				>
					{!shouldShowDogs && (
						<ClassCreateDogForm isLoading={isLoading} postDog={postDog} />
					)}
					{shouldShowDogs && (
						<ClassDogs
							dogs={filteredDogs}
							deleteDog={deleteDog}
							favoriteDog={favoriteDog}
							unFavoriteDog={unFavoriteDog}
							isLoading={isLoading}
						/>
					)}
				</ClassSection>
			</div>
		);
	}
}
