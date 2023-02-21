export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToFavouriteAction = (company) => ({
  type: ADD_TO_FAVOURITE,
  payload: company,
});

export const removeFromFavouriteAction = (company) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: company,
});

export const getJobsAction = (query) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_JOBS_LOADING,
      });
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: GET_JOBS_LOADING,
          });
        }, 500);
      } else {
        alert("Error fetching results");
        console.log("error");
        dispatch({
          type: GET_JOBS_ERROR,
        });
        dispatch({
          type: GET_JOBS_LOADING,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_JOBS_ERROR,
      });
      dispatch({
        type: GET_JOBS_LOADING,
      });
    }
  };
};
