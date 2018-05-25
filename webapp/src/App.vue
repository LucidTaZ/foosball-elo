<template>
  <div id="app">
    <Navbar logo="Foosball ELO">
      <li><router-link v-bind:to="'/playground'">Playground</router-link></li>
      <li><router-link v-bind:to="'/players'">Players</router-link></li>
      <li><router-link v-bind:to="'/matches'">Matches</router-link></li>
    </Navbar>
    <router-view :server="server"></router-view>
  </div>
</template>

<script>
    import Navbar from './components/Materialize/Navbar.vue'

    export default {
        name: 'app',
        components: {
            Navbar
        },
        data() {
            return {
                // TODO: Take API server from env
                server: 'http://localhost:3000'
            }
        }
    }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
  color: #2c3e50;
//  margin-top: 60px;
}
</style>
