import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING } from "../actions";

const initialState = {
  results: [],
  loading: false,
  error: false,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        results: action.payload,
      };
    case GET_JOBS_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_JOBS_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};

export default jobReducer;
