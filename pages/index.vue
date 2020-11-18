<template>
  <div class="container">
    <div>
      <!-- asyncData -->
      <div>
        <h1>Asynced Todos</h1>
        <ul>
          <li v-for="(item, i) of asyncedTodos" :key="i">{{ item.name }}</li>
        </ul>
      </div>
      <!-- fetch -->
      <p v-if="$fetchState.pending">Fetching todos...</p>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <div v-else>
        <h1>Fetched Todos</h1>
        <ul>
          <li v-for="(item, i) of fetchedTodos" :key="i">{{ item.name }}</li>
        </ul>
        <button @click="$fetch">Refresh</button>
      </div>
      <!-- mounted -->
      <div>
        <h1>Mounted Todos</h1>
        <ul>
          <li v-for="(item, i) of mountedTodos" :key="i">{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoService from '@/service/todo'

export default Vue.extend({
  data () {
    return {
      asyncedTodos: [],
      fetchedTodos: [],
      mountedTodos: []
    }
  },
  /**
   * asyncData simply merges its return value into your component's local state.
   */
  async asyncData (context: any) {
    console.log('[pages] nuxt asyncData hook')
    console.log('[pages] context.userAgent:', context.userAgent)
    const asyncedTodos = await TodoService.getTodos()
    return { asyncedTodos }
  },
  // async fetch ({ store }) {
  //   await store.dispatch('fetchTodo')
  // },
  /**
   * The fetch hook (Nuxt 2.12+). This hook can be placed on any component,
   * and provides shortcuts for rendering loading states
   * (during client-side rendering) and errors.
   */
  async fetch () {
    console.log('[pages] nuxt fetch hook')
    this.fetchedTodos = await TodoService.getTodos()
  },
  async mounted () {
    console.log('[pages] vue mounted hook')
    this.mountedTodos = await TodoService.getTodos()
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
