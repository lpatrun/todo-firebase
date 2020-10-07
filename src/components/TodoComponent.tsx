import React from 'react';
import { connect } from 'react-redux';
import classes from './TodoComponent.module.css';
import { Link } from 'react-router-dom';

function TodoComponent(props: any) {

  return (
    <React.Fragment>

      {
        props.todo ?
          <section className={classes.singleTodo}>
            <h1>Todo</h1>
            <p>Title: {props.todo.title}</p>
            <p>Description: {props.todo.description}</p>
            <p>Date: {props.todo.doc}</p>
            <p>Completion: {props.todo.completed ? "Finished" : "Not Finished"}</p>
            <Link to={'/'}><button className={classes.goHomeBtn}>Go home</button></Link>
          </section>
          : 
          <section className={classes.singleTodo}>
            <h1>Uuuups, we have lost that todo</h1>
            <Link to={'/'}><button className={classes.goHomeBtn}>Go home</button></Link>
          </section>
      }
    </React.Fragment>

  );
}

const mapStateToProps = (state: any, ownProps: any) => {
  let id = ownProps.match.params.todo_id;
  return {
    todo: state.todosReducerReducer.todos.find((todo: any) => todo.id === id)
  }
}

export default connect(mapStateToProps)(TodoComponent);
