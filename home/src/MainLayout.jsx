import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'remixicon/fonts/remixicon.css';
import './index.scss';

/* We are able to import these using absolute paths because we have added this repo as a remote to itself */
import Header from 'home/Header';
import Footer from 'home/Footer';

/* import components needed from other MFEs */
import PDPContent from 'pdp/PDPContent';
import HomeContent from 'home/HomeContent';
import CartContent from 'cart/CartContent';

/* This repo acts as the main application that ties together other MFEs */
/* So we define the Routes here */

export default function MainLayout() {
	return (
		<Router>
			<div className='max-w-6xl mx-auto text-3xl'>
				<Header />
				<div className='my-10'>
					<Switch>
						<Route exact path='/' component={HomeContent} />
						<Route path='/product/:id' component={PDPContent} />
						<Route path='/cart' component={CartContent} />
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}
