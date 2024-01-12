import axios, { CreateAxiosDefaults } from 'axios';

const defaultConfig = {
    baseURL: 'https://5c4b2a47aa8ee500142b4887.mockapi.io/api/',
    timeout: 30 * 1000
}

export const api = axios.create(defaultConfig as CreateAxiosDefaults);
