import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'pages';
import Photos from '../containers/PhotosContainer';
import Posts from '../containers/PostTabContainer';
import Users from '../containers/UsersContainer';
import User from '../containers/UserContainer';
import Menu from 'components/Menu';

class App extends Component {
	render() {
		return (
			<div className="col-xs-12 col-sm-6 col-sm-offset-3">
				<Menu/>
				<Route exact path="/" component={Home}/>
				<Route path="/posts" component={Posts}/>
				<Route path="/Photos" component={Photos}/>
				<Switch>
					<Route path="/Users/:id" component={User}/>
					<Route path="/Users" component={Users}/>
				</Switch>
			</div>
		)
	}
}

export default App;