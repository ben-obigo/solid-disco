const getTodos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = [
        {
          name: 'say hello'
        },
        {
          name: 'eat lunch'
        }
      ]
      resolve(todos)
    }, 3000)
  })
}

export default {
  getTodos
}