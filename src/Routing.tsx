import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from './components/Users/Users';
import { Home } from './components/Home/Home';
import { AddNewUser } from './components/Users/AddNewUser/AddNewUser';
import { Page404 } from './components/Page404/Page404';
import App from './App';

export const Routing = () => {
	return (
		<Routes>
			<Route path={'/'} element={<App />}>
				<Route path={'*'} element={<Page404 />} />
				<Route path={'contact'} element={<div>contact</div>} />
				<Route path="/users" element={<Users />}>
					<Route path=":userId" element={<div>details</div>} />
					<Route path="new" element={<AddNewUser />} />
				</Route>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
};
