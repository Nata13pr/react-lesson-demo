import axios from "axios";
import {baseUrl} from "../constants/urls.ts";

export const axiosInstance=axios.create({
    baseURL:baseUrl,
    headers: {'Content-Type': 'application/json'},
})