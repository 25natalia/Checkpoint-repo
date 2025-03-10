import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import { data } from './data/Card';
import { info } from './data/Header';

function App() {
	return (
		<>
			<div>
				{data.map((card) => {
					return <Card key={card.id} title={card.title} />;
				})}
			</div>

			<div>
				{info.map((button) => {
					return <Header key={button.id} name={button.name} />;
				})}
			</div>
		</>
	);
}

export default App;
