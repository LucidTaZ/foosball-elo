<template>
  <div class="matches">
    <h2>Matches</h2>
    <div class="row">
      <Match v-for="match in matches" :key="match.id" :moment="match.moment" :players="match.players" :outcome="match.outcome"></Match>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import Match from '../components/Match.vue'

export default {
    name: 'MatchesPage',
    components: {
        Match
    },
    props: {
        server: String
    },
    methods: {
        refresh: function () {
            // https://alligator.io/vuejs/rest-api-axios/
            axios.get(this.server + '/matches')
                .then(response => {
                    this.matches = response.data
                })
        }
    },
    data() {
        return {
            matches: []
        }
    },
    created() {
        this.refresh()
    }
}
</script>

<style scoped lang="scss">

</style>
