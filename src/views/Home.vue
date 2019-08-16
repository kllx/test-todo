<template>
  <div class="home">
    <ToDoList
    class="todo-list"
    />
  </div>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: 'home',
  components: {
    ToDoList
  }
}
</script>

<style scoped>
  .todo-list{
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
</style>
