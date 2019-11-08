import React, { useState } from 'react';
import { connect } from 'react-redux';
// import uuid from 'uuid
import { editRecipe } from '../action/index';

function mapStateToProps(state) {
	return { recipes: state.recipes };
}
function mapDispatchToProps(dispatch) {
	return { editRecipe: (recipe) => dispatch(editRecipe(recipe)) };
}

const ConnectedEdit = ({ editRecipe, recipes, match, history }) => {
	const { id } = match.params;
	const oldRecipe = recipes.find((recipe) => recipe.id === parseInt(id, 10));

	const [ name, setName ] = useState(oldRecipe.name);
	const [ ingredients, setIngredients ] = useState(oldRecipe.ingredients);
	const [ direction, setDirection ] = useState(oldRecipe.direction);

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
			id: parseInt(match.params.id),
			name,
			ingredients,
			direction
		};

		editRecipe(recipe);

		history.push('/');
	};
	return (
		<div className="form-container">
			<h3>Edit Recipe</h3>
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
				<button className="btn"> Update </button>
			</form>
		</div>
	);
};
const EditRecipe = connect(mapStateToProps, mapDispatchToProps)(ConnectedEdit);
export default EditRecipe;
