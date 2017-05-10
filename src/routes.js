import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import IssuesIndex from './components/issues_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import Splash from './components/splash';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Splash} />
		<Route path='/issues' component={IssuesIndex} />
		<Route path='posts/new' component={PostsNew} />
		<Route path='posts/:id' component={PostsShow} />
	</Route>
);
