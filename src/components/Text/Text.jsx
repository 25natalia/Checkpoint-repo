import { useState } from 'react';

const Text = () => {
	const [show, setShow] = useState(true);

	const handlerShow = () => {
		setShow(!show);
	};

	return (
		<>
			{show === true && <h1>UseState</h1>}
			<button onClick={handlerShow}>Show/Hide</button>
		</>
	);
};

export default Text;
