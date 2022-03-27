export const initialState=  {
  loading: true,
  items: [],
  error: null
}
export const fetchReducer = (currentState , action)=>{
    switch(action.type){
      case "FETCH_SUCCESS": return { loading: false , items: action.payload, error:""}
      case "FETCH_ERROR": return { loading: false,items: [] ,error:"OOPS!! , Something Went Wrong."}
      default: return currentState
    }
  }