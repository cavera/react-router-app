import React from "react";
import { useAuth } from "../../services/Auth";
import { Navigate } from "react-router-dom";

function LoginPage() {
	const auth = useAuth();
	const [username, setUsername] = React.useState("");

	const login = (e) => {
		e.preventDefault();
		auth.login({ username });
	};

	if (auth.user) {
		return <Navigate to='/profile' />;
	}

	return (
		<div className='content-wrapper'>
			<h1>LoginPage</h1>
			<form onSubmit={login}>
				<label htmlFor=''>Escribe tu nombre de usuario.</label>
				<input
					type='text'
					name='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button type='submit'>Entrar</button>
			</form>
		</div>
	);
}

export { LoginPage };
