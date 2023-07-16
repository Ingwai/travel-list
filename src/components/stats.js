import React from 'react';

const Stats = ({ items }) => {
	if (!items.length)
		return (
			<footer className='stats'>
				<em>Start adding some items to your packing list 🚀</em>
			</footer>
		);
	const numItem = items.length;
	// const numPackedItem = items.reduce((acc, curr) => (curr.packed === true ? acc + 1 : acc), 0);
	const numPackedItem = items.filter(item => item.packed).length;
	const procPacked = (numPackedItem / numItem) * 100;

	return (
		<footer className='stats'>
			<em>
				{procPacked === 100
					? 'You got everything! Ready to go ✈️'
					: `	👜 You have ${numItem} items on your list, and you already packed ${numPackedItem} (
				${numItem ? procPacked.toFixed(0) : ''}
				%)`}
			</em>
		</footer>
	);
};

export default Stats;
