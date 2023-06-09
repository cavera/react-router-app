import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogData } from "../../services/useBlogData";
import { useAuth } from "../../services/Auth";

const BlogPost = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const { data: blogList } = useBlogData();

	const auth = useAuth();

	const blogPost = blogList.find((post) => post.slug === slug);

	// const canDelete = !!auth.user?.isAdmin || blogPost.author === auth.user?.username;
	const canDelete = auth.user?.userRole().delete;
	const canEdit = auth.user?.userRole().edit || blogPost.author === auth.user?.username;

	const returnToBlog = () => {
		navigate(`/blog`);
		// navigate(-1)
	};

	const editPost = (e) => {
		e.preventDefault();
		navigate(`/blog/${slug}/edit`);
	};
	const deletePost = (e) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<article>
			<button onClick={returnToBlog}>{`<`}Volver al blog</button>
			<h2>{blogPost.title}</h2>
			<p>
				Por: <em>{blogPost.author}</em>
			</p>
			<p>{blogPost.content}</p>

			{canDelete && <button onClick={deletePost}>Eliminar</button>}
			{canEdit && <button onClick={editPost}>Editar</button>}
		</article>
	);
};

export { BlogPost };
