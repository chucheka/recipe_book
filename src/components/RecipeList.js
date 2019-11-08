import React from 'react';
import Recipe from '../components/Recipe';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return { recipes: state.recipes };
};
const ConnectedRecipeList = ({ recipes }) => {
	return (
		<React.Fragment>
			<h2 style={{ margin: '20px' }}>Recipes</h2>
			<div className="list-container">
				<ul>
					{recipes.map((recipe) => {
						return <Recipe recipe={recipe} key={recipe.id} />;
					})}
				</ul>
			</div>
		</React.Fragment>
	);
};

const RecipeList = connect(mapStateToProps)(ConnectedRecipeList);
export default RecipeList;
