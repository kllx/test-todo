<template>
  <div class="todo-list-item" :class="{'done':todo.isDone}">
    <span class="todo-list-item-text" @click="checkToDo">{{todo.text}}</span>
    <div class="todo-list-item-btn-delete" @click="deleteToDo">❌</div>
  </div>
</template>

<script>
export default {
  name: 'ToDoListItem',
  props: ['todo'],
  methods: {
    deleteToDo () {
      this.$store.commit('deleteToDoItem', this.todo)
    },
    checkToDo () {
      this.$store.commit('checkToDoItem', this.todo)
    }
  }
}

</script>

<style scoped>
  .todo-list-item{
    background-color: #fff;
    box-shadow: 0 0 5px rgba(9,30,66,.25);
    border-radius: 2px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 5px;
    display: flex;
    overflow-wrap: break-word;
  }
  .done {
    background: rgba(0, 0, 0, 0.281);
    box-shadow: none
  }
  .todo-list-item-text{
    max-width: 90%;
    margin-right: 2%;
    align-items: left;
    flex-grow: 9;
    overflow-wrap: break-word;

  }
  .todo-list-item-btn-delete {
    cursor: pointer;
    margin-right: 10px;
    user-select: none;
  }
  @media screen and (max-width: 736px){
    .todo-list-item-text {
      max-width: 85%;
      font-size: 18px;
      margin: 5px;
    }
    .todo-list-item-btn-delete {
      font-size: 18px;
      margin-left: 5px;
    }
  }

</style>
