import axios from "axios";

export const Api = axios.create({
    baseURL : "https://api.magicthegathering.io/v1/cards?colors=R"
});