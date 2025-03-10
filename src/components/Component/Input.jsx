import { useState } from 'react';

const Text = () => {
	const [text, setText] = useState('');
	const handleInputChange = (event) => {
		setText(event.target.value);
	};
	return (
		<>
			<input type='text' placeholder='Write here' onChange={handleInputChange} />
			<p>Escribiendo: {text}</p>
		</>
	);
};
export default Text;
