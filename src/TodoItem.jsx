function TodoItem({todo, onChange, onDelete}) {
    return (
        <div className="todoo">
            <label>
                <div>
                <input type="checkbox" className="inputt" checked={todo.isCompleted} onChange={(e)=>{
                 onChange({
                    ...todo,
                    isCompleted: e.target.checked
                 });
                }}/>
                {todo.text}
                </div>
                <button className="buttonn" onClick={()=>{
                    onDelete(todo);
                }}>x</button>
            </label>


        </div>
        
    )
}

export default TodoItem;