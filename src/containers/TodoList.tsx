import React, { SyntheticEvent, useState } from 'react';
import FormComponent from '../components/FormComponent';
import classes from './TodoList.module.css';
import { connect } from 'react-redux';
import TodoTableItem from '../components/TodoTableItem';

function TodoList(props: any) {

  /* const [filteredTodos, setFilteredTodos] = useState([...props.todos]);
  const [selectfilter, setSelectFilter] = useState('all');
  const [inputFilter, setInputFilter] = useState(''); */
  const [filterFn, setFilterFn] = useState({ fn: (todos: any) => { return todos } });
  const [sortFilter, setSortFilter] = useState('');

  /* useEffect(() => {
    filterSelectTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.todos, filter, inputFilter])

  const filterSelectTodos = () => {
    switch (filter) {
      case 'all':
        setFilteredTodos([...props.todos]);
        break;
      case 'active':
        setFilteredTodos([...props.todos].filter(todo => todo.completed === false));
        break;
      case 'finished':
        setFilteredTodos([...props.todos].filter(todo => todo.completed === true));
        break;
      default:
        setFilteredTodos([...props.todos]);
        break;
    }
  }

  const handleOnInput = () => {
    if (inputFilter !== "")
      setFilteredTodos(filteredTodos.filter(x => {
        return x.title.toLowerCase().includes
          (inputFilter.trim().toLowerCase()) || x.description.toLowerCase().includes(inputFilter.trim().toLowerCase())
      }))
  } */

  const handleSearch = (e: { target: any; }) => {
    let target = e.target;
    setFilterFn({
      fn: (todos: any) => {
        if (target.value === "")
          return todos;
        else
          return todos.filter((todo: any) => {
            return todo.title.toLowerCase().includes(target.value.toLowerCase()) ||
              todo.description.toLowerCase().includes(target.value.toLowerCase())
          })
      }
    })
  }

  const handleSelect = (e: { target: any; }) => {
    let target = e.target.value;
    setFilterFn({
      fn: (todos: any) => {
        switch (target) {
          case 'all':
            return todos
          case 'active':
            return todos.filter((todo: any) => todo.completed === false);
          case 'finished':
            return todos.filter((todo: any) => todo.completed === true);
          default:
            return todos;
        }
      }
    })
  }

  const todosAfterFilteringAndSorting = () => {
    return sortFunction(filterFn.fn([...props.todos]))
  }

  const sortFunction = (array: any) => {
    if (sortFilter === '') return array;
    else {
      return array.sort(function (a: any, b: any) {
        let firstDate = a.doc.split('.').reverse().join(),
          secondDate = b.doc.split('.').reverse().join();
        if (sortFilter === 'asc') {
          return firstDate < secondDate ? -1 : (firstDate > secondDate ? 1 : 0);
        } else {
          return firstDate > secondDate ? -1 : (firstDate < secondDate ? 1 : 0);
        }
      });
    }
  }

  const searchForm = (e: SyntheticEvent) => {
    e.preventDefault();
  }

  return (
    <div className={classes.center}>
      <header className={classes.heder}>
        <h1>Todo's list</h1>
      </header>
      <FormComponent />

      <form className={classes.formStyle} onSubmit={searchForm}>

        <input className={classes.singleInput} type="text" onChange={handleSearch} placeholder="Search..." />

        <div className={classes.selStyle}>
          <select name="todos" className={classes.selectorStyle} onChange={handleSelect}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="finished">Finished</option>
          </select>
        </div>
      </form>

      <table className={classes.tableClass}>
        <thead className={classes.tableHead}>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th
              className={classes.dateSort}
              onClick={() => sortFilter === 'asc' ? setSortFilter('desc') : setSortFilter('asc')}>
              Date
            </th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            todosAfterFilteringAndSorting().length ?
              (
                todosAfterFilteringAndSorting().map((todo: any) => {
                  return (<TodoTableItem todo={todo} key={todo.id} ></TodoTableItem>)
                })
              )
              :
              <tr>
                <td colSpan={4}>No todos yet</td>
              </tr>
          }
        </tbody>
      </table>

      <div className="todo-container">
        <ul className="todo-list"></ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.todosReducerReducer.todos
  }
};

export default connect(mapStateToProps)(TodoList);

