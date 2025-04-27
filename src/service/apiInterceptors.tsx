import axios from "axios";
import { BASE_URL } from "./config";
import { tokenStorage } from "@/store/store";
import { logout } from "./authService";

export const refresh_tokens = async () => {
    try {
        const refreshToken = await tokenStorage.getItem("refresh_token");
        if (!refreshToken) throw new Error("No refresh token available");

        const response = await axios.post(`${BASE_URL}/auth/rfresh-token`, {
            refresh_token: refreshToken,
        });

        const new_access_token = response.data.access_token;
        const new_refresh_token = response.data.refresh_token;

        await tokenStorage.setItem("access_token", new_access_token);
        await tokenStorage.setItem("refresh_token", new_refresh_token);
        return new_access_token;
    } catch (error) {
        console.log("REFRESH TOKEN ERROR", error);
        await tokenStorage.removeItem("access_token");
        await tokenStorage.removeItem("refresh_token");
        logout();
    }
};

export const appAxios = axios.create({
    baseURL: BASE_URL,
});

appAxios.interceptors.request.use(async (config) => {
    const accessToken = await tokenStorage.getItem("access_token");
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

appAxios.interceptors.response.use(
    response => response,
    async error => {
        if (error.response && error.response.status === 401) {
            try {
                const newAccessToken = await refresh_tokens();
                if (newAccessToken) {
                    error.config.headers.Authorization = `Bearer ${newAccessToken}`;
                    return axios(error.config);
                }
            } catch (error) {
                console.log("Error refreshing token");
            }
        }
        return Promise.reject(error);
    }
);
