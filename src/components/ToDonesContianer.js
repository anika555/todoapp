import React from 'react'

export default function ToDonesContianer({toDones, updateItem}) {
// toDones is props passed from App.js inside <ToDonesContianer toDones={toDones}/>
   
    return (
        <div className="todones-container">
            <h3>BACKLOG</h3>
            {toDones.map(todone=>{
                return(  
                <div className="todones-item" key={todone.id}>
                    <p>{todone.text}</p>
                    <div className="action">
                        <button className="btn" onClick={()=>updateItem(todone.id)}> &#8635;</button>
                        {/* &#8635; = code for icon */}
                    </div>
                </div>)
            })}
        </div>
    )
}
