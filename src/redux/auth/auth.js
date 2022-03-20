import axios from "axios";
const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const login = (user) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  const executeLogin = async () => {
    try {
      const res = await axios.post("/auth/login", {
        email: user.email,
        password: user.password
      });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: USER_LOGIN_FAILED, payload: "Ooops! Something bad happened!" });
    }
  }
  executeLogin();
}

// export const followUser = (id) => (dispatch) => {
//   dispatch
// }

const initialScale = {
  loading: true,
  data: {},
  error: null,
}

const loginReducer = (state = initialScale, action) => {
  switch(action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, ...state }
    case USER_LOGIN_SUCCESS:
      return { loading: false, data: action.payload }
    case USER_LOGIN_FAILED:
      return { loading: false, data: action.payload }
    case 'FOLLOW_USER':
      return { ...state, data: {...state.data, following: [...state.data.following, action.payload]}}
    case 'UNFOLLOW_USER':
      return { ...state, data: { ...state.data, following: [...state.data.following.filter(user_id => user_id !== action.payload)]} }

    default:
      return state;
  }
}

export default loginReducer;
