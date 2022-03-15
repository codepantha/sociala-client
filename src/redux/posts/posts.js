import axios from "axios";

const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_FAILED = 'GET_POSTS_FAILED';
const GET_PROFILE_POSTS_REQUEST = 'GET_PROFILE_POSTS_REQUEST';
const GET_PROFILE_POSTS_SUCCESS = 'GET_PROFILE_POSTS_SUCCESS'
const GET_PROFILE_POSTS_FAILED = 'GET_PROFILE_POSTS_FAILED'

const getMostRecent = async (data) => {
  return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

export const getLoggedInUserPosts = (userLoggedIn) => (dispatch) => {
  dispatch({ type: GET_POSTS_REQUEST })

  const fetchResults = async () => {
    try {
      const res = await axios.get(`posts/timeline/${userLoggedIn._id}`);
      const data = await getMostRecent(res.data)
      dispatch({ type: GET_POSTS_SUCCESS, payload: data })
    } catch (err) {
      dispatch({ type: GET_POSTS_FAILED, payload: 'something bad happened.' })
    }
  }
  fetchResults();
}

export const getProfilePosts = (username) => (dispatch) => {
  dispatch({ type: GET_PROFILE_POSTS_REQUEST })

  const fetchResults = async () => {
    try {
      const res = await axios.get(`/posts/${username}/all`)
      const data = await getMostRecent(res.data)
      dispatch({ type: GET_PROFILE_POSTS_SUCCESS, payload: data })
    } catch (err) {
      dispatch({ type: GET_PROFILE_POSTS_FAILED, payload: res.data })
    }
  }
  fetchResults();
}

const initialState = {
  loading: false,
  posts: [],
  error: null
}
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { ...initialState, loading: true }
    case GET_PROFILE_POSTS_REQUEST:
      return { ...initialState, loading: true }
    case GET_POSTS_SUCCESS:
      return { ...initialState, loading: false, posts: action.payload }
    case GET_PROFILE_POSTS_SUCCESS:
      return { ...initialState, loading: false, posts: action.payload }
    case GET_POSTS_FAILED:
      return { loading: false, posts: [], error: action.payload }
    case GET_PROFILE_POSTS_FAILED:
      return { loading: false, posts: [], error: action.payload }

    default:
      return state
  }
}

export default postsReducer;