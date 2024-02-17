import { USER } from "../Actions/Types/userType";

const initialState = {
	userId: "",
	role: "",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case USER.SIGN_IN:
			state.userId = action.payload.userId;
			state.role = action.payload.role;
			localStorage.setItem("id_user", action.payload.userId);
			localStorage.setItem("role", action.payload.role);
			localStorage.setItem("token", action.payload.token);
			return { ...state };
		case USER.SIGN_OUT:
			state = {};
			localStorage.removeItem("id_user");
			localStorage.removeItem("token");
			localStorage.removeItem("role");
			return { ...state };
		default:
			return state;
	}
};

export default reducer;
