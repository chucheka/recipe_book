import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addRecipe } from '../action/index';

function mapDispatchToProps(dispatch) {
	return { addRecipe: (recipe) => dispatch(addRecipe(recipe)) };
}

const ConnectedForm = ({ addRecipe, history }) => {
	const [ name, setName ] = useState('');
	const [ ingredients, setIngredients ] = useState('');
	const [ direction, setDirection ] = useState('');

	const handleChange = (e) => {
		switch (e.target.name) {
			case 'name':
				return setName(e.target.value);
			case 'ingredients':
				return setIngredients(e.target.value);
			case 'direction':
				return setDirection(e.target.value);
			default:
				return null;
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const recipe = {
			id: uuid(),
			name,
			ingredients,
			direction
		};
		addRecipe(recipe);
		history.push('/');
		// setName('');
		// setIngredients('');
		// setDirection('');
	};
	return (
		<div className="form-container">
			<h3>Add Recipe</h3>
			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<div className="form-control">
					<label htmlFor="">Recipe Name</label>
					<input type="text" name="name" id="" onChange={(e) => handleChange(e)} value={name} />
				</div>
				<div className="form-control">
					<label htmlFor="">Ingredients</label>
					<textarea
						name="ingredients"
						id=""
						cols="30"
						rows="6"
						onChange={(e) => handleChange(e)}
						value={ingredients}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="">Direction</label>
					<textarea
						name="direction"
						id=""
						cols="30"
						rows="6"
						onChange={(e) => handleChange(e)}
						value={direction}
					/>
				</div>
				<button className="btn"> Add </button>
			</form>
		</div>
	);
};
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
