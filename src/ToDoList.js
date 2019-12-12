import React, { Component } from 'react'
import uuid from 'uuid/v4';
import Task from './Task';
import './ToDoList.scss'
export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: JSON.parse(window.localStorage.getItem("tasks") || "[]"), newTask: "Walk a dog"};
        this.handleChange = this.handleChange.bind(this);
        this.handleNewTask = this.handleNewTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    
    handleChange(evt) {
        this.setState({newTask: evt.target.value});
    }

    handleNewTask(evt){
        evt.preventDefault();
        let id = uuid();
        let newTask = {text: this.state.newTask, id:id};
        if(newTask.text === "")
            alert("Don't add empty tasks! :(");
        else{
            this.setState(st => ({
                tasks: [...st.tasks, newTask], newTask: ""
            }),()=>window.localStorage.setItem("tasks", JSON.stringify(this.state.tasks)));

        }
    }

    updateTask(id, updatedTask){
        const updatedList = this.state.tasks.map(task => {
            if(task.id === id)
                return {...task, text: updatedTask}
            return task;
        });
        this.setState({tasks: updatedList},()=>window.localStorage.setItem("tasks", JSON.stringify(this.state.tasks)));  
    }

    deleteTask(id){
        let taskList = this.state.tasks.filter(t => t.id !== id);
        this.setState({tasks: taskList},()=>window.localStorage.setItem("tasks", JSON.stringify(this.state.tasks)));
    }

    render() {
        let tasks;
        try{
                tasks = this.state.tasks.map((t)=>{
                return <Task text={t.text} id={t.id} key={t.id} update={this.updateTask} delete={this.deleteTask} />
            })
        }
        catch{
            localStorage.clear();
        }

        return (
            <div className="ToDoList fadeIn">
                <div className="list-container">
                    <div className="list-tasks">
                        <div className="list-header">
                            To-Do List
                        </div>
                        {tasks}
                    </div>
                    <form onSubmit={this.handleNewTask} className="taskForm">
                        <input placeholder="Do shopping" name="newTask" value={this.state.newTask} onChange={this.handleChange} ></input>
                        <button>Add!</button>
                    </form>
                </div>
            </div>
        )
    }
}
