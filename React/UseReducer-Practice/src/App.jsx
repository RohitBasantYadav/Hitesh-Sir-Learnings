import { useEffect } from "react"
import { useReducer } from "react"
import { useState } from "react"

function App() {
//  const [display,setDisplay] = useState({})

//  const calReducer = (state,action)=>{
//   switch (action.type) {
//     case "Loading":return {...state,loading:true,};
//     case "Success":return {...state,loading:false,error:false,data:action.payload};
//     case "Error" : return {...state,loading:false,error:true}
  
//     default: throw Error("Invalid Action Type");
      
//   }
//  }

//  useEffect(()=>{
//   dispatch({type:"Loading"})
//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res)=>res.json())
//   .then((res)=>dispatch({type:"Success",payload:res}))
//   .catch((err)=>dispatch({type:"Error"}))
//  },[])
 
//  const [state,dispatch] = useReducer(calReducer,{loading:false,data:[],error:false})

const [display,setDisplay] = useState({})

function reducerFunc(state,action){
    switch (action.type) {
      case "Name": return {...state,name:action.payload};
      case "Age": return {...state,age:action.payload};
      case "Married": return {...state,isMarried:action.payload}
      case "Submit": return {name:"",age:"",isMarried:false};    
      default:
        break;
    }
}

 const [state,dispatch] = useReducer(reducerFunc,{name:"",age:"",isMarried:false})


 function handleSubmit(e){
  e.preventDefault();
  console.log(state)
  setDisplay(state)
  dispatch({type:"Submit"})
}

  return (
    <>
      <h1>useReducer Class</h1>
      <form onSubmit={handleSubmit}>
      <input onChange={(e)=>dispatch({type:"Name",payload:e.target.value})} value={state.name} type="text" placeholder="Name"/>
      <input onChange={(e)=>dispatch({type:"Age", payload:e.target.value})} value={state.age} type="text" placeholder="Age"/>
      <label>isMarried
      <input onChange={(e)=>dispatch({type:"Married",payload:!state.isMarried})} checked={state.isMarried} type="checkbox"/>
      </label>
      <input type="submit" value="Submit" />
      </form>
      {JSON.stringify(display)}
      {/* <h2>Name:{display.name}</h2>
      <h2>Age:{display.age}</h2>
      <h2>Married:{display.isMarried?"Yes":"No"}</h2> */}

      {/* {state.loading && <h1>Loading</h1>}
      {!state.loading && !state.error && state.data.map((el)=><li key={el.id}>{el.title}</li>)}
      {state.error && <h1>There is Error</h1>} */}

    </>
  )
}

export default App
