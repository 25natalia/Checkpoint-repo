import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Counter from './components/Component/Components';
import Text from './components/Text/Text';
import Input from './components/Component/Input';
import TaskList from './components/Component/Add';

function App() {
	return (
		<>
			<Counter />
			<Text />
			<Input />
			<TaskList />
		</>
	);
}

export default App;
