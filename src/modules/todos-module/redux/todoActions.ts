import { Todo } from "./todoReducer";
import firebase from '../../../firebase';

const db = firebase.firestore()

const deleteTodo = (id: string) => {
  return () => db.collection('todos').doc(id).delete();
};

const saveChanges = (id: string, title: string, description: string, doc: string, completed: boolean) => {
  return () => { db.collection('todos').doc(id).set({ id, title, description, doc, completed }); }
};

const d = new Date();

const getDate = (): string => {
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}.`;
};

const addTodo = (title: string, description: string) => {

  return () => {

    const data: Todo = {
      id: '',
      title,
      description,
      doc: getDate(),
      completed: false
    }
    db.collection('todos').add(data)
  }
};

const setTodos = (todos: Todo[]) => {
  return {
    type: 'SET_TODOS',
    todos
  }
}

const fetchTodosFailed = () => {
  return {
    type: 'FETCH_TODOS_FAILED'
  }
}

export default {
  deleteTodo,
  addTodo,
  saveChanges,
  setTodos,
  fetchTodosFailed
};


/* import { Todo } from "./todoReducer";
import firebase from '../../../firebase';

const db = firebase.firestore()

const deleteTodo = (id: string) => {
  db.collection('todos').doc(id).delete();

  return {
     type: 'DELETE_TODO',
     id,
   };
};

const saveChanges = (id: string, title: string, description: string, doc: string, completed: boolean) => {

  return () => { db.collection('todos').doc(id).set({ id, title, description, doc, completed }); }

  return {
    type: 'SAVE_CHANGES',
    id,
    title,
    description,
  };
};

const toggleCompletion = (id: string) => {
  return {
    type: 'TOGGLE_COMPLETION',
    id,
  };
};

const d = new Date();

const getDate = (): string => {
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}.`;
};

const addTodo = (title: string, description: string) => {

  return () => {

    const data: Todo = {
      id: '',
      title,
      description,
      doc: getDate(),
      completed: false
    }
    db.collection('todos').add(data)
  }
};

const setTodos = (todos: Todo[]) => {
  return {
    type: 'SET_TODOS',
    todos
  }
}

const fetchTodosFailed = () => {
  return {
    type: 'FETCH_TODOS_FAILED'
  }
}

export default {
  deleteTodo,
  addTodo,
  saveChanges,
  toggleCompletion,
  setTodos,
  fetchTodosFailed
};

*/