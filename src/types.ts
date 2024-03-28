export type Dog = {
	id: number;
	name: string;
	description: string;
	image: string;
	isFavorite: boolean;
};

export type ActiveComponent = "favorite" | "notFavorite" | "create" | "all";
