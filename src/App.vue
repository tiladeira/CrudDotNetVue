<template>
    <div id="app">
    <h2>PrimeNG Issue Template</h2>
  </div>
  <CrudComponent />
</template>

<script>
import CrudComponent from './components/CrudComponent.vue'

export default {
  name: 'App',
  components: {
    CrudComponent
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 4rem;
}
</style>
