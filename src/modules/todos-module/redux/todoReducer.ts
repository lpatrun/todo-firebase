export interface State {
  todos: Todo[];
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  doc: string;
  completed: boolean;
}

const initialState = {
  todos: [
  ],
};

type Action = { type: string; id: string; title: string; description: string, todos:any, doc: string };

const todosReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.todos
      }

    /* case 'DELETE_TODO':
      const newTodos = state.todos.filter((todo) => {
        return action.id !== todo.id;
      });
      return {
        ...state,
        todos: newTodos,
      };

    case 'SAVE_CHANGES':
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, title: action.title, description: action.description }
          : todo
      );

      return {
        ...state,
        todos: updatedTodos,
      };

    case 'TOGGLE_COMPLETION':
      const changeStatusofTodo = state.todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

      return {
        ...state,
        todos: changeStatusofTodo,
      }; */
    default:
      return state;
  }
};

export default todosReducer;
