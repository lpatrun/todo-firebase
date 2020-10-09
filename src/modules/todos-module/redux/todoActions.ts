export const deleteTodo = (id: string) => {
  return {
    type: 'DELETE_TODO',
    id,
  };
};

export const addTodo = (title: string, description: string) => {
  return {
    type: 'ADD_TODO',
    title,
    description,
  };
};

export const saveChanges = (id: string, title: string, description: string) => {
  return {
    type: 'SAVE_CHANGES',
    id,
    title,
    description,
  };
};

export const toggleCompletion = (id: string) => {
  return {
    type: 'TOGGLE_COMPLETION',
    id,
  };
};

export default {
  deleteTodo,
  addTodo,
  saveChanges,
  toggleCompletion,
};
