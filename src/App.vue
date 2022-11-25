<template>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
