import Axios from "axios";
import { serverPath } from "../path";

export class baseService {
	get = (url) => {
		return Axios({
			url: `${serverPath}${url}`,
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage?.getItem("token")}`,
			},
		});
	};

	post = (url, model) => {
		return Axios({
			url: `${serverPath}${url}`,
			method: "POST",
			data: model,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage?.getItem("token")}`,
			},
		});
	};

	delete = (url) => {
		return Axios({
			url: `${serverPath}${url}`,
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
	};
}
