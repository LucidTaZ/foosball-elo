<template>
  <div class="homepage">
    <h2>Current standing</h2>
    <PlayersList :players="descendingRatingPlayers" />
  </div>
</template>

<script>
import axios from 'axios'

import PlayersList from '../components/PlayersList.vue'

export default {
  name: 'HomePage',
  components: {
      PlayersList
  },
  props: {
    server: String
  },
  computed: {
    descendingRatingPlayers: function () {
      return this.players.slice().sort((a, b) => {
        return b.rating - a.rating
      })
    }
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
