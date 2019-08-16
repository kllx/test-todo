import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    todos: [],
    nextId: 0
  },
  mutations: {
    deleteToDoItem (state, payload) {
      const index = state.todos.findIndex(obj => payload.id === obj.id)
      state.todos.splice(index, 1)
    },
    addToDoItem (state, payload) {
      state.todos.push({
        id: state.nextId,
        text: payload,
        isDone: false
      })
      state.nextId++
    },
    checkToDoItem (state, payload) {
      const index = state.todos.findIndex(obj => payload.id === obj.id)
      state.todos[index].isDone = !state.todos[index].isDone
    },
    getTodos (state, todos) {
      this.replaceState(
        Object.assign(state, JSON.parse(todos))
      )
    }
  },
  getters: {
    todos: (state) => {
      return state.todos.slice().reverse()
    }
  },
  actions: {
    getTodos (context) {
      if (localStorage.getItem('todos')) {
        context.commit('getTodos', localStorage.getItem('todos'))
      }
    }
  }
})
store.subscribe((mutation, state) => {
  localStorage.setItem('todos', JSON.stringify(state))
})

export default store
