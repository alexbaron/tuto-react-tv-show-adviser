// reference : https://developer.themoviedb.org/reference/intro/getting-started

import axios from 'axios';
import { BASE_URL, API_KEY_PARAM } from '../config';

export class TVShowApi {
    static async fetchPopulars() {
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            });
        return response.results;
    }

    static async fetchRecommendationsById(tvShowId) {
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            });
        return response.results;
    }

    static async fetchTvShowByTitle(title) {
        const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            });
        return response.results;
    }
}