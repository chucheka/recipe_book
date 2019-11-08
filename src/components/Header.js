import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
	textDecoration: 'none'
};
const Header = () => {
	return (
		<nav className="navbar">
			<div className="branding">Recipe Book</div>
			<ul>
				<Link to="/" style={linkStyle}>
					<li className="nav-link">Home</li>
				</Link>
				<Link to="/AddRecipe" style={linkStyle}>
					<li className="nav-link">Add Recipe</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Header;
