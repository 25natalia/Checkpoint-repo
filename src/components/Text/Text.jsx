import { useState } from 'react';

const Handler = () => {
	const [show, setShow] = useState(true);

	const button = () => {
		setShow(!show);
	};

	return (
		<>
			{show === true && <h1>Apareci</h1>}
			<button onClick={button}>Hide/Show</button>
		</>
	);
};

export default Handler;
