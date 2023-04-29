import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../services/Auth";
import { useBlogData } from "../../services/useBlogData";

const BlogPostEdit = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const { data: blogList, updatePosts } = useBlogData();

	const auth = useAuth();

	const blogPost = blogList.find((post) => post.slug === slug);
	const [thisPost, setThisPost] = useState(blogPost);

	const canEdit = auth.user?.userRole().edit || blogPost.author === auth.user?.username;

	const returnToBlog = () => navigate(`/blog/${slug}`);

	const changeTitle = (e) => {
		e.preventDefault();
		setThisPost({ ...thisPost, title: e.target.value });
	};

	const changeContent = (e) => {
		e.preventDefault();
		setThisPost({ ...thisPost, content: e.target.value });
	};

	const updateThisPost = (e) => {
		e.preventDefault();
		const postIndex = blogList.findIndex((post) => post.id === thisPost.id);

		console.log("postIndex", postIndex);
		blogList[postIndex] = thisPost;

		updatePosts(blogList);
		returnToBlog();
	};

	return (
		<>
			<form
				className='BlogPost-form'
				onSubmit={updateThisPost}>
				<p>
					Editando: <em>{auth.user?.username}</em>
				</p>
				<label>Título del post:</label>
				<input
					type='text'
					name='title'
					onChange={changeTitle}
					value={thisPost.title}
				/>
				<label>Contenido</label>
				<textarea
					name='content'
					id='content'
					rows='5'
					value={thisPost.content}
					onChange={changeContent}
					className='BlogPost-textarea'
				/>

				<button onClick={returnToBlog}>Cancelar</button>
				{!!canEdit && <button type='submit'>Guardar</button>}
			</form>
		</>
	);
};

export { BlogPostEdit };
