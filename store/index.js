import TodoService from '@/service/todo'

export const state = () => ({
  visits: [],
  todos: []
})

export const mutations = {
  ADD_VISIT (state, path) {
    state.visits.push({
      path,
      date: new Date().toJSON()
    })
  },
  UPDATE_TODOS (state, todos) {
    state.todos = todos
  },
}

export const actions = {
  async fetchTodo ({ commit }) {
    const todos = await TodoService.getTodos()
    console.log('[store] todos:', todos)
    commit('UPDATE_TODOS', todos)
  }
}