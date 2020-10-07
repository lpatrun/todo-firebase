import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo, saveChanges, toggleCompletion } from '../store/actions/todoActions';
import classes from './TodoTableItem.module.css';

interface Todo {
  id: string,
  title: string,
  description: string,
  doc: string,
  completed: boolean
}

function TodoTableItem(props: any) {

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleClick = () => {
    props.deleteTodo(props.todo.id);
  }

  const handleEdit = () => {
    setTitle(props.todo.title)
    setDescription(props.todo.description)
    setEditMode(true);
  }

  const handleSaveChanges = () => {
    props.saveChanges(props.todo.id, title, description)
    setEditMode(false);
  }

  const handleToggleCompletion = () => {
    props.toggleCompletion(props.todo.id)
  }

  return (
    <React.Fragment>

      {
        !editMode ?
          <tr className={classes.rowStyling}>
            <td><Link to={'/todos/' + props.todo.id}>{props.todo.title}</Link></td>
            <td>{props.todo.description}</td>
            <td>{props.todo.doc}</td>
            <td className={classes.completedStyling} onClick={handleToggleCompletion}>{props.todo.completed ? 'True' : 'False'}</td>
            <td>
              <button onClick={handleEdit} className={`${classes.btnStyling} ${classes.btnEdit}`}>Edit</button>
              <button onClick={handleClick} className={`${classes.btnStyling} ${classes.btnDelete}`}>Delete</button>
            </td>
          </tr>
          :
          <tr className={classes.rowStyling}>
            <td><input className={classes.inputStyling} value={title} onChange={e => setTitle(e.target.value)} /></td>
            <td><input className={classes.inputStyling} value={description} onChange={e => setDescription(e.target.value)} /></td>
            <td>{props.todo.doc}</td>
            <td>{props.todo.completed ? 'True' : 'False'}</td>
            <td>
              <button onClick={handleSaveChanges} className={`${classes.btnStyling} ${classes.btnEdit}`}>Save</button>
            </td>
          </tr>
      }

    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteTodo: (id: string) => { dispatch(deleteTodo(id)) },
    saveChanges: (id: string, title: string, description: string) => { dispatch(saveChanges(id, title, description)) },
    toggleCompletion: (id: string) => { dispatch(toggleCompletion(id)) }
  }
}

export default connect(null, mapDispatchToProps)(TodoTableItem);
