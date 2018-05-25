<template>
  <div class="homepage">
    <h2>Current standing</h2>
    <PlayersList :players="players" />
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
