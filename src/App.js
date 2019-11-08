import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import Form from './components/Form';
import EditRecipe from './components/EditRecipe';

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<div className="Container">
					<div className="Main">
						<Header />
						<Route exact path="/" component={RecipeList} />
						<Route exact path="/AddRecipe" component={Form} />
						<Route exact path="/edit/:id" component={EditRecipe} />
					</div>
				</div>
				<Footer />
			</Router>
		</React.Fragment>
	);
};
export default App;
