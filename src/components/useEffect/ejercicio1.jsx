import { useState, useEffect } from 'react';

function DataFetchingComponent() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []); // Fetch only once when the component mounts

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{data.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default DataFetchingComponent