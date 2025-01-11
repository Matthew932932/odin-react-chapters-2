/* eslint-disable react/destructuring-assignment */
//import React, { Component } from 'react';
import { Component }  from 'react';

class What extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  handleDelete(e) {
    e.preventDefault();
    
		
		// e.preventDefault();

		// console.log('button?')
		// console.log(e.target.name)
		// console.log(e.target.value)
		// this.setState((state) => ({
    //   todos: state.todos.concat(state.inputVal),
    //   inputVal: 'fuck',
    // }));


		//let test = [];
		console.log('todos')
		console.log(this.state.todos)
		console.log('name')
		console.log(e.target.name)
	const test1 = this.state.todos;
		const test2 = test1.filter((word) => word !==  e.target.name)
		console.log('test2')
		console.log(test2)

		this.setState(() => ({
      todos: test2,
      inputVal: '',
    }));

		//const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter((word) => word.length > 6);

//console.log(result);
		//console.log(this.state.inputVal)
		//this.state.todos.map((todo) => (console.log(todo)))
    // this.setState((state) => ({
    //   todos: state.todos.concat(state.inputVal),
    //   inputVal: '',
    // }));
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => ( 
            <li key={todo}>{todo}<button name={todo} value="shit" onClick={this.handleDelete}>delete</button></li>
            
          ))}
        </ul>
        <h3>---------------------</h3>
      </section>
    );
  }
}

export default What;
