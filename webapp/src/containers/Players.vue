<template>
  <div class="players">
    <h2>Players</h2>
    <Player v-for="player in players" :key="player.id" :name="player.name" :rating="player.rating" :matchesPlayed="player.matchesPlayed"></Player>
  </div>
</template>

<script>
import axios from 'axios'

import Player from '../components/Player/Player.vue'

export default {
  name: 'Players',
  components: {
    Player
  },
  props: {
    server: String
  },
  data() {
    return {
      players: []
    }
  },
  created() {
    // https://alligator.io/vuejs/rest-api-axios/
    axios.get(this.server + '/players')
      .then(response => {
        this.players = response.data
      })
  }
}
</script>

<style scoped lang="scss">

</style>
