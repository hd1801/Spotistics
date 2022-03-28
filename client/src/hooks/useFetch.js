import {useReducer,useContext,useEffect} from "react"
import { initialState,fetchReducer } from "../Utils/FetchReducer";
import { TokenContext } from "../App";

const useFetch= (URL)=>{
    const accessToken =  useContext(TokenContext);
    const [results,dispatch] = useReducer(fetchReducer,initialState);
    
    
    useEffect(() => {
        fetch(URL,{method:"GET",
        headers: {Authorization: 'Bearer ' + accessToken}
        })
        .then(response => response.json())
        .then(data => {
            
            dispatch({type: "FETCH_SUCCESS", payload: ("items" in data? data.items: data) });
        })
        .catch(err => {dispatch({type: "FETCH_ERROR"});
        }
        )},[accessToken,URL]);  
    return results;
}
export default useFetch;
