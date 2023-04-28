import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Menu = () => {
	const auth = useAuth();

	return (
		<nav key='menunav'>
			<ul className='header-menu'>
				{routes.map((route) => {
					if (!!route.private && !auth.user) return null;
					if (!!auth.user && !!route.publicOnly) return null;
					return (
						<li key={`${route.to} item`}>
							<NavLink
								className={({ isActive }) => (!!isActive ? "activeLink" : "")}
								to={route.to}>
								{route.text}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

const routes = [
	{
		to: "/",
		text: "Home",
		private: false,
	},
	{
		to: "/blog",
		text: "Blog",
		private: false,
	},
	{
		to: "/profile",
		text: "Profile",
		private: true,
	},
	{
		to: "/login",
		text: "Login",
		private: false,
		publicOnly: true,
	},
	{
		to: "/logout",
		text: "Logout",
		private: true,
	},
];

export { Menu };
