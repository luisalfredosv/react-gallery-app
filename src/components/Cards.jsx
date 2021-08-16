import React, { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import Loading from "./Loading";

const Cards = () => {
	const [images, setImages] = useState([]);
	const [input, setInput] = useState("");

	const [loading, setLoading] = useState(false);

	const peticion = useCallback(async () => {
		const key = `client_id=Web2Un85HjQdJJplhQS_1B1Ol1vzLg4aO98EJVag1TA`;

		let route = `https://api.unsplash.com/photos/?${key}`;

		if (input !== "") {
			route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
				input
			)}&${key}`;
		}

		setLoading(true);

		const res = await fetch(route);
		const data = await res.json();

		if (data.results) {
			setImages(data.results);
		} else {
			setImages(data);
		}

		setLoading(false);
	}, [input]);

	useEffect(() => {
		peticion();
	}, [input, peticion]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const text = e.target[0].value;
		setInput(text);
	};

	return (
		<>
			<div className='text-center'>
				<form onSubmit={handleSubmit}>
					<div class='input-group mb-3'>
						<input
							type='text'
							id='buscador'
							class='form-control'
							placeholder='Search Image'
							aria-label='Search Image'
						/>
						<button
							class='btn btn-outline-secondary'
							type='submit'
							id='button-addon2'
						>
							<span className='material-icons'>search</span>
						</button>
					</div>
				</form>
				<hr />

				{loading && <Loading />}

				<div className='row'>
					{images.map((img) => {
						return (
							<div key={img.id} className='col'>
								<Card img={img.urls.regular}></Card>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Cards;
