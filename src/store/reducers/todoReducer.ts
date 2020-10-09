export interface State {
  todos: Todo[]  
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
    {
      id: '1',
      title: 'Oprati čaše',
      description: 'Moraš napuniti lavor vodom, dodati likvi i prat na ruke',
      doc: '5.10.2020.',
      completed: false,
    },
    {
      id: '2',
      title: 'Trgovina',
      description: 'U trgovini kupiti sira i masla',
      doc: '2.10.2020.',
      completed: false,
    },
    {
      id: '3',
      title: 'Kladionica',
      description: 'Stavi tiket na Romu i na Lazio',
      doc: '6.10.2020.',
      completed: false,
    },
    {
      id: '4',
      title: 'Klaonica',
      description: 'Napraviti 100 kobasa',
      doc: '6.10.2020.',
      completed: false,
    },
  ],
};

const d = new Date();

const getDate = (): string => {
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}.`
}

const randomId = (): string => {
  return Math.random().toString(36).substr(2, 9);
}

type Action = { type: string; id: string; title: string; description: string };

const todosReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'DELETE_TODO':
      const newTodos = state.todos.filter((todo) => {
        return action.id !== todo.id;
      });
      return {
        ...state,
        todos: newTodos,
      };

    case 'ADD_TODO':
      const newTodo: {
        id: string;
        title: string;
        description: string;
        doc: string;
        completed: boolean;
      } = {
        id: randomId(),
        title: action.title,
        description: action.description,
        doc: getDate(),
        completed: false
      };

      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    case 'SAVE_CHANGES':
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, title: action.title, description: action.description }
          : todo
      );

      return {
        ...state,
        todos: updatedTodos
      };

    case 'TOGGLE_COMPLETION':
      const changeStatusofTodo = state.todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

      return {
        ...state,
        todos: changeStatusofTodo
      };
    default:
      return state;
  }
};

export default todosReducer;
