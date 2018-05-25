<template>
  <div id="app">
    <Navbar logo="Navbar with buttons">
      <li><a href="#">Blop</a></li>
      <li><a href="#">Bla</a></li>
      <li><a href="#">Test</a></li>
    </Navbar>
    <Navbar logo="Navbar without buttons"></Navbar>
    <Card title="Sample card">
      <template slot="content">Card content</template>
      <template slot="action">Card actions</template>
    </Card>
    <Player name="Thijs" :rating=1337 :matchesPlayed=3 />

    <Navbar logo="Foosball ELO"></Navbar>
    <Players :server="server"/>
  </div>
</template>

<script>
  import Navbar from './components/Materialize/Navbar.vue'
  import Card from './components/Materialize/Card.vue'
  import Player from './components/Player/Player.vue'
  import Players from './containers/Players.vue'

  export default {
    name: 'app',
    components: {
      Navbar,
      Card,
      Player,
      Players
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
