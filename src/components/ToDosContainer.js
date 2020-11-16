import React from 'react'

export default class ToDosContainer extends React.Component {
state={
    inputFieldValue:""
}
addData=(e)=>{
    e.preventDefault()
    console.log(this, "this is from Child todoscontainer");
    
    this.props.addItem(this.state.inputFieldValue)
}
   render(){
    return (
        <div className="todos-container">
            <form className="todo-form" onSubmit={this.addData}>
            <label className="input-item">
                <input onChange={(e)=>this.setState({inputFieldValue:e.target.value})} type="text" name="todo" id=""/>
            </label>
            <input className="btn" type="submit" value="ADD"/>
            </form>

            <div className="todos">
            <h3>TO DO</h3>
            {this.props.toDos.map(todo=>{
                return(
                    <div className="todo-item" key={todo.id}>
                        <p>{todo.text}</p>
                        <div className="action">
                            <button className="btn" onClick={()=>this.props.updateItem(todo.id)}> &#10004; </button>
                            {/* &#10004; = code for icon */}
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
   }

}
