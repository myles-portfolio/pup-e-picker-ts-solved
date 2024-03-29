import { Dog, ActiveComponent } from "./types";

export const switchDogsShown = ({
	allDogs,
	favoriteDogs,
	notFavoriteDogs,
	activeComponent,
}: {
	allDogs: Dog[];
	favoriteDogs: Dog[];
	notFavoriteDogs: Dog[];
	activeComponent: ActiveComponent;
}): Dog[] => {
	switch (activeComponent) {
		case "favorite":
			return favoriteDogs;
		case "notFavorite":
			return notFavoriteDogs;
		default:
			return allDogs;
	}
};
