import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { Menu } from "./Menu";
import { BlogPost } from "./BlogPost";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { AuthProvider, AuthRoute } from "./auth";
import { BlogPostEdit } from "./BlogPostEdit";

function App() {
	return (
		<>
			<HashRouter>
				<AuthProvider>
					<Menu />
					<Routes>
						<Route
							path='/'
							element={<HomePage />}
						/>
						<Route
							path='/blog'
							element={<BlogPage />}>
							<Route
								path=':slug'
								element={<BlogPost />}
							/>
							<Route
								path=':slug/edit'
								element={<BlogPostEdit />}
							/>
						</Route>
						<Route
							path='/login'
							element={<LoginPage />}
						/>
						<Route
							path='/logout'
							element={<LogoutPage />}
						/>
						<Route
							path='/profile'
							element={
								<AuthRoute>
									<ProfilePage />
								</AuthRoute>
							}
						/>
						<Route
							path='*'
							element={<p>Not found</p>}
						/>
					</Routes>
				</AuthProvider>
			</HashRouter>
		</>
	);
}

export { App };
