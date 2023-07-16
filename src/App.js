import Logo from './components/logo';
import Form from './components/form';
import PackingList from './components/packingList';
import Stats from './components/stats';
import { useState } from 'react';

function App() {
	const [items, setItems] = useState([]);

	const addItemsHandler = item => {
		setItems(items => [...items, item]);
	};

	const deleteItemHandler = id => {
		setItems(items => items.filter(item => item.id !== id));
	};

	const toggleItemHandler = id => {
		setItems(items => items.map(item => (item.id === id ? { ...item, packed: !item.packed } : item)));
	};

	const clearListHandler = () => {
		const confirmed = window.confirm('Are you sure to want to delete all items?');
		if (confirmed) setItems([]);
	};

	return (
		<div className='app'>
			<Logo />
			<Form onAddItems={addItemsHandler} />
			<PackingList
				items={items}
				onDeleteItem={deleteItemHandler}
				onToggleItem={toggleItemHandler}
				onClearList={clearListHandler}
			/>
			<Stats items={items} />
		</div>
	);
}

export default App;
