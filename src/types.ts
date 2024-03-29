import { Dispatch, SetStateAction, ReactNode } from "react";

{
	/* General Types */
}
export type Dog = {
	id: number;
	name: string;
	description: string;
	image: string;
	isFavorite: boolean;
};

export type ActiveComponent = "favorite" | "notFavorite" | "create" | "all";

{
	/* Functional App Types */
}
export type FunctionalSectionProps = {
	coolDogs: Dog[];
	uncoolDogs: Dog[];
	setActiveComponent: Dispatch<SetStateAction<ActiveComponent>>;
	activeComponent: ActiveComponent;
	children: ReactNode;
};
