import React, { Component } from 'react'
import uuid from 'uuid/v4';
import Task from './Task';
import './ToDoList.scss'
export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        let id = uuid();
        this.state = {tasks: [{text:"Walk a dog", id:id, key:id}], newTask:"Do shopping"};
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
        else
            this.setState({tasks: [...this.state.tasks, newTask], newTask:""});
    }

    updateTask(id, updatedTask){
        const updatedList = this.state.tasks.map(task => {
            if(task.id === id)
                return {...task, text: updatedTask}
            return task;
        });
        this.setState({tasks: updatedList});  
    }

    deleteTask(id){
        let taskList = this.state.tasks.filter(t => t.id !== id);
        this.setState({tasks: taskList});
    }

    render() {
        let tasks = this.state.tasks.map((t)=>{
            return <Task text={t.text} id={t.id} key={t.id} update={this.updateTask} delete={this.deleteTask} />
        })
        return (
            <div className="ToDoList">
                <div className="list-container">
                    <div className="list-tasks">
                        {tasks}
                    </div>
                    <form onSubmit={this.handleNewTask}>
                        <input placeholder="Do shopping" name="newTask" value={this.state.newTask} onChange={this.handleChange} ></input>
                        <button>Add!</button>
                    </form>
                </div>
            </div>
        )
    }
}
