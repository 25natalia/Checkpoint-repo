import { useState } from 'react';

const Number = () => {
	const [Number, setNumber] = useState(0);

	const sumar = () => {
		setNumber(Number + 1);
	};

	const restar = () => {
		setNumber(Number - 1);
	};

	return (
		<>
			<h1>{Number}</h1>
			<button onClick={sumar}>Sumar</button>
			<button onClick={restar}>Restar</button>
		</>
	);
};

export default Number;
