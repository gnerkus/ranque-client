import {LoginInput} from "../contracts/auth.ts";
import {axiosInstance} from "./axiosInstance.ts";

export const login = async (requestBody: LoginInput) => {
    const response = await axiosInstance.post("api/auth/login", requestBody, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.status !== 200) {
        throw new Error("Network response was not ok")
    }

    return response.data;
}

export const register = async (requestBody: LoginInput) => {
    const response = await axiosInstance.post("api/auth", requestBody, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.status !== 200) {
        throw new Error("Network response was not ok")
    }

    return response.data;
}

export const fetchOrgs = async () => {
    const response = await axiosInstance.get("api/orgs", {
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.status !== 200) {
        throw new Error("Network response was not ok")
    }

    return response.data;
}
