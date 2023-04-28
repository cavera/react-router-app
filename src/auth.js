import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const roleTypes = {
	ADMIN: { edit: true, delete: true },
	EDITOR: { edit: true, delete: false },
	USER: { edit: false, delete: false },
	AUTHOR: { edit: true, delete: false },
};

// const adminList = ["Leonardo", "Loco", "Lucy"];
const userList = [
	{
		name: "Leonardo",
		role: roleTypes.ADMIN,
	},
	{
		name: "Loco",
		role: roleTypes.EDITOR,
	},
	{
		name: "Lucy",
		role: roleTypes.USER,
	},
	{
		name: "Dylan",
		role: roleTypes.AUTHOR,
	},
];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
	const navigate = useNavigate();
	const [user, setUser] = React.useState(null);

	const login = ({ username }) => {
		// const isAdmin = adminList.find((admin) => admin === username);

		const role = () => userList.find((userItem) => userItem.name === username).role || roleTypes.USER;
		console.log("role:", role());

		// setUser({ username, isAdmin });
		setUser({ username, role });
		navigate("/profile");
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
	if (!auth.user) {
		return <Navigate to='/login' />;
	}
	return props.children;
}

export { AuthProvider, useAuth, AuthRoute };
