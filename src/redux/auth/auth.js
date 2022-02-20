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
      console.log(res);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
    } catch (e) {
      console.log(e)
      dispatch({ type: USER_LOGIN_FAILED, payload: "Ooops! Something bad happened!" });
    }
  }
  executeLogin();
}

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

    default:
      return state;
  }
}

export default loginReducer;
