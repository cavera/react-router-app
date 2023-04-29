const roleTypes = {
	ADMIN: { edit: true, delete: true },
	EDITOR: { edit: true, delete: false },
	USER: { edit: false, delete: false },
	AUTHOR: { edit: true, delete: false },
};

const userList = [
	{
		name: "cavera",
		role: roleTypes.ADMIN,
	},
	{
		name: "MasterRoot",
		role: roleTypes.ADMIN,
	},
	{
		name: "editor",
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

export { userList, roleTypes };
