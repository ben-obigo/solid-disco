const getTodos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = ['say hello']
      resolve(todos)
    }, 3000)
  })
}

export default {
  getTodos
}