import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FormComponent from './models/FormComponent';
import TodoTableItem from './models/TodoTableItem';
import classes from './TodoList.module.css';
import { RootReducer } from '../../../../store/reducers';
import { Todo } from '../../redux/todoReducer';

function TodoList() {
  const todos: Todo[] = useSelector<RootReducer, Todo[]>(
    (state) => state.todoReducer.todos
  );

  const [selectfilter, setSelectFilter] = useState('all');
  const [inputFilter, setInputFilter] = useState('');
  const [filterFn, setFilterFn] = useState({
    fn: (todos: Todo[]) => {
      return todos;
    },
  });
  const [sortFilter, setSortFilter] = useState('');

  const handleFiltering = (iFil: string, sFil: string) => {
    setInputFilter(iFil);
    setSelectFilter(sFil);
    setFilterFn({
      fn: (todos: Todo[]) => {
        if (sFil === 'all' && !iFil) {
          return todos;
        } else if (sFil === 'all' && iFil) {
          return todos.filter((todo: Todo) => {
            return (
              todo.title.toLowerCase().includes(iFil.trim().toLowerCase()) ||
              todo.description.toLowerCase().includes(iFil.trim().toLowerCase())
            );
          });
        } else if (sFil === 'active' && !iFil) {
          return todos.filter((todo: Todo) => todo.completed === false);
        } else if (sFil === 'active' && iFil) {
          return todos.filter((todo: Todo) => {
            return (
              (todo.title.toLowerCase().includes(iFil.trim().toLowerCase()) ||
                todo.description
                  .toLowerCase()
                  .includes(iFil.trim().toLowerCase())) &&
              todo.completed === false
            );
          });
        } else if (sFil === 'finished' && !iFil) {
          return todos.filter((todo: Todo) => todo.completed === true);
        } else {
          return todos.filter((todo: Todo) => {
            return (
              (todo.title.toLowerCase().includes(iFil.trim().toLowerCase()) ||
                todo.description
                  .toLowerCase()
                  .includes(iFil.trim().toLowerCase())) &&
              todo.completed === true
            );
          });
        }
      },
    });
  };

  const todosAfterFilteringAndSorting = () => {
    return sortFunction(filterFn.fn(todos));
  };

  const sortFunction = (array: Todo[]) => {
    if (sortFilter === '') return array;

    return array.sort(function (a: Todo, b: Todo) {
      const firstDate = a.doc.split('.').reverse().join();
      const secondDate = b.doc.split('.').reverse().join();
      if (sortFilter === 'asc') {
        return firstDate < secondDate ? -1 : firstDate > secondDate ? 1 : 0;
      }
      return firstDate > secondDate ? -1 : firstDate < secondDate ? 1 : 0;
    });
  };

  const searchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={classes.center}>
      <header className={classes.heder}>
        <h1>Todo's list</h1>
      </header>
      <FormComponent />

      <form className={classes.formStyle} onSubmit={searchForm}>
        <input
          className={classes.singleInput}
          type="text"
          onChange={(e) => {
            handleFiltering(e.target.value, selectfilter);
          }}
          placeholder="Search..."
        />

        <div className={classes.selStyle}>
          <select
            name="todos"
            className={classes.selectorStyle}
            onChange={(e) => {
              handleFiltering(inputFilter, e.target.value);
            }}
          >
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
              onClick={() =>
                sortFilter === 'asc'
                  ? setSortFilter('desc')
                  : setSortFilter('asc')
              }
            >
              Date
            </th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todosAfterFilteringAndSorting().length ? (
            todosAfterFilteringAndSorting().map((todo: any) => {
              return <TodoTableItem todo={todo} key={todo.id} />;
            })
          ) : (
            <tr>
              <td colSpan={4}>No todos yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default {
  routeProps: {
    path: '/todos',
    component: TodoList,
  },
  name: TodoList,
};
