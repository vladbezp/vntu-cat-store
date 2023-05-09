import {Cat} from "./catsSlice";

export const fetchCats = async (): Promise<Cat[]> => {
    try {
        const response = await fetch(`https://64539421c18adbbdfea13e44.mockapi.io/cat/cats`);
        console.log('response:', response);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching cats:', error);
        throw error;
    }
};
