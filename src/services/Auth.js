import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { userList, roleTypes } from "../data/users";

// const adminList = ["MaesterRoot", "editor", "Lucy"];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
	const navigate = useNavigate();
	const [user, setUser] = React.useState(null);
	const location = useLocation();

	const login = ({ username }) => {
		const from = location.state?.from?.pathname || "/profile";

		const userRole = () => {
			return userList.find((userItem) => userItem.name === username)?.role || roleTypes.USER;
		};
		setUser({ username, userRole });
		navigate(from, { replace: true });
	};
	const logout = () => {
		setUser(null);
		navigate("/");
	};

	const auth = {
		user,
		login,
		logout,
	};

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
	const auth = React.useContext(AuthContext);
	return auth;
}

function AuthRoute(props) {
	const auth = useAuth();
	const location = useLocation();
	if (!auth.user) {
		return (
			<Navigate
				to='/login'
				state={{ from: location }}
			/>
		);
	}
	return props.children;
}

export { AuthProvider, useAuth, AuthRoute };
