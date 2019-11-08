export const addRecipe = (payload) => {
	return { type: 'ADD_RECIPE', payload };
};
export const deleteRecipe = (payload) => {
	return { type: 'DELETE_RECIPE', payload };
};

export const editRecipe = (payload) => {
	return { type: 'EDIT_RECIPE', payload };
};
