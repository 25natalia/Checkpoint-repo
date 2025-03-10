import './App.css';
import Card from './components/Card/Card';
import { data } from './data/Card';

function App() {
	return (
		<>
			<div>
				{data.map((card) => {
					return <Card key={card.id} title={card.title} />;
				})}
			</div>
		</>
	);
}

export default App;
