import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteRecipe } from '../action';

const mapDispatchToProps = (dispatch) => {
	return { deleteRecipe: (recipe) => dispatch(deleteRecipe(recipe)) };
};
const ConnectedRecipe = ({ recipe, deleteRecipe }) => {
	const [ isOpen, setOpen ] = useState(false);
	const display = isOpen ? 'block' : 'none';

	return (
		<li>
			<div className="recipeTitle">
				<h3 className="title">{recipe.name}</h3>
				<span className="rectangle" onClick={() => setOpen(!isOpen)}>
					&#x25BC;{' '}
				</span>
			</div>
			<div className="panel" style={{ display: `${display}` }}>
				<div>
					<h3>Ingredients:</h3>
					<p>{recipe.ingredients}</p>
				</div>
				<div>
					<h3>Direction:</h3>
					<p>{recipe.direction}</p>
				</div>
				<div className="button-group">
					<span className="delete" onClick={() => deleteRecipe(recipe)}>
						&times;
					</span>
					<Link to={`/edit/${recipe.id}`}>
						<button className="btn">Edit</button>
					</Link>
				</div>
			</div>
		</li>
	);
};
const Recipe = connect(null, mapDispatchToProps)(ConnectedRecipe);
export default Recipe;
