<template>
  <nav class="todo-list-nav">
    <div class="todo-list-nav-item">
      <router-link class="todo-list-nav-link prev-link" :to="id > 1 ? `/page/${id - 1}` : '/page/1'">Previous</router-link>
    </div>
    <div class="todo-list-nav-item">
      <router-link class="todo-list-nav-link next-link" :to="id < totalPage ?`/page/${id + 1}` : `/page/${id}`">Next</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    id: Number
  },
  computed: {
    totalPage () {
      return Math.ceil(this.$store.state.todos.length / 10)
    }
  },
  created () {
    if (this.id < 1) {
      this.$router.push('/page/1')
    } else if (this.totalPage < this.id) {
      this.$router.push(`/page/${this.totalPage}`)
    }
  }
}
</script>

<style scoped>
  .todo-list-nav {
    display: flex;
    width: 90%;
  }
  .todo-list-nav-item {
    flex-grow: 5;
    text-align: center;
    margin-top: 1%;
  }
  .todo-list-nav-link {
    background-color: rgb(136, 233, 240);
    text-decoration: none;
    border-radius: 10%;
    padding: 4px;
    color: #2c3e50;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
  }
  .todo-list-nav-link:visited {
    color: #2c3e50;
  }
  @media screen and (max-width: 736px){
    .todo-list-nav-link {
      padding: 6px;
    }
    .todo-list-nav-item {
      margin-top: 2%;
    }
  }
</style>
