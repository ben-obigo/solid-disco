import TodoService from '@/service/todo'

export const state = () => ({
  todos: []
})

export const mutations = {
  UPDATE_TODOS (state, todos) {
    state.todos = todos
  }
}

export const actions = {
  async fetchTodo ({ commit }) {
    const todos = await TodoService.getTodos()
    console.log('todos:', todos)
    commit('UPDATE_TODOS', todos)
  }
}