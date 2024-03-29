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

{
	/* Class App Types */
}
export type ClassAppState = {
	allDogs: Dog[];
	activeComponent: ActiveComponent;
	isLoading: boolean;
};

export type ClassSectionProps = {
	coolDogs: Dog[];
	uncoolDogs: Dog[];
	setActiveComponent: (input: ActiveComponent) => void;
	activeComponent: ActiveComponent;
	children: ReactNode;
};

export type ClassDogsProps = {
	dogs: Dog[];
	deleteDog: (input: number) => void;
	favoriteDog: (input: number) => void;
	unFavoriteDog: (input: number) => void;
	isLoading: boolean;
};

export type ClassCreateDogFormProps = {
	isLoading: boolean;
	postDog: (input: Omit<Dog, "id">) => Promise<unknown>;
};

export type ClassCreateDogFormState = {
	newDog: Omit<Dog, "id">;
};
