interface Todo {
  id: string,
  title: string,
  description: string,
  doc: string,
  completed: boolean
}

const initialState = {
  todos: [
    {
      id: '1',
      title: 'Oprati čaše',
      description: 'Moraš napuniti lavor vodom, dodati likvi i prat na ruke',
      doc: '5.10.2020.',
      completed: false
    },
    {
      id: '2',
      title: 'Trgovina',
      description: 'U trgovini kupiti sira i masla',
      doc: '2.10.2020.',
      completed: false
    },
    {
      id: '3',
      title: 'Kladionica',
      description: 'Stavi tiket na Romu i na Lazio',
      doc: '6.10.2020.',
      completed: false
    },
    {
      id: '4',
      title: 'Klaonica',
      description: 'Napraviti 100 kobasa',
      doc: '6.10.2020.',
      completed: false
    }
  ],
  isAuthenticated: false
}

const d = new Date();

const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'DELETE_TODO':
      const newTodos = state.todos.filter(todo => {
        return action.id !== todo.id
      })
      return {
        ...state,
        todos: newTodos
      }

    case 'ADD_TODO':
      const newTodo: Todo = {
        id: Math.random().toString(36).substr(2, 9),
        title: action.title,
        description: action.description,
        doc: `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}.`,
        completed: false
      }
      const allTodos = [...state.todos];
      allTodos.push(newTodo);
      return {
        ...state,
        todos: allTodos
      }
    case 'SAVE_CHANGES':
      return {
        ...state,
        todos: state.todos.map(
          (todo) => todo.id === action.id ? { ...todo, title: action.title, description: action.description }
            : todo
        )
      }
    case 'TOGGLE_COMPLETION':
      return {
        ...state,
        todos: state.todos.map(
          (todo) => todo.id === action.id ? { ...todo, completed: !todo.completed }
            : todo
        )
      }
    case 'VALID_AUTH':
      return {
        ...state,
        isAuthenticated: true
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false
      }

    default:
      break;
  }
  return state;
}

export default todosReducer;