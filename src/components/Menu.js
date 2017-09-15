import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<ul className="nav nav-tabs" role="tablist">
			<li><NavLink activeClassName="active" to="/" >Home</NavLink></li>
			<li><NavLink activeClassName="active" to="/posts" >Posts</NavLink></li>
			<li><NavLink activeClassName="active" to="/photos" >Photos</NavLink></li>
			<li><NavLink activeClassName="active" to="/users" >Users</NavLink></li>
		</ul>
	)
}

export default Menu;