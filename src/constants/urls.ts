const baseMovieURL = 'https://api.themoviedb.org/3';
const basePosterURL = 'https://image.tmdb.org/t/p/w500'
const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTk1NDg3MzdlZjUyNjY2NWFkNTc0NTdiMTc3N2NmMSIsInN1YiI6IjY0NjI2YmQ5OGM0NGI5MDBmYzkxZTZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0WKyojoDVknGeS2_q2Qy4mZuhQkP6FW5Az0BDTSyD3Y';
const urls = {
    movies: {
        movies: '/discover/movie',
        overview:'/movie/',
        video:'/videos',
        search :'/search/keyword?query='
    },
    users: {
        me: '/account/19487661'
    }
}
export
{
    baseMovieURL,
    basePosterURL,
    token,
    urls
}