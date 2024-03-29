import { useEffect, useState } from "react";

import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogs } from "./FunctionalDogs";
import { FunctionalSection } from "./FunctionalSection";

import { Requests } from "../api";
import { Dog, ActiveComponent } from "../types";
import { switchDogsShown } from "../util";

export function FunctionalApp() {
	const [activeComponent, setActiveComponent] =
		useState<ActiveComponent>("all");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [allDogs, setAllDogs] = useState<Dog[]>([]);

	const coolDogs = allDogs.filter((dog) => dog.isFavorite);
	const uncoolDogs = allDogs.filter((dog) => !dog.isFavorite);

	const refetch = () => {
		setIsLoading(true);
		Requests.getAllDogs()
			.then(setAllDogs)
			.finally(() => {
				setIsLoading(false);
			});
	};
	const deleteDog = (id: number) => {
		setIsLoading(true);
		Requests.deleteDog(id)
			.then(refetch)
			.finally(() => {
				setIsLoading(false);
			});
	};
	const postDog = (newDog: Omit<Dog, "id">) => {
		setIsLoading(true);
		return Requests.postDog(newDog)
			.then(refetch)
			.finally(() => {
				setIsLoading(false);
			});
	};
	const favoriteDog = (id: number) => {
		setIsLoading(true);
		Requests.updateDog(id, { isFavorite: true })
			.then(refetch)
			.finally(() => {
				setIsLoading(false);
			});
	};
	const unFavoriteDog = (id: number) => {
		setIsLoading(true);
		Requests.updateDog(id, { isFavorite: false })
			.then(refetch)
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(() => {
		refetch();
	}, []);

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
				<h1>pup-e-picker (Functional)</h1>
			</header>
			<FunctionalSection
				coolDogs={coolDogs}
				uncoolDogs={uncoolDogs}
				setActiveComponent={setActiveComponent}
				activeComponent={activeComponent}
			>
				{!shouldShowDogs && (
					<FunctionalCreateDogForm isLoading={isLoading} postDog={postDog} />
				)}
				{shouldShowDogs && (
					<FunctionalDogs
						dogs={filteredDogs}
						deleteDog={deleteDog}
						favoriteDog={favoriteDog}
						unFavoriteDog={unFavoriteDog}
						isLoading={isLoading}
					/>
				)}
			</FunctionalSection>
		</div>
	);
}
