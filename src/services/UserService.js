import axios from "axios";


const BASE_URL = "http://localhost:8080/auth";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export const register = async (user) => {
  try {
    const response = await api.post("/register", user);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const login = async (email, password) => {
    try {
        const response = await api.post("/login", {email, password}, { withCredentials: true });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const verifyOtp = async (email, otp) => {
    const user = {
        email,
        otp,
    };
    try {
        const response = await api.post("/verify-otp", user);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}


export const resendOtp = async (email) => {
    try {
        const response = await api.post("/request-new-otp", { email });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const requestResetPassword = async (email) => {
    try {
        const response = await api.post("/request-password-reset", { email });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};


export const resetPassword = async (token, newPassword) => {
    try {
        const response = await api.post("/reset-password", { token, newPassword });
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}