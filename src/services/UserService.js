import axios from "axios";


const api = axios.create({
  baseURL: "/api/user",
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
        const response = await api.post("/auth", email,password);

        if (response.data.access_token) {
            sessionStorage.setItem("authToken", response.data.access_token);
            sessionStorage.setItem("user", JSON.stringify(response.data.user));
        }
        
        return response.data;
    } catch (error) {
        console.error("Login Error:", error.response?.data || error);
        return error.response?.data || { success: false, error: "Unknown error" };
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