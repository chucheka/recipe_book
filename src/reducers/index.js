// import uuid from 'uuid';

const initialState = {
	recipes: [
		{
			id: 1,
			name: 'Roasted Chicken',
			ingredients:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores pariatur ipsum iusto in quam minus molestiae voluptatem voluptates facere eveniet optio cumque saepe, aliquid eaque eligendi atque iste maxime?',
			direction:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cumque et corporis nobis dolorem porro, sunt laudantium quidem optio dolorum officia non quos reprehenderit repudiandae, animi consequatur explicabo obcaecati? Aliquam?'
		},
		{
			id: 2,
			name: 'Fried Rice',
			ingredients:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores pariatur ipsum iusto in quam minus molestiae voluptatem voluptates facere eveniet optio cumque saepe, aliquid eaque eligendi atque iste maxime?',
			direction:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cumque et corporis nobis dolorem porro, sunt laudantium quidem optio dolorum officia non quos reprehenderit repudiandae, animi consequatur explicabo obcaecati? Aliquam?'
		},
		{
			id: 3,
			name: 'African Salad',
			ingredients:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores pariatur ipsum iusto in quam minus molestiae voluptatem voluptates facere eveniet optio cumque saepe, aliquid eaque eligendi atque iste maxime?',
			direction:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cumque et corporis nobis dolorem porro, sunt laudantium quidem optio dolorum officia non quos reprehenderit repudiandae, animi consequatur explicabo obcaecati? Aliquam?'
		}
	]
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_RECIPE':
			return Object.assign({}, state, { recipes: state.recipes.concat(action.payload) });
		case 'DELETE_RECIPE':
			const { id } = action.payload;
			return Object.assign({}, state, {
				recipes: state.recipes.filter((recipe) => {
					return recipe.id !== id;
				})
			});
		case 'EDIT_RECIPE':
			return {
				...state,
				recipes: state.recipes.map(
					(recipe) => (recipe.id === action.payload.id ? (recipe = action.payload) : recipe)
				)
			};
		default:
			return state;
	}
};

export default rootReducer;
