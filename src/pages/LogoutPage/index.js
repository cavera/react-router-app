import React from "react";
import { useAuth } from "../../services/Auth";

function LogoutPage() {
	const auth = useAuth();

	const logout = (e) => {
		e.preventDefault();
		auth.logout();
	};

	return (
		<div className='content-wrapper'>
			<h1>LogoutPage</h1>
			<form onSubmit={logout}>
				<label htmlFor=''>Seguro que deseas salir?</label>

				<button type='submit'>Salir</button>
			</form>
		</div>
	);
}

export { LogoutPage };
