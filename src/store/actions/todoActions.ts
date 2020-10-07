export const deleteTodo = (id: string) => {
  return {
    type: 'DELETE_TODO',
    id: id
  }
}

export const addTodo = (title: string, description: string) => {
  return {
    type: 'ADD_TODO',
    title: title,
    description: description
  }
}

export const saveChanges = (id: string, title: string, description: string) => {
  return {
    type: 'SAVE_CHANGES',
    id: id,
    title: title,
    description: description
  }
}

export const toggleCompletion = (id: string) => {
  return {
    type: 'TOGGLE_COMPLETION',
    id: id
  }
}

export const validAuth = () => {
  return {
    type: 'VALID_AUTH'
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}