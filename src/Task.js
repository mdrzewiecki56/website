import React, {Component} from 'react';

export default class Task extends Component{
    constructor(props) {
        super(props);
        this.state={editing : false, taskText: this.props.text};
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggleEdit(){
        this.setState({editing: true});
    }
    handleChange(evt) {
        this.setState({taskText: evt.target.value});
    }
    handleEdit(evt){
        evt.preventDefault();
        this.props.update(this.props.id, this.state.taskText);
        this.setState({editing: false});
    }
    handleDelete(evt)
    {
        this.props.delete(this.props.id);
    }
    render(){
        let content = this.state.editing ? 
        <form onSubmit={this.handleEdit} className="taskForm">
            <input value={this.state.taskText} onChange={this.handleChange} name="editTask"></input>
            <button>Submit!</button>
        </form> 
        :
        <div className="task-content">
            <div className="task-text"><p>{this.state.taskText}</p></div>
            <div className="task-buttons"><button onClick={this.toggleEdit}>Edit</button><button onClick={this.handleDelete}>Delete</button></div>
        </div>;
    
        return (
            <div className="Task">
                {content}
            </div>
        );
    }
}