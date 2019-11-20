import axios from "axios";

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		headers: {
			Authorization: token,
		},
		baseURL: "https://dev-libs-bw.herokuapp.com",
	});
};

export default axiosWithAuth;



// function axiosLogin() {
//     const clientId = 'your client id';
//     const clientSecret = 'your client secret';

//     return axios.create({
//         baseURL: 'your base backend url',
//         headers: {
//             'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     })
// }