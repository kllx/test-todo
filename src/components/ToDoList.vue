<template>
  <section class="todo-card">
    <ToDoInput :id="id"/>
    <ToDoNav :id="id"/>
    <div class="todo-list" >
      <ToDoItem v-for="todo of getPage" :key="todo.id" :todo="todo"/>
    </div>

  </section>
</template>

<script>
import ToDoItem from './ToDoItem'
import ToDoInput from './ToDoInput'
import ToDoNav from './ToDoNav'

export default {
  name: 'ToDoList',
  data () {
    return {
      id: +this.$route.params.id
    }
  },
  computed: {
    getPage () {
      const items = this.$store.getters.todos
      const page = items.slice((this.id - 1) * 10, (this.id - 1) * 10 + 10)
      return page
    }
  },
  methods: {

  },
  components: {
    ToDoItem,
    ToDoInput,
    ToDoNav
  },
  watch: {
    '$route' (to, from) {
      this.id = +to.params.id
    }
  },
  beforeCreate () {
    this.$store.dispatch('getTodos')
  }
}
</script>

<style scoped>
.todo-card{
    margin: 4px 0 0;
    max-width: 25%;
    background: #73b8c9;
    padding: 5px;
  }
@media screen and (max-width: 736px){
  .todo-card{
    max-width: 100%;
  }
}
@media screen and (max-width: 1366px){
  .todo-card{
    max-width: 60%;
  }
}

</style>
