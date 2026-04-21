import { createContext, useContext, useReducer, useEffect } from "react";
import MovieReducer from "../reducer/Appreducer";
import axios from "axios";
import { getToken, getDataset } from "https://t4e-testserver.onrender.com/api";

const initialState = {
  orders: [],
  orderid: [],
  loading: true,
};

export const AppContext = createContext();

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenRes = await getToken(
          "E0423023", 
          "581442", 
          "set A", 
        );
        const order = await getDataset(tokenRes.token, tokenRes.dataUrl);

        dispatch({ type: "SET_DATA", payload: order });
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export const useApp = () => useContext(AppContext);
