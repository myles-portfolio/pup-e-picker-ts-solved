import { DogCard } from "../Shared/DogCard";
import { Component } from "react";

import { ClassDogsProps } from "../types";

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
