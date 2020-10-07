import React, { SyntheticEvent, useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions/todoActions';

import classes from './FormComponent.module.css';

function FormComponent(props: any) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const toSaveTodo = (e: SyntheticEvent) => {
    e.preventDefault();
    if (title !== '' && description !== '') {
      props.addTodo(title, description);
      setTitle('');
      setDescription('');
    }
  }

  return (
    <form onSubmit={toSaveTodo} className={classes.addTodoForm}>
      <input
        type="text"
        className={classes.formInput}
        onChange={e => setTitle(e.target.value)}
        value={title} 
        placeholder="Todo title..."
        required
      />
      <input
        type="text"
        className={classes.formInput}
        onChange={e => setDescription(e.target.value)}
        value={description}
        placeholder="Todo description..."
        required
      />
      <button className={classes.formButton} type="submit">Add</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (title: string, description: string) => { dispatch(addTodo(title, description)) }
  }
}

export default connect(null, mapDispatchToProps)(FormComponent);