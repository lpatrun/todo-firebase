import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import allActions from '../../../../../store/actions';
import { Todo } from '../../../redux/todoReducer';
import classes from './TodoTableItem.module.css';

interface Props {
  todo: Todo;
}

function TodoTableItem(props: Props) {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleDelete = () => {
    dispatch(allActions.todoActions.deleteTodo(props.todo.id));
  };

  const handleEdit = () => {
    setTitle(props.todo.title);
    setDescription(props.todo.description);
    setEditMode(true);
  };

  const handleSaveChanges = () => {
    dispatch(
      allActions.todoActions.saveChanges(props.todo.id, title, description)
    );
    setEditMode(false);
  };

  const handleToggleCompletion = () => {
    dispatch(allActions.todoActions.toggleCompletion(props.todo.id));
  };

  const dispatch = useDispatch();

  return (
    <>
      {!editMode ? (
        <tr className={classes.rowStyling}>
          <td>
            <Link to={`/todos/${props.todo.id}`}>{props.todo.title}</Link>
          </td>
          <td>{props.todo.description}</td>
          <td>{props.todo.doc}</td>
          <td
            className={classes.completedStyling}
            onClick={handleToggleCompletion}
          >
            {props.todo.completed ? 'True' : 'False'}
          </td>
          <td>
            <button
              onClick={handleEdit}
              className={`${classes.btnStyling} ${classes.btnEdit}`}
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className={`${classes.btnStyling} ${classes.btnDelete}`}
            >
              Delete
            </button>
          </td>
        </tr>
      ) : (
        <tr className={classes.rowStyling}>
          <td>
            <input
              className={classes.inputStyling}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </td>
          <td>
            <input
              className={classes.inputStyling}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </td>
          <td>{props.todo.doc}</td>
          <td>{props.todo.completed ? 'True' : 'False'}</td>
          <td>
            <button
              onClick={handleSaveChanges}
              className={`${classes.btnStyling} ${classes.btnEdit}`}
            >
              Save
            </button>
          </td>
        </tr>
      )}
    </>
  );
}

export default TodoTableItem;
