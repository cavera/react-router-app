import React from "react";
import { useAuth } from "../../services/Auth";

const ProfilePage = () => {
	const auth = useAuth();

	return (
		<div className='content-wrapper'>
			<h1>Profile</h1>
			<p>Welcome, {auth.user.username}</p>
		</div>
	);
};

export { ProfilePage };
