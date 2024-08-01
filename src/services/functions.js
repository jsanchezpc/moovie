const API_KEY = import.meta.env.API_KEY; 
const BASE_URL = 'https://api.themoviedb.org/3';

// Función para hacer una llamada a la API
export async function fetchFromTMDb(endpoint) {
    const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES&page=1`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al hacer la solicitud a TMDb:', error);
    }
}

export async function getMultiSearch(search) {  
    const endpoint = '/search/multi';
    const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}&query=${search}&language=es-ES&page=1`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al hacer la solicitud a TMDb:', error);
    }
}   
export async function getTrending() {
    const endpoint = '/trending/all/';
    const movies = await fetchFromTMDb(endpoint);
    return movies;
} 

// Función para obtener las películas de estreno
export async function getUpcomingMovies() {
    const endpoint = '/movie/upcoming';
    const data = await fetchFromTMDb(endpoint);
    return data.results;
}


export async function getDiscoverMovies() {
    const endpoint = '/discover/movie';
    const movies = await fetchFromTMDb(endpoint);
    return movies;
} 