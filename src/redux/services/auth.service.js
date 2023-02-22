import message from "../reducers/message"
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = async (username, email, password, role, position, number, phone) => {
  console.log(username, email, password, role, position, number, phone)
  const response = await axios.post(API_URL + "signup", {
        username,
        email,
        password,
        role,
        position,
        number,
        phone
    });
    console.log('message', message);
    return response.data;
};

const login = async (email, password) => {
  const response = await axios
        .post(API_URL + "signin", {
            email,
            password
        });
    // if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log('user', localStorage.getItem("user").username);
    return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};