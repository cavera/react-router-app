import React, { useEffect } from "react";
import { blogdata } from "../data/blogdata";

function useBlogData() {
	const [data, setData] = React.useState(blogdata);
	const { blogList } = data;
	const initialData = blogdata;
	const BLOG_LIST = "blog_listv1";

	useEffect(() => {
		try {
			const storageBlogList = localStorage.getItem(BLOG_LIST);
			let parsedList = JSON.parse(storageBlogList) || initialData;
			if (!storageBlogList) {
				localStorage.setItem(BLOG_LIST, JSON.stringify(initialData));
			} else {
				parsedList = JSON.parse(storageBlogList);
			}
			setData(parsedList);
		} catch (error) {
			console.log(error);
		}
	}, [blogList]);

	const newPost = (post) => {
		const updatedBlogList = { ...blogList, post };
		updatePosts(updatedBlogList);
	};

	const updatePosts = (list) => {
		console.log("updatePosts", list);
		localStorage.setItem(BLOG_LIST, JSON.stringify(list));
		console.log("update posts: data:", data);
		setData(list);
	};
	const resetPosts = () => {
		localStorage.setItem(BLOG_LIST, JSON.stringify(initialData));
	};
	// resetPosts();
	return { data, newPost, updatePosts };
}

export { useBlogData };
