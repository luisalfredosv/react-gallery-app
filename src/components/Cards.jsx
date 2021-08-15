import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
	const API_URL = `https://api.unsplash.com/photos/?client_id=${"Web2Un85HjQdJJplhQS_1B1Ol1vzLg4aO98EJVag1TA"}`;

	const [images, setImages] = useState([]);

	const peticion = async () => {
		const res = await fetch(API_URL);
		const data = await res.json();
		setImages(data);
	};

	useEffect(() => {
		peticion();
	}, []);

	return (
		<>
			<form>
				<label htmlFor='buscador'>
					Buscar :
					<input type='text' id='buscador' name='inputText' />
				</label>
			</form>

			{images.map((img) => {
				return <Card key={img.id} img={img.urls.regular}></Card>;
			})}
		</>
	);
};

export default Cards;
