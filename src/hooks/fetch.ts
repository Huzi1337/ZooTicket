import { useEffect, useReducer } from "react";

type ErrorMsg = {
  status: number;
  message: string;
};

type State = {
  isLoading: boolean;
  error: null | string;
  data: null | unknown;
};
type Action = {
  type: string;
  payload: State;
};

export const useFetch = (url: string) => {
  const initialState = {
    isLoading: true,
    error: null,
    data: null,
  };

  const [state, dispatch] = useReducer((state: State, action: Action | any) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, isLoading: true, status: "fetching" };
      case "FETCHED":
        return { ...initialState, isLoading: false, data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, isLoading: false, error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url || !url.trim()) return;

    const fetchData = async () => {
      dispatch({ type: "FETCHING" });

      try {
        console.log("Fetch hook");
        const response = await fetch(url);
        const data = await response.json();

        if (cancelRequest) return;
        dispatch({ type: "FETCHED", payload: data });
      } catch (error) {
        if (cancelRequest) return;
        dispatch({
          type: "FETCH_ERROR",
          payload: (error as ErrorMsg).message,
        });
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, []);

  return state;
};

export default useFetch;
