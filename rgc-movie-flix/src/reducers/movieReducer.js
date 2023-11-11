const initialState = {
    latestmovies: [],
    searchedmovies:[],
    page:Number,
    limit:Number,
    moviecount:Number
}

const movieReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch(action.type)
    {
        case "FETCH_LATEST_MOVIES":
            return {...state, 
                latestmovies: action.payload.latestmovies,
                searchedmovies:[],
                page: action.payload.page, 
                limit: action.payload.limit, 
                moviecount:action.payload.moviecount}
        case "SEARCH_MOVIES":
            return {...state,
                latestmovies:[], 
                searchedmovies: action.payload.searchedmovies,
                page: action.payload.page, 
                limit: action.payload.limit, 
                moviecount:action.payload.moviecount}
        default:
            return {...state}
    }
}

export default movieReducer;