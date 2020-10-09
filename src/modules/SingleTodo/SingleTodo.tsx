import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootReducer } from '../../store/reducers';
import { Todo } from '../../store/reducers/todoReducer';
import classes from './SingleTodo.module.css';

interface ParamTypes {
  todo_id: string;
}

function SingleTodo() {
  const { todo_id } = useParams<ParamTypes>();
  const todo: Todo = useSelector<RootReducer, Todo>((state) =>
    state.todoReducer.todos.find((todo: Todo) => todo.id === todo_id)!
  );

  return (
    <>
      {todo ? (
        <section className={classes.singleTodo}>
          <h1>Todo</h1>
          <p>Title: {todo.title}</p>
          <p>Description: {todo.description}</p>
          <p>Date: {todo.doc}</p>
          <p>Completion: {todo.completed ? 'Finished' : 'Not Finished'}</p>
          <Link to="/todos">
            <button className={classes.goHomeBtn}>Go back</button>
          </Link>
        </section>
      ) : (
        <section className={classes.singleTodo}>
          <h1>Uuuups, we have lost that todo</h1>
          <Link to="/">
            <button className={classes.goHomeBtn}>Go home</button>
          </Link>
        </section>
      )}
    </>
  );
}

export default {
  routeProps: {
    path: '/todos/:todo_id',
    component: SingleTodo
  },
  name: SingleTodo
}