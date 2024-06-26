import { useContext, useState } from "react";
import {TodoContext} from "../contexts/TodoContextProvider";

function TodoForm() {
    const {addTodo} = useContext(TodoContext)
    const [todo, setTodo] = useState({
        id: Date.now(),
        title:"",
        completed:false,

    })

    const handleAddTodo = (e)=>{
        e.preventDefault();
        addTodo(todo)
        setTodo({
            id: Date.now(),
            title:"",
            complete:false,
        })
        // console.log(todosArr)
    }


    return (
        <form onSubmit={handleAddTodo}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {todo.title}
                onChange={(e) => setTodo({...todo,title:e.target.value})}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

