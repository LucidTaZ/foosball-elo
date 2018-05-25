<template>
  <div class="players">
    <h2>Players</h2>
    <div class="row">
      <Player v-for="player in descendingRatingPlayers" :key="player.id" :name="player.name" :rating="player.rating" :matchesPlayed="player.matchesPlayed"></Player>
    </div>

    <FloatingAddButton v-on:click="showNewPlayerForm" />
    <AddPlayerModal ref="addPlayerModal" :server="server" v-on:playerCreated="refresh()" />
  </div>
</template>

<script>
import axios from 'axios'

import FloatingAddButton from '../components/Materialize/FloatingAddButton.vue'
import Modal from '../components/Materialize/Modal.vue'

import AddPlayerModal from '../containers/AddPlayerModal.vue'

import Player from '../components/Player.vue'

export default {
    name: 'PlayersPage',
    components: {
        FloatingAddButton,
        Modal,
        AddPlayerModal,
        Player
    },
    props: {
        server: String
    },
    computed: {
        descendingRatingPlayers: function () {
            return this.players.sort((a, b) => {
                return b.rating - a.rating
            })
        }
    },
    methods: {
        showNewPlayerForm: function () {
            this.$refs.addPlayerModal.show()
        },
        refresh: function () {
            // https://alligator.io/vuejs/rest-api-axios/
            axios.get(this.server + '/players')
                .then(response => {
                    this.players = response.data
                })
        }
    },
    data() {
        return {
            players: []
        }
    },
    created() {
        this.refresh()
    }
}
</script>

<style scoped lang="scss">

</style>
