import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useBlogData } from "./useBlogData";

const BlogPage = () => {
	const { data: blogList } = useBlogData();
	return (
		<div className='content-wrapper'>
			<h1>Blog Page</h1>

			<Outlet />
			{/* contenido que se carga con la ruta hija */}

			<ul>
				{blogList.map((post) => (
					<BlogLink
						post={post}
						key={post.slug}
					/>
				))}
			</ul>
		</div>
	);
};

const BlogLink = ({ post }) => (
	<li>
		<Link to={post.slug}>{post.title}</Link>
	</li>
);

export { BlogPage };
