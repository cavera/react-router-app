import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPost } from "./pages/BlogPage/BlogPost";
import { BlogPostEdit } from "./pages/BlogPage/BlogPostEdit";
import { ProfilePage } from "./pages/ProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { LogoutPage } from "./pages/LogoutPage/";
import { AuthProvider, AuthRoute } from "./services/Auth";

import "./App.css";

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
								element={
									<AuthRoute>
										<BlogPostEdit />
									</AuthRoute>
								}
							/>
						</Route>
						<Route
							path='/login'
							element={<LoginPage />}
						/>
						<Route
							path='/logout'
							element={
								<AuthRoute>
									<LogoutPage />
								</AuthRoute>
							}
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
