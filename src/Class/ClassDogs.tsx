import { Component } from "react";

import { Dog } from "../types";
import { DogCard } from "../Shared/DogCard";

type ClassDogsProps = {
	dogs: Dog[];
	deleteDog: (input: number) => void;
	favoriteDog: (input: number) => void;
	unFavoriteDog: (input: number) => void;
	isLoading: boolean;
};

export class ClassDogs extends Component<ClassDogsProps> {
	render() {
		const { dogs, deleteDog, favoriteDog, unFavoriteDog, isLoading } =
			this.props;

		return (
			<>
				{dogs.map((dog) => {
					return (
						<DogCard
							dog={{
								id: dog.id,
								image: dog.image,
								description: dog.description,
								isFavorite: dog.isFavorite,
								name: dog.name,
							}}
							key={dog.id}
							onTrashIconClick={() => {
								deleteDog(dog.id);
							}}
							onHeartClick={() => {
								unFavoriteDog(dog.id);
							}}
							onEmptyHeartClick={() => {
								favoriteDog(dog.id);
							}}
							isLoading={isLoading}
						/>
					);
				})}
			</>
		);
	}
}
