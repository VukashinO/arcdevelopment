import React from 'react';
import Header from './Header';
import { ThemeProvider } from '@material-ui/core';
import theme from './Theme';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/services' component={() => <div>services</div>} />
					<Route exact path='/customsoftware' component={() => <div>customsoftware</div>} />
					<Route exact path='/mobileapps' component={() => <div>mobileapps</div>} />
					<Route exact path='/websites' component={() => <div>websites</div>} />
					<Route exact path='/revolution' component={() => <div>revolution</div>} />
					<Route exact path='/about' component={() => <div>about</div>} />
					<Route exact path='/contact' component={() => <div>contact</div>} />
					<Route exact path='/estimate' component={() => <div>estimate</div>} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
