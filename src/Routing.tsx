import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from 'components/Users/Users';
import { Home } from 'components/Home/Home';
import { AddNewUser } from 'components/Users/AddNewUser/AddNewUser';
import { Page404 } from 'components/Page404/Page404';
import App from './App';
import { UserDetails } from 'components/Users/UserDetails/UserDetails';
import { Contact } from 'components/Contact/Contact';

export const Routing = () => {
	return (
		<Routes>
			<Route path={'/'} element={<App />}>
				<Route path="*" element={<Page404 />} />
				<Route path="contact" element={<Contact />} />
				<Route path="users" element={<Users />}>
					<Route path="new" element={<AddNewUser />} />
				</Route>
				<Route path="users/:userId" element={<UserDetails />} />
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
};
