import React, { useState } from 'react';

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
	const [sorting, setSorting] = useState('input');

	let sortedItems;
	if (sorting === 'input') sortedItems = items;
	if (sorting === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
	if (sorting === 'packed') sortedItems = items.slice().sort((a, b) => a.packed - b.packed);

	return (
		<div className='list'>
			<ul>
				{sortedItems.map(item => (
					<Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
				))}
			</ul>

			<div className='actions'>
				<select value={sorting} onChange={e => setSorting(e.target.value)}>
					<option value='input'>Sort by input order</option>
					<option value='description'>Sort by description</option>
					<option value='packed'>Sort by packed status</option>
				</select>
				<button onClick={onClearList}>Clear list</button>
			</div>
		</div>
	);
};

const Item = ({ item, onDeleteItem, onToggleItem }) => {
	const stylePackedItem = {
		textDecoration: 'line-through',
	};

	return (
		<li>
			<input type='checkbox' value={item.packed} onChange={() => onToggleItem(item.id)} />
			<span style={item.packed ? stylePackedItem : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
};

export default PackingList;
