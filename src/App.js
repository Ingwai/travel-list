import Logo from './components/logo';
import Form from './components/form';
import PackingList from './components/packingList';
import Stats from './components/stats';

function App() {
	return (
		<div className='app'>
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}

export default App;
