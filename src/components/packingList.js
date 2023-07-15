import React from 'react';

const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 12, packed: true },
	{ id: 3, description: 'Charger', quantity: 1, packed: false },
];

const PackingList = () => {
	return (
		<div className='list'>
			<ul>
				{initialItems.map(item => (
					<Item key={item.id} {...item} />
				))}
			</ul>
		</div>
	);
};

const Item = props => {
	const stylePackedItem = {
		textDecoration: 'line-through',
	};

	return (
		<li>
			<input type='checkbox' />
			<span style={props.packed ? stylePackedItem : {}}>
				{props.quantity} {props.description}
			</span>
			<button>❌</button>
		</li>
	);
};

export default PackingList;
