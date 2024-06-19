import { useCallback, useEffect, useState, useRef } from "react";

// console.log(window)

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  let copyPassword = useRef(null)
  // console.log(copyPassword);
  function copyPasswordToClipBoard(){
      copyPassword.current.select()
      window.navigator.clipboard.writeText(password)
  }
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "0123456789"
      // console.log(str)
    }
    if(charactersAllowed){
      str += "!@#$%^&*(){}:";
    }

    for(let i=0;i<length;i++){
      let char= Math.floor(Math.random() * str.length);
      // console.log(char)
      pass += str.charAt(char)
    }
    // console.log(pass)
    setPassword(pass)
  },[length,numberAllowed,charactersAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charactersAllowed])

  return (

    <div className="bg-gray-700 w-3/5 p-8 m-auto mt-10 rounded-lg">

        <div className="flex ">
            <input type="text"
            value={password}
            readOnly
            className="w-9/12 h-10 rounded-l-lg px-4 text-black"
            placeholder="Password"
            ref={copyPassword} />
            {/* {console.log(password)} */}

            <button onClick={copyPasswordToClipBoard} className="bg-blue-700 px-8 rounded-r-lg">
              Copy
            </button>
        </div>

        <div className="flex mt-8 gap-2 align-center text-orange-500">
            <input type="range" 
            value={length}
            onChange={(e)=>setLength(e.target.value)}
            min="8"
            max="100"/>
            <label>
            Length:{length}
            </label>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }} />
            <label>
              Number
            </label>
            <input type="checkbox"
            defaultChecked={charactersAllowed}
            onChange={()=>{
              setCharacterAllowed((prev)=>!prev)
            }} />
            <label>
              Characters
            </label>
            
        </div>
       
    </div>
  )
}

export default App
