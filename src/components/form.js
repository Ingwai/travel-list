import React, { useState } from 'react';

const Form = ({ onAddItems }) => {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	const submitHandler = e => {
		e.preventDefault();
		if (!description) return;
		const newItem = { id: Date.now(), description: description, quantity: quantity, packed: false };

		onAddItems(newItem);
		setQuantity(1);
		setDescription('');
	};

	const descriptionHandler = e => {
		setDescription(e.target.value);
	};

	const quantityHandler = e => {
		setQuantity(Number(e.target.value));
	};

	return (
		<form className='add-form' onSubmit={submitHandler}>
			<h3>What do you need for your 😍 trip?</h3>
			<select onChange={quantityHandler} value={quantity}>
				{Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
					<option key={num} value={num}>
						{num}
					</option>
				))}
			</select>
			<input type='text' placeholder='Item...' onChange={descriptionHandler} value={description} />
			<button>Add</button>
		</form>
	);
};

export default Form;
