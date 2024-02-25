const axios = require('axios');
const { API_KEY }= require('./envConfig')

const getPopularity = async(req, res) => {

    try {
        const apiKEY = API_KEY;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKEY}`);
        const data = response.data.results.map(movie => {
            return {
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                popularity : movie.popularity
            };
        })
        return res.status(201).json({
            data: data,
            success: true,
            message: "succesfully retrieved the data for popular movies ",
            err: {}
        });
    } catch (error) {
       return res.status(500).json({
            data: {},
            success: false,
            message: "Error while fetching the data for popular movies",
            err: error
        });

    };
}
const getPopularitybyKeyword = async (req, res) => {
    
    try {
        const apiKEY = API_KEY;
        const keyword = req.query.keyword; 
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&&query=${keyword}`);
        const movies = response.data.results;
        const sortedDatabypopularity = movies.sort((a, b) => b.popularity - a.popularity)
        const data = sortedDatabypopularity.map(movie => {
            return {
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                popularity: movie.popularity
            };
        })
        return res.status(201).json({
            data: data,
            success: true,
            message: "succesfully retrieved the data for popular movies by  by keyword ",
            err: {}
        });
    } catch (error) {
        console.log(error);
       return res.status(500).json({
            data: {},
            success: false,
            message: "Error while fetching the data",
            err: error
        });

    };


}

const getReleasebykeyword = async(req, res) => {

    try {
        const apiKEY = API_KEY;
        const keyword = req.query.keyword; 
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&&query=${keyword}`);
        const movies = response.data.results;
        const sortedDatabyreleasedate = movies.sort((a, b) => {
            const dateA = new Date(a.release_date);
            const dateB = new Date(b.release_date);
            return (dateB - dateA)
        })
        const data = sortedDatabyreleasedate.map(movie => {
            return {
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                release: movie.release_date
            };
        })
        return res.status(201).json({
            data: data,
            success: true,
            message: "succesfully retrieved the data for  movies by release date by keyword ",
            err: {}
        });
    } catch (error) {
       return res.status(500).json({
            data: {},
            success: false,
            message: "Error while fetching the data for movie by release data by keyword",
            err: error
        });

    };
}

const getVote = async (req, res) => {
    
    try {
        const apiKEY = API_KEY;
        const keyword = req.query.keyword; 
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&&query=${keyword}`);
        const movies = response.data.results;
        const sortedDataByVote = movies.sort((a, b) => b.vote_count - a.vote_count)
        
        const data = sortedDataByVote.map(movie => {
            return {
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                release: movie.vote_count
            };
        })
        return res.status(201).json({
            data: data,
            success: true,
            message: "succesfully retrieved the data for  movies by vote by keyword ",
            err: {}
        });
    } catch (error) {
       return res.status(500).json({
            data: {},
            success: false,
            message: "Error while fetching the data for movies by vote by keyword",
            err: error
        });

    };
}

const getById = async (req, res) => {
    try {
        const apiKEY = API_KEY;
        const keyword = req.params['id']; 
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${keyword}?api_key=${apiKEY}`);
        const data = {
            id: response.data.id,
            title: response.data.title,
            poster_path: response.data.poster_path,
        };

        return res.status(201).json({
            data: data,
            success: true,
            message: "succesfully retrieved the data for  movies by vote by keyword ",
            err: {}
        });
    } catch (error) {
       return res.status(500).json({
            data: {},
            success: false,
            message: "Error while fetching the data for movies by vote by keyword",
            err: error
        });

    };



}


module.exports = { getPopularity,getPopularitybyKeyword ,getReleasebykeyword, getVote, getById };