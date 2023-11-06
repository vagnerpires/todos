export const Task = (props) => {

    return (
        <div 
        className="Task"
        style={ {backgroundColor: props.completed ? "transparent" : "pink" } }
        ><h1>{props.taskName}</h1>

        <button onClick={() => props.completeTask(props.id)}> Complete </button>

        <button onClick={() => props.deleteTask(props.id)}> X </button>
        </div>
    );
}
