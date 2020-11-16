import React from "react"
import "./css/App.scss"
import Navigation from "./components/Navigation"
import ToDosContainer from "./components/ToDosContainer"
import ToDonesContianer from "./components/ToDonesContianer"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import About from "./components/About.js"
import NotFound from "./components/NotFound.js"

// methods:
// console.log(localStorage)
// localStorage.setItem() -> setting data
// localStorage.getItem() -> getting data
// localStorage.removeItem() -> deleting data

// localStorage.setItem("to-do-app", "abc") -> first is key, second is value. Key and value have to be stored as string.

// console.log(localStorage.getItem("abc"));

class App extends React.Component {
  state={
    todoItems:[
   
    ]
  }

  componentDidMount(){
    let data=localStorage.getItem("todoapp")
    if (data){
      let convertedData=JSON.parse(data)
    this.setState({
      todoItems:convertedData
    })};
  }

  addItem=(value)=>{
    console.log(this, "this is from App")
    let item={id:this.state.todoItems.length, text:value, done:false}
    this.setState({todoItems:[...this.state.todoItems, item]}, ()=>{
      localStorage.setItem("todoapp", JSON.stringify(this.state.todoItems))
    })
    // -> spread operator with comma and item adds item from variable item to todoItems array
    
  }

  updateItem=(id)=>{
    let updatedItems=this.state.todoItems.map(item=>{
      if(item.id===id){
        item.done=!item.done
      return item}
      else
      {return item}
    })
    this.setState({
      todoItems:updatedItems
    }, ()=>{
      localStorage.setItem("todoapp", JSON.stringify(this.state.todoItems))
    })
  }

 

  render(){ 
    let toDos=this.state.todoItems.filter(item=>!item.done)
    let toDones=this.state.todoItems.filter(item=>item.done)
    return (
      <BrowserRouter>
      <div className="app">
        <Navigation/>
<Switch>
       <Route exact path="/">
        <ToDosContainer toDos={toDos} addItem={this.addItem} updateItem={this.updateItem}/>
        <ToDonesContianer toDones={toDones} updateItem={this.updateItem} />
      </Route >
      <Route path="/about" component={About}/>
      <Route component={NotFound}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }

}

export default App;
