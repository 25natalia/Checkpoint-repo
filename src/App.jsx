import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { data } from './data/Card';
import { info } from './data/Header';
import { footers } from './data/Footer';

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

			<div>
				{footers.map((card) => {
					return <Footer key={card.id} age={card.age} />;
				})}
			</div>
		</>
	);
}

export default App;
