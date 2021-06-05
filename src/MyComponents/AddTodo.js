// import React from "react";
import React, { useState } from "react";
export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
       e.preventDefault();
       if(!title||!desc){
         alert('titel or description cannot be blank')
       }
       else{
         props.addTodo(title,desc)
         setTitle('')
         setDesc('')
       }
    }
  return (
    <div className="container my-3 ">
      <h3>Add a todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            onChange = {(e)=>{setTitle(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
           Todo Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange = {(e)=>{setDesc(e.target.value)}}
          />
        </div>
         <button type="submit" className="btn btn-sm btn-success">
          Add todo
        </button>
      </form>
    </div>
  );
};
