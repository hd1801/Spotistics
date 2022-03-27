import {useReducer,useContext,useEffect} from "react"
import { initialState,fetchReducer } from "../Utils/FetchReducer";
import { TokenContext } from "../App";

const useFetch= (URL)=>{
    const accessToken =  useContext(TokenContext);
    const [data,dispatch] = useReducer(fetchReducer,initialState);
    
    
    useEffect(() => {
        fetch(URL,{method:"GET",
        headers: {Authorization: 'Bearer ' + accessToken}
        })
        .then(response => response.json())
        .then(data => {
            dispatch({type: "FETCH_SUCCESS", payload: data.items });
        })
        .catch(err => {dispatch({type: "FETCH_ERROR"});
        }
        )},[accessToken,URL]);  
    return data;
}
export default useFetch;
