<template>
  <textarea
  class="new-todo-textarea"
  cols="20"
  rows="4"
  placeholder="Введите новую задачу"
  @keypress.enter.prevent="addNewToDo()"
  v-model="text"
  ></textarea>
</template>
<script>
export default {
  name: 'ToDoInput',
  props: {
    id: Number
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    addNewToDo () {
      if (this.text.trim()) {
        this.$store.commit('addToDoItem', this.text)
        this.text = ''
        if (this.id !== 1) {
          this.$router.push('/page/1')
        }
      }
    }
  }
}
</script>
<style scoped>
  .new-todo-textarea{
    width: 100%;
    box-sizing: border-box;
    border: 1px solid lightblue;
    border-radius: 3px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    box-shadow: 0 0 7px rgba(0,0,0,0.5);
  }
  @media screen and (max-width: 736px){
    .new-todo-textarea {
      font-size: 16px;
    }
  }
</style>
