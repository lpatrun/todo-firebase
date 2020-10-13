import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../../../../store/actions/index';

import classes from './FormComponent.module.css';

function FormComponent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const toSaveTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && description) {

      dispatch(allActions.todoActions.addTodo(title, description));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={toSaveTodo} className={classes.addTodoForm}>
      <input
        type="text"
        className={classes.formInput}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Todo title..."
        required
      />
      <input
        type="text"
        className={classes.formInput}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Todo description..."
        required
      />
      <button className={classes.formButton} type="submit">
        Add
      </button>
    </form>
  );
}

export default FormComponent;
